"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { SiGoogle } from "react-icons/si";
import { toast } from "react-toastify";

const SignInPage = () => {
    const router = useRouter();

    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const userData = Object.fromEntries(formData.entries());

        const { data, error } = await authClient.signIn.email({
            email: userData.email,
            password: userData.password,
            callbackURL: "/home",
        });

        if (error) {
            toast.error(error.message);
        } else {
            router.push("/home");
            toast.success("Login Successful!");
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
        <div className="min-h-screen flex items-center justify-center bg-base-200">
            <div className="card w-96 bg-base-100 shadow-xl p-6">

                <h2 className="text-2xl font-bold text-center mb-4">
                    Login
                </h2>

                <form onSubmit={onSubmit} className="flex flex-col gap-4">

                    <div>
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            name="email"
                            type="email"
                            placeholder="name@gmail.com"
                            className="input input-bordered w-full"
                            required
                        />
                    </div>

                    <div>
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input
                            name="password"
                            type="password"
                            placeholder="Enter password"
                            className="input input-bordered w-full"
                            required
                        />
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-2 mt-2">
                        <button className="btn btn-primary btn-outline w-1/2" type="submit">
                            Login
                        </button>
                        <button className="btn btn-outline w-1/2" type="reset">
                            Reset
                        </button>
                    </div>

                    <div className="divider">OR</div>

                    <button
                        type="button"
                        onClick={handleGoogleLogin}
                        className="btn btn-outline btn-primary w-full flex items-center justify-center gap-2"
                    >
                        <SiGoogle />
                        Continue with Google
                    </button>

                    <p className="text-center text-sm mt-2">
                        Don’t have an account?{" "}
                        <Link href="/signup" className="link link-primary font-semibold">
                            Sign Up
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default SignInPage;