import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="border-zinc-200 bg-zinc-900">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link href="/">
                    <h1 className="self-center text-2xl font-semibold dark:text-white">
                        MicroTask
                    </h1>
                </Link>
                <div className="flex items-center">
                    <Link
                        href="/user"
                        className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                    >
                        <Image
                            className="w-8 h-8 rounded-full"
                            width={100}
                            height={100}
                            src="/profile.jpg"
                            alt="User profile image"
                        />
                    </Link>
                </div>
            </div>
        </nav>
    );
}
