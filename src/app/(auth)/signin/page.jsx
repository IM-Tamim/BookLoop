"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const SignInPage = () => {
    const router = useRouter();

    const onSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const userData = Object.fromEntries(formData.entries());

        const { data, error } = await authClient.signIn.email({
            email: userData.email,
            password: userData.password, // ✅ REQUIRED
            callbackURL: "/home",
        });

        if (error) {
            toast.error(error.message);
        } else {
            router.push("/home");
            toast.success("Signin Successful!");
        }

        console.log(data, error);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-base-200">
            <div className="card w-96 bg-base-100 shadow-xl p-6">
                <h2 className="text-2xl font-bold text-center mb-4">
                    Sign In
                </h2>

                <form onSubmit={onSubmit} className="flex flex-col gap-4">

                    {/* Email */}
                    <div>
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            name="email"
                            type="email"
                            placeholder="name@example.com"
                            className="input input-bordered w-full"
                            required
                        />
                    </div>

                    {/* Password */}
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
                        <button className="btn btn-primary w-1/2" type="submit">
                            Sign In
                        </button>
                        <button className="btn btn-outline w-1/2" type="reset">
                            Reset
                        </button>
                    </div>

                    <div className="divider">OR</div>

                    <p className="text-center text-sm">
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