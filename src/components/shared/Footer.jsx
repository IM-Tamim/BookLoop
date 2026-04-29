import Link from "next/link";
import { FaGithub, FaFacebook, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-base-200 border-t border-base-300">
            <div className="max-w-6xl mx-auto px-6 py-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 text-center sm:text-left">

                <div className="space-y-4 flex flex-col items-center sm:items-start">
                    <h2 className="text-lg font-bold text-primary">BookLoop</h2>
                    <p className="text-sm opacity-70">
                        Borrow. Read. Return. Repeat.
                    </p>
                </div>

                <div className="space-y-4 flex flex-col items-center sm:items-start">
                    <h3 className="font-semibold">Follow Us</h3>
                    <div className="flex gap-4 text-lg justify-center sm:justify-start">
                        <a href="https://github.com" target="_blank" className="hover:text-primary transition">
                            <FaGithub />
                        </a>
                        <a href="https://facebook.com" target="_blank" className="hover:text-primary transition">
                            <FaFacebook />
                        </a>
                        <a href="https://linkedin.com" target="_blank" className="hover:text-primary transition">
                            <FaLinkedin />
                        </a>
                    </div>
                </div>

                <div className="space-y-3 flex flex-col items-center sm:items-start">
                    <h3 className="font-semibold">Contact Us</h3>

                    <p className="flex items-center gap-2 text-sm opacity-70 justify-center sm:justify-start">
                        <FaEnvelope /> support@bookloop.com
                    </p>

                    <p className="flex items-center gap-2 text-sm opacity-70 justify-center sm:justify-start">
                        <FaPhone /> +880 1628110902
                    </p>
                </div>
            </div>
            <div className="text-center text-xs opacity-60 pb-4">
                © {new Date().getFullYear()} BookLoop. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;