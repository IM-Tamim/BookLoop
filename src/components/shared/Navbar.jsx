'use client'
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import Image from "next/image";
import NavLink from "./NavLink";
import userAvatar from "@/assets/user.png"

const Navbar = () => {
    const { data: session, isPending } = authClient.useSession();
    const user = session?.user;

    const links = <>
        <li><NavLink href="/home">Home</NavLink></li>
        <li><NavLink href="/all-books">All Books</NavLink></li>
        <li><NavLink href="/profile">Profile</NavLink></li>
    </>

    return (
        <div className="bg-base-100 shadow-sm ">
            <div className="navbar container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <Link href={'/'} className="btn btn-ghost text-xl text-primary font-bold">BookLoop</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    {isPending ? (
                        <span className="loading loading-spinner text-secondary"></span>
                    ) : user ? (
                        <div className="flex items-center gap-3">
                            <span className="text-sm font-medium">{user?.name || "User"}</span>
                            <div className="w-9 h-9 rounded-full overflow-hidden">
                                <Image
                                    src={user?.image || userAvatar}
                                    alt="User Avatar"
                                    width={36}
                                    height={36}
                                    className="object-cover"
                                />
                            </div>
                            <button
                                className="btn"
                                onClick={async () => await authClient.signOut()}
                            >
                                Logout
                            </button>
                        </div>
                    ) : (
                        <div className="flex items-center gap-2">
                            <Link href="/signin" className="btn btn-outline btn-info ">Login</Link>
                            <Link href="/signup" className="btn btn-primary btn-outline">Register</Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;