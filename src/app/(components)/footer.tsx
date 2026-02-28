import Link from "next/link";

function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-900/50 py-12">
      <div className="container mx-auto px-4 text-center">
        <p className="text-slate-400 mb-4">
          © 2026 Gantulga. Built with Next.js & Framer Motion
        </p>
        <div className="flex justify-center gap-6">
          <Link
            href="https://github.com"
            className="text-slate-400 hover:text-blue-400 transition"
          >
            GitHub
          </Link>
          <Link
            href="https://discord.com"
            className="text-slate-400 hover:text-blue-400 transition"
          >
            Discord
          </Link>
          <Link
            href="mailto:eternalcrystal7@gmail.com"
            className="text-slate-400 hover:text-blue-400 transition"
          >
            Email
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;