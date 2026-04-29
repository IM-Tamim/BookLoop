'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({href, children}) => {
    const pathname = usePathname();
    const isActive = pathname === href;
    return (
        <div>
            <Link href={href} className={isActive ? "text-blue-500 border-b-2" : "text-base-90"}>
                {children}
            </Link>
        </div>
    );
};

export default NavLink;