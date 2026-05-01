"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { SiGoogle } from "react-icons/si";
import { toast } from "react-toastify";
import { Suspense } from "react";
import { FiMail, FiLock, FiArrowRight } from "react-icons/fi";

const SignInForm = () => {
    const router = useRouter();

    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const userData = Object.fromEntries(formData.entries());

        const { data, error } = await authClient.signIn.email({
            email: userData.email,
            password: userData.password,
        });

        if (error) {
            toast.error(error.message);
        } else {
            toast.success("Login Successful!");
            router.push("/home");
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

    return (
        <div className="min-h-screen flex items-center justify-center px-4"
            style={{ background: "linear-gradient(135deg, #0a0f1e 0%, #0d1b3e 50%, #0a1628 100%)" }}
        >
            <div className="w-full max-w-md">

                <div className="text-center mb-8">
                    <h1 className="text-4xl font-black tracking-tight text-primary">
                        Book<span className="text-yellow-500">Loop</span>
                    </h1>
                    <p className="text-sm mt-1" style={{ color: "#4a6080" }}>
                        Login to your account
                    </p>
                </div>

                <div className="rounded-2xl p-8 border"
                    style={{
                        background: "rgba(255,255,255,0.03)",
                        borderColor: "rgba(79, 142, 247, 0.15)",
                        boxShadow: "0 0 40px rgba(79, 142, 247, 0.07), 0 20px 60px rgba(0,0,0,0.4)"
                    }}
                >
                    <form onSubmit={onSubmit} className="flex flex-col gap-5">

                        <div className="flex flex-col gap-1.5">
                            <label className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#4a6080" }}>
                                Email
                            </label>
                            <div className="relative">
                                <FiMail className="absolute left-4 top-1/2 -translate-y-1/2" size={15} style={{ color: "#4f8ef7" }} />
                                <input
                                    name="email"
                                    type="email"
                                    placeholder="name@gmail.com"
                                    className="w-full pl-11 pr-4 py-3 rounded-xl text-sm outline-none transition-all"
                                    style={{
                                        background: "rgba(255,255,255,0.05)",
                                        border: "1px solid rgba(79, 142, 247, 0.2)",
                                        color: "#e2e8f0",
                                    }}
                                    onFocus={e => e.target.style.borderColor = "rgba(79, 142, 247, 0.6)"}
                                    onBlur={e => e.target.style.borderColor = "rgba(79, 142, 247, 0.2)"}
                                    required
                                />
                            </div>
                        </div>

                        <div className="flex flex-col gap-1.5">
                            <label className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#4a6080" }}>
                                Password
                            </label>
                            <div className="relative">
                                <FiLock className="absolute left-4 top-1/2 -translate-y-1/2" size={15} style={{ color: "#4f8ef7" }} />
                                <input
                                    name="password"
                                    type="password"
                                    placeholder="••••••••"
                                    className="w-full pl-11 pr-4 py-3 rounded-xl text-sm outline-none transition-all"
                                    style={{
                                        background: "rgba(255,255,255,0.05)",
                                        border: "1px solid rgba(79, 142, 247, 0.2)",
                                        color: "#e2e8f0",
                                    }}
                                    onFocus={e => e.target.style.borderColor = "rgba(79, 142, 247, 0.6)"}
                                    onBlur={e => e.target.style.borderColor = "rgba(79, 142, 247, 0.2)"}
                                    required
                                />
                            </div>
                        </div>

                        <div className="flex gap-3 mt-1">
                            <button
                                type="submit"
                                className="btn btn-accent btn-outline flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold transition-all hover:opacity-90 active:scale-95"
                            >
                                Sign In <FiArrowRight size={15} />
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
                            Do not have an account?{" "}
                            <Link href="/signup" className="text-secondary font-semibold hover:text-info">
                                Register
                            </Link>
                        </p>

                    </form>
                </div>
            </div>
        </div>
    );
};

const SignInPage = () => {
    return (
        <Suspense fallback={
            <div className="min-h-screen flex items-center justify-center" style={{ background: "#0a0f1e" }}>
                <span className="loading loading-spinner text-primary"></span>
            </div>
        }>
            <SignInForm />
        </Suspense>
    );
};

export default SignInPage;