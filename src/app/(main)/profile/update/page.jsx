'use client'
import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { FiUser, FiImage, FiArrowRight } from "react-icons/fi";

const UpdateProfilePage = () => {
    const router = useRouter();
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [loading, setLoading] = useState(false);

    const handleUpdate = async () => {
        setLoading(true);
        await authClient.updateUser({ name, image });
        setLoading(false);
        toast.success("Profile updated successfully!");
        router.push("/profile");
    };

    const inputStyle = {
        background: "rgba(255,255,255,0.05)",
        border: "1px solid rgba(79,142,247,0.2)",
        color: "#e2e8f0",
    };
    const onFocus = (e) => (e.target.style.borderColor = "rgba(79,142,247,0.6)");
    const onBlur = (e) => (e.target.style.borderColor = "rgba(79,142,247,0.2)");

    return (
        <div
            className="min-h-screen flex items-center justify-center px-4"
            style={{ background: "linear-gradient(135deg, #0a0f1e 0%, #0d1b3e 50%, #0a1628 100%)" }}
        >
            <div className="w-full max-w-md">

                <div
                    className="rounded-2xl p-8 border flex flex-col gap-6"
                    style={{
                        background: "rgba(255,255,255,0.03)",
                        borderColor: "rgba(79,142,247,0.15)",
                        boxShadow: "0 0 40px rgba(79,142,247,0.07), 0 20px 60px rgba(0,0,0,0.4)"
                    }}
                >
                    <h1 className="text-xl font-bold" style={{ color: "#e2e8f0" }}>Update Profile</h1>

                    <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#4a6080" }}>Name</label>
                        <div className="relative">
                            <FiUser className="absolute left-4 top-1/2 -translate-y-1/2" size={15} style={{ color: "#4f8ef7" }} />
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Your name"
                                className="w-full pl-11 pr-4 py-3 rounded-xl text-sm outline-none transition-all"
                                style={inputStyle}
                                onFocus={onFocus}
                                onBlur={onBlur}
                                required
                            />
                        </div>
                    </div>

                    <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#4a6080" }}>Image URL</label>
                        <div className="relative">
                            <FiImage className="absolute left-4 top-1/2 -translate-y-1/2" size={15} style={{ color: "#4f8ef7" }} />
                            <input
                                type="text"
                                value={image}
                                onChange={(e) => setImage(e.target.value)}
                                placeholder="https://example.com/photo.jpg"
                                className="w-full pl-11 pr-4 py-3 rounded-xl text-sm outline-none transition-all"
                                style={inputStyle}
                                onFocus={onFocus}
                                onBlur={onBlur}
                                required
                            />
                        </div>
                    </div>

                    <button
                        onClick={handleUpdate}
                        disabled={loading}
                        className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold transition-all hover:opacity-90 active:scale-95 disabled:cursor-not-allowed disabled:opacity-50"
                        style={{ background: "linear-gradient(135deg, #2563eb, #4f8ef7)", color: "#fff" }}
                    >
                        {loading ? "Updating..." : <> Update Information <FiArrowRight size={15} /> </>}
                    </button>

                </div>
            </div>
        </div>
    );
};

export default UpdateProfilePage;