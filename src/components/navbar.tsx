import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="border-zinc-200 bg-zinc-900">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link
                    href="/"
                    className="self-center text-2xl font-semibold dark:text-white cursor-pointer"
                >
                    MicroTask
                </Link>
                <div className="flex items-center">
                    <Link
                        href="/user"
                        className="flex items-center bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                    >
                        <div className="relative h-8 w-8 md:h-10 md:w-10">
                            <Image
                                className="rounded-full"
                                layout="fill"
                                objectFit="cover"
                                src="/profile.jpg"
                                alt="User profile image"
                            />
                        </div>
                    </Link>
                </div>
            </div>
        </nav>
    );
}
