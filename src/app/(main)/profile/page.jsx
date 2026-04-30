'use client'
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import userAvatar from "@/assets/user.png"

const ProfilePage = () => {
    const userData = authClient.useSession();
    const user = userData.data?.user;

    return (
        <div className="min-h-screen bg-slate-50">
            <div className="max-w-md mx-auto py-16 px-4">
                <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 flex flex-col items-center gap-5">

                    <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-slate-200">
                        <Image
                            src={user?.image || userAvatar}
                            alt="User Image"
                            referrerPolicy="no-referrer"
                            fill
                            className="object-cover"
                        />
                    </div>

                    <div className="text-center">
                        <h1 className="text-xl font-bold text-slate-800">{user?.name}</h1>
                        <p className="text-sm text-slate-500 mt-1">{user?.email}</p>
                    </div>

                    <div className="w-full border-t border-slate-100 pt-5 flex flex-col gap-3 text-sm text-slate-600">
                        <div className="flex justify-between">
                            <span className="text-slate-400">Name</span>
                            <span className="font-medium text-slate-700">{user?.name}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-slate-400">Email</span>
                            <span className="font-medium text-slate-700">{user?.email}</span>
                        </div>
                    </div>

                    <Link
                        href="/profile/update"
                        className="w-full text-center bg-blue-500 hover:bg-blue-600 text-white text-sm font-semibold px-6 py-3 rounded-full transition-colors duration-200"
                    >
                        Update Profile
                    </Link>

                </div>
            </div>
        </div>
    );
};

export default ProfilePage;