"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { SiGoogle } from "react-icons/si";
import { FiUser, FiMail, FiLock, FiImage, FiArrowRight } from "react-icons/fi";
import { Suspense } from "react";

const SignUpForm = () => {
    const router = useRouter();

    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const userData = Object.fromEntries(formData.entries());

        const { data, error } = await authClient.signUp.email({
            email: userData.email,
            password: userData.password,
            name: userData.name,
            image: userData.photo,
            callbackURL: "/signin",
        });

        if (error) {
            toast.error(error.message);
        } else {
            await authClient.signOut();
            toast.success("Registration Successful!");
            // After registration, always go to /signin with no callbackUrl
            // so after login they land on /home
            router.push("/signin");
        }
    };

    const handleGoogleLogin = async () => {
        const { error } = await authClient.signIn.social({
            provider: "google",
            callbackURL: "/home",
        });

        if (error) {
            toast.error(error.message);
        }
    };

    const inputClass = "w-full pl-11 pr-4 py-3 rounded-xl text-sm outline-none transition-all";
    const inputStyle = { background: "rgba(255,255,255,0.05)", border: "1px solid rgba(79,142,247,0.2)", color: "#e2e8f0" };
    const onFocus = (e) => (e.target.style.borderColor = "rgba(79,142,247,0.6)");
    const onBlur = (e) => (e.target.style.borderColor = "rgba(79,142,247,0.2)");

    return (
        <div
            className="min-h-screen flex items-center justify-center px-4 py-10"
            style={{ background: "linear-gradient(135deg, #0a0f1e 0%, #0d1b3e 50%, #0a1628 100%)" }}
        >
            <div className="w-full max-w-md">

                <div className="text-center mb-8">
                    <h1 className="text-4xl font-black tracking-tight text-primary">
                        Book<span className="text-yellow-500">Loop</span>
                    </h1>
                    <p className="text-sm mt-1" style={{ color: "#4a6080" }}>Create your account</p>
                </div>

                <div
                    className="rounded-2xl p-8 border"
                    style={{
                        background: "rgba(255,255,255,0.03)",
                        borderColor: "rgba(79,142,247,0.15)",
                        boxShadow: "0 0 40px rgba(79,142,247,0.07), 0 20px 60px rgba(0,0,0,0.4)",
                    }}
                >
                    <form onSubmit={onSubmit} className="flex flex-col gap-5">

                        <div className="flex flex-col gap-1.5">
                            <label className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#4a6080" }}>Name</label>
                            <div className="relative">
                                <FiUser className="absolute left-4 top-1/2 -translate-y-1/2" size={15} style={{ color: "#4f8ef7" }} />
                                <input name="name" type="text" placeholder="Your Name" className={inputClass} style={inputStyle} onFocus={onFocus} onBlur={onBlur} required minLength={3} />
                            </div>
                        </div>

                        <div className="flex flex-col gap-1.5">
                            <label className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#4a6080" }}>Email</label>
                            <div className="relative">
                                <FiMail className="absolute left-4 top-1/2 -translate-y-1/2" size={15} style={{ color: "#4f8ef7" }} />
                                <input name="email" type="email" placeholder="name@gmail.com" className={inputClass} style={inputStyle} onFocus={onFocus} onBlur={onBlur} required />
                            </div>
                        </div>

                        <div className="flex flex-col gap-1.5">
                            <label className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#4a6080" }}>Photo URL</label>
                            <div className="relative">
                                <FiImage className="absolute left-4 top-1/2 -translate-y-1/2" size={15} style={{ color: "#4f8ef7" }} />
                                <input name="photo" type="url" placeholder="https://example.com/photo.jpg" className={inputClass} style={inputStyle} onFocus={onFocus} onBlur={onBlur} />
                            </div>
                        </div>

                        <div className="flex flex-col gap-1.5">
                            <label className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#4a6080" }}>Password</label>
                            <div className="relative">
                                <FiLock className="absolute left-4 top-1/2 -translate-y-1/2" size={15} style={{ color: "#4f8ef7" }} />
                                <input name="password" type="password" placeholder="••••••••" className={inputClass} style={inputStyle} onFocus={onFocus} onBlur={onBlur} required minLength={8} />
                            </div>
                            <p className="text-xs" style={{ color: "#4a6080" }}>At least 8 characters</p>
                        </div>

                        <div className="flex gap-3 mt-1">
                            <button
                                type="submit"
                                className="btn btn-accent btn-outline flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold transition-all hover:opacity-90 active:scale-95"
                            >
                                Register <FiArrowRight size={15} />
                            </button>
                            <button
                                type="reset"
                                className="btn btn-error btn-outline px-5 py-3 rounded-xl text-sm font-medium transition-all hover:opacity-80"
                            >
                                Reset
                            </button>
                        </div>

                        <div className="flex items-center gap-3 my-1">
                            <div className="flex-1 h-px" style={{ background: "rgba(79,142,247,0.15)" }} />
                            <span className="text-xs" style={{ color: "#4a6080" }}>OR</span>
                            <div className="flex-1 h-px" style={{ background: "rgba(79,142,247,0.15)" }} />
                        </div>

                        <button
                            type="button"
                            onClick={handleGoogleLogin}
                            className="btn btn-info btn-soft w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-medium transition-all hover:opacity-80"
                        >
                            <SiGoogle size={15} />
                            Continue with Google
                        </button>

                        <p className="text-center text-sm" style={{ color: "#4a6080" }}>
                            Already have an account?{" "}
                            {/* No callbackUrl forwarded — after login they go to /home */}
                            <Link href="/signin" className="font-semibold text-secondary hover:text-info">Login</Link>
                        </p>

                    </form>
                </div>
            </div>
        </div>
    );
};

const SignUpPage = () => {
    return (
        <Suspense fallback={
            <div className="min-h-screen flex items-center justify-center" style={{ background: "#0a0f1e" }}>
                <span className="loading loading-spinner text-primary"></span>
            </div>
        }>
            <SignUpForm />
        </Suspense>
    );
};

export default SignUpPage;