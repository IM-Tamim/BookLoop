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
      className={isActive ? "text-primary border-b-2 font-semibold" : "text-base-90"}
    >
      {children}
    </Link>
  );
};

export default NavLink;
