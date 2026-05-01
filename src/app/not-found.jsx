'use client'
import { useRouter } from "next/navigation";
import { FiArrowLeft } from "react-icons/fi";

const NotFoundPage = () => {
    const router = useRouter();

    return (
        <div
            className="h-screen flex flex-col items-center justify-center text-center px-4"
            style={{ background: "linear-gradient(135deg, #0a0f1e 0%, #0d1b3e 50%, #0a1628 100%)" }}
        >
            <h1
                className="text-9xl font-black tracking-tight"
                style={{ color: "rgba(79,142,247,0.15)", fontSize: "10rem" }}
            >
                404
            </h1>

            <h2 className="text-2xl font-bold" style={{ color: "#e2e8f0" }}>
                Page Not Found
            </h2>
            <p className="text-sm mt-2 mb-8" style={{ color: "#4a6080" }}>
                The page you’re looking for doesn’t exist or has been moved.
            </p>

            <button
                onClick={() => router.back()}
                className="flex items-center gap-2 py-3 px-6 rounded-xl text-sm font-bold transition-all hover:opacity-90 active:scale-95"
                style={{ background: "linear-gradient(135deg, #2563eb, #4f8ef7)", color: "#fff" }}
            >
                <FiArrowLeft size={15} />
                Go Back
            </button>
        </div>
    );
};

export default NotFoundPage;