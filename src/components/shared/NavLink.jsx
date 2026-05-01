'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ href, children, matchPaths = [] }) => {
  const pathname = usePathname();
  const allMatches = [href, ...matchPaths];
  const isActive = allMatches.some(
    (p) => pathname === p || pathname.startsWith(p + "/")
  );

  return (
    <Link
      href={href}
      className={isActive ? "font-semibold border-b-2" : ""}
      style={isActive ? { color: "#4f8ef7", borderColor: "#4f8ef7" } : { color: "#94a3b8" }}
    >
      {children}
    </Link>
  );
};

export default NavLink;
