import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
                <button className="bg-amber-400 w-28 h-50">
                    <Link href="./login">Login</Link>
                </button>
                <button className="bg-amber-400 w-28 h-50">
                    <Link href="./login">Register</Link>
                </button>
            </main>
        </div>
    );
}
