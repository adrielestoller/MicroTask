import { Github, Linkedin, Instagram, Twitter } from "lucide-react";
import Image from "next/legacy/image";
import TaskCard from "../../components/taskcard";
import Link from "next/link";

export default function User() {
    return (
        <main className="w-auto m-2 sm:w-1/2 sm:mx-auto">
            <div className="w-full flex flex-col gap-3 items-center">
                <Image
                    className="border-8 border-zinc-900 rounded-full"
                    src="/profile.jpg"
                    width={250}
                    height={250}
                    alt="user photo"
                />
                <div className="flex flex-col items-center">
                    <h2 className="text-xl">Adriel Estoller</h2>
                    <p className="text-xs text-zinc-600">
                        Project X, Software Engineer
                    </p>
                </div>
                <div className="flex gap-2 text-zinc-600">
                    <Link href="">
                        <Github />
                    </Link>
                    <Link href="">
                        <Linkedin />
                    </Link>
                    <Link href="">
                        <Instagram />
                    </Link>
                    <Link href="">
                        <Twitter />
                    </Link>
                </div>
            </div>
            <div className="mt-4 flex flex-col gap-3">
                <h2 className="text-center text-xl">Tasks</h2>
                <TaskCard title="Task #00" contributors={["/profile.jpg"]} />
                <TaskCard title="Task #00" contributors={["/profile.jpg"]} />
                <TaskCard title="Task #00" contributors={["/profile.jpg"]} />
            </div>
        </main>
    );
}
