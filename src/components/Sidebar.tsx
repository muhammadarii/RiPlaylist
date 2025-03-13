"use client";

import React from "react";
import { BiSolidHome } from "react-icons/bi";
import { SiApplemusic } from "react-icons/si";
import { BsChatSquareHeartFill } from "react-icons/bs";
import { IoSettingsSharp } from "react-icons/io5";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const menuItems = [
  { href: "/", icon: BiSolidHome },
  { href: "/albums", icon: SiApplemusic },
  { href: "/playlists", icon: BsChatSquareHeartFill },
  { href: "/setting", icon: IoSettingsSharp },
];

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div
      className="absolute left-1/2 top-[90%] -translate-x-1/2 -translate-y-1/2 
                    lg:left-6 lg:top-24 lg:translate-x-0 lg:translate-y-0 
                    flex items-center justify-center w-56 h-14 lg:w-14 lg:h-56 
                    bg-black rounded-full shadow-lg"
    >
      <div className="flex flex-row lg:flex-col items-center justify-center gap-6">
        {menuItems.map(({ href, icon: Icon }) => {
          const isActive = pathname === href;

          return (
            <Link key={href} href={href}>
              <motion.div
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className={`text-2xl transition-colors ${
                  isActive ? "text-yellow-400" : "text-gray-500"
                }`}
              >
                <Icon />
              </motion.div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
