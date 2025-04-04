import Link from "next/link";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/rent", label: "Rent" },
  { href: "/about-us", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full fixed flex justify-between items-center p-4 mx-auto container z-50 transition-all duration-300 ${
        scrolled ? "bg-black/80 backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <Link href="/">
        <h1 className="font-bold text-2xl">R1estate</h1>
      </Link>
      <div className="flex gap-10 font-medium items-center">
        {navLinks.map(({ href, label }) => (
          <Link
            key={label}
            href={href}
            className={`hover:text-gray-300 transition-colors ${
              scrolled ? "text-white" : "text-white"
            }`}
          >
            {label}
          </Link>
        ))}
        <Link
          href="/signin"
          className={`w-30 h-12 flex justify-center items-center rounded-xl transition-colors ${
            scrolled
              ? "bg-white text-black hover:bg-gray-200 font-semibold"
              : "bg-white text-black hover:bg-gray-200 font-semibold"
          }`}
        >
          Login
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
