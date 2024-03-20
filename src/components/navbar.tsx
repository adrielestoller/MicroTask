import Image from "next/image";

export default function Navbar() {
    return (
        <nav className="bg-white border-zinc-200 dark:bg-zinc-900">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="/">
                    <h1 className="self-center text-2xl font-semibold dark:text-white">
                        MicroTask
                    </h1>
                </a>
                <div className="flex items-center">
                    <a
                        href="/pages/user.html"
                        className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                    >
                        <Image
                            className="w-8 h-8 rounded-full"
                            width={100}
                            height={100}
                            src="/profile.jpg"
                            alt="User profile image"
                        />
                    </a>
                </div>
            </div>
        </nav>
    );
}
