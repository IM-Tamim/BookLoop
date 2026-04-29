import { FaGithub, FaFacebook, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0B1120] text-white border-t border-white/10">

      <div className="max-w-6xl mx-auto px-6 py-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3 text-center sm:text-left">

        {/* Brand */}
        <div className="space-y-4 flex flex-col items-center sm:items-start">
          <h2 className="text-xl font-bold text-white">
            BookLoop
          </h2>
          <p className="text-sm text-white/70 leading-relaxed">
            Borrow. Read. Return. Repeat.
          </p>
        </div>

        {/* Social */}
        <div className="space-y-4 flex flex-col items-center sm:items-start">
          <h3 className="text-sm font-semibold tracking-widest uppercase text-white/90">
            Follow Us
          </h3>

          <div className="flex gap-5 text-lg justify-center sm:justify-start">
            <a
              href="https://github.com"
              target="_blank"
              className="text-white/70 hover:text-primary transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://facebook.com"
              target="_blank"
              className="text-white/70 hover:text-primary transition"
            >
              <FaFacebook />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              className="text-white/70 hover:text-primary transition"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Contact */}
        <div className="space-y-4 flex flex-col items-center sm:items-start">
          <h3 className="text-sm font-semibold tracking-widest uppercase text-white/90">
            Contact Us
          </h3>

          <p className="flex items-center gap-2 text-sm text-white/70 justify-center sm:justify-start">
            <FaEnvelope className="text-primary" />
            support@bookloop.com
          </p>

          <p className="flex items-center gap-2 text-sm text-white/70 justify-center sm:justify-start">
            <FaPhone className="text-primary" />
            +880 1628110902
          </p>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 py-4 text-center text-xs text-white/50">
        © {new Date().getFullYear()} BookLoop. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;