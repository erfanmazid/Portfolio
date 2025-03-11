"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function WebNavbar() {
  const pathname = usePathname();

  return (
    <div className="absolute top-0 left-0 bg-[#2a2a2cBF]/75 h-16 border-b-2 border-r-2 px-7 border-light-gray rounded-tl-3xl rounded-br-3xl  z-50 backdrop-blur-md shadow-lg hidden lg:block">
      <ul className="flex gap-6 justify-center items-center h-full text-balance text-gray-300">
        {[
          { href: "/", label: "درباره من" },
          { href: "/resume", label: "رزومه" },
          { href: "/portfolio", label: "نمونه کار" },
          { href: "/blog", label: "بلاگ" },
          { href: "/contact", label: "ارتباط با من" },
        ].map(({ href, label }) => (
          <li key={href}>
            <Link
              href={href}
              className={`transition-colors duration-300 ${
                pathname === href
                  ? "text-orenge-yellow font-bold"
                  : "text-gray-300"
              }`}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default WebNavbar;
