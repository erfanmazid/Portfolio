"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function Navbar() {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#2a2a2cBF]/75 h-16 border-2 border-light-gray rounded-t-3xl z-50 backdrop-blur-md shadow-lg lg:hidden">
      <ul className="flex gap-3 justify-center items-center h-full text-sm text-gray-300">
        {[
          { href: "/", label: "درباره من" },
          { href: "/resume/", label: "رزومه" },
          { href: "/portfolio/", label: "نمونه کار" },
          { href: "/blog/", label: "بلاگ" },
          { href: "/contact/", label: "ارتباط با من" },
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

export default Navbar;
