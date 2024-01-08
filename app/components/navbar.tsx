import Link from "next/link";
import { ModeToggle } from "./mode-toggle";

export default function Navbar() {
    return (
        <nav className="w-full relative flex justify-between items-center max-w-2xl mx-auto px-4 py-5">
            <Link href="/" className="font-bold text-3xl">
                Sanity<span className="text-primary">Blogs</span>
            </Link>
            <ModeToggle />
        </nav>
    )
}