'use client'
import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

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

    return (
        <div className="min-h-screen bg-slate-50">
            <div className="max-w-md mx-auto py-16 px-4">
                <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 flex flex-col gap-6">

                    <h1 className="text-xl font-bold text-slate-800">Update Profile</h1>

                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium text-slate-600">Name</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Your name"
                            className="border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-700 outline-none focus:border-blue-400 transition-colors"
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium text-slate-600">Image URL</label>
                        <input
                            type="text"
                            value={image}
                            onChange={(e) => setImage(e.target.value)}
                            placeholder="https://example.com/photo.jpg"
                            className="border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-700 outline-none focus:border-blue-400 transition-colors"
                        />
                    </div>

                    <button
                        onClick={handleUpdate}
                        disabled={loading}
                        className="w-full bg-blue-500 hover:bg-blue-600 disabled:bg-slate-300 disabled:cursor-not-allowed text-white text-sm font-semibold px-6 py-3 rounded-full transition-colors duration-200"
                    >
                        {loading ? "Updating..." : "Update Information"}
                    </button>

                </div>
            </div>
        </div>
    );
};

export default UpdateProfilePage;