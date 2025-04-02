import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/", label: "Rent" },
  { href: "/about-us", label: "About Us" },
  { href: "/signin", label: "Login" },
];

const Navbar = () => {
  return (
    <nav className="w-full fixed flex justify-between items-center p-4 mx-auto container z-50">
      <Link href="/">
        <h1 className="font-bold text-2xl">R1estate</h1>
      </Link>
      <div className="flex gap-10 font-medium items-center">
        {navLinks.map(({ href, label }) => (
          <Link key={label} href={href}>
            {label}
          </Link>
        ))}
        <Link
          href="/"
          className="bg-white w-30 h-12 flex justify-center items-center rounded-xl text-black"
        >
          Get Started
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
