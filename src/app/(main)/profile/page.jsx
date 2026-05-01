'use client'
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import userAvatar from "@/assets/user.png"

const ProfilePage = () => {
    const userData = authClient.useSession();
    const user = userData.data?.user;

    return (
        <div
            className="min-h-screen flex items-center justify-center px-4"
            style={{ background: "linear-gradient(135deg, #0a0f1e 0%, #0d1b3e 50%, #0a1628 100%)" }}
        >
            <div className="w-full max-w-md">

                <div
                    className="rounded-2xl p-8 border flex flex-col items-center gap-5"
                    style={{
                        background: "rgba(255,255,255,0.03)",
                        borderColor: "rgba(79,142,247,0.15)",
                        boxShadow: "0 0 40px rgba(79,142,247,0.07), 0 20px 60px rgba(0,0,0,0.4)"
                    }}
                >
                    <div
                        className="relative w-24 h-24 rounded-full overflow-hidden"
                        style={{ border: "2px solid rgba(79,142,247,0.4)" }}
                    >
                        <Image
                            src={user?.image && user.image.startsWith("http") ? user.image : userAvatar}
                            alt="User Image"
                            referrerPolicy="no-referrer"
                            fill
                            className="object-cover"
                            onError={(e) => { e.target.src = userAvatar.src; }}
                        />
                    </div>

                    <div className="text-center">
                        <h1 className="text-xl font-bold" style={{ color: "#e2e8f0" }}>{user?.name}</h1>
                        <p className="text-sm mt-1" style={{ color: "#4a6080" }}>{user?.email}</p>
                    </div>

                    <div
                        className="w-full pt-5 flex flex-col gap-3 text-sm"
                        style={{ borderTop: "1px solid rgba(79,142,247,0.1)" }}
                    >
                        <div className="flex justify-between">
                            <span style={{ color: "#4a6080" }}>Name</span>
                            <span className="font-medium" style={{ color: "#94a3b8" }}>{user?.name}</span>
                        </div>
                        <div className="flex justify-between">
                            <span style={{ color: "#4a6080" }}>Email</span>
                            <span className="font-medium" style={{ color: "#94a3b8" }}>{user?.email}</span>
                        </div>
                    </div>

                    <Link
                        href="/profile/update"
                        className="w-full text-center text-sm font-bold px-6 py-3 rounded-xl transition-all hover:opacity-90 active:scale-95"
                        style={{ background: "linear-gradient(135deg, #2563eb, #4f8ef7)", color: "#fff" }}
                    >
                        Update Profile
                    </Link>

                </div>
            </div>
        </div>
    );
};

export default ProfilePage;