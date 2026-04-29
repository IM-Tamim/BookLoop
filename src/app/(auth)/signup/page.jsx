"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const SignUpPage = () => {
    const router = useRouter();
    const onSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const userData = Object.fromEntries(formData.entries());

        const { data, error } = await authClient.signUp.email({
            email: userData.email,
            password: userData.password,
            name: userData.name,
            callbackURL: "/",
        });

        if (error) {
            toast.error(error.message);
        } else {
            router.push("/home");
            toast.success("Signup Successful!");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-base-200">
            <div className="card w-96 bg-base-100 shadow-xl p-6">
                <h2 className="text-2xl font-bold text-center mb-4">
                    Create Account
                </h2>

                <form onSubmit={onSubmit} className="flex flex-col gap-4">

                    <div>
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input
                            name="name"
                            type="text"
                            placeholder="Your Name"
                            className="input input-bordered w-full"
                            required
                            minLength={3}
                        />
                    </div>

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
                            minLength={8}
                        />
                        <p className="text-xs mt-1 opacity-70">
                            At least 8 characters
                        </p>
                    </div>

                    <div className="flex gap-2 mt-2">
                        <button className="btn btn-primary w-1/2" type="submit">
                            Sign Up
                        </button>
                        <button className="btn btn-outline w-1/2" type="reset">
                            Reset
                        </button>
                    </div>
                    <h2 className="text-center text-base-content font-semibold">OR</h2>
                    <p className="text-center text-sm">
                        Already have an account?{" "}
                        <Link
                            href="/signin"
                            className="link link-primary font-semibold "
                        >
                            Sign In
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default SignUpPage;