"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { SiGoogle } from "react-icons/si";

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
            image: userData.photo, // 👈 photo-url added
            callbackURL: "/signin", // 👈 go to login page after success
        });

        if (error) {
            toast.error(error.message);
        } else {
            toast.success("Registration Successful!");
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
                            placeholder="name@gmail.com"
                            className="input input-bordered w-full"
                            required
                        />
                    </div>

                    <div>
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input
                            name="photo"
                            type="url"
                            placeholder="Your photo URL"
                            className="input input-bordered w-full"
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
                            minLength={8}
                        />
                        <p className="text-xs mt-1 opacity-70">
                            At least 8 characters
                        </p>
                    </div>

                    <div className="flex gap-2 mt-2">
                        <button className="btn btn-primary btn-outline w-1/2" type="submit">
                            Register
                        </button>
                        <button className="btn btn-outline w-1/2" type="reset">
                            Reset
                        </button>
                    </div>

                    <div className="divider">OR</div>

                    <button
                        type="button"
                        onClick={handleGoogleLogin}
                        className="btn btn-primary btn-outline w-full flex items-center justify-center gap-2"
                    >
                        <SiGoogle/>
                        Continue with Google
                    </button>

                    <p className="text-center text-sm mt-2">
                        Already have an account?{" "}
                        <Link href="/signin" className="link link-primary font-semibold">
                            Sign In
                        </Link>
                    </p>

                </form>
            </div>
        </div>
    );
};

export default SignUpPage;