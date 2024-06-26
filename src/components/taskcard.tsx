import Link from "next/link";
import Flags from "./flags";
import Image from "next/legacy/image";

interface TaskCardProps {
    title: string;
    contributors: string[];
}

export default function TaskCard({ title, contributors }: TaskCardProps) {
    return (
        <div className="p-2 text-zinc-700 bg-zinc-300 rounded-lg">
            <div className="flex flex-col gap-2">
                <Link href="task">
                    <div className="flex flex-row gap-2 items-center">
                        <h3 className="text-sm">{title}</h3>
                    </div>
                </Link>
                <Flags flags={["teste green", "teste red"]} />
                <div className="flex gap-1">
                    {contributors.map((contributor, index) => {
                        return (
                            <Image
                                className="rounded-full"
                                key={index}
                                src={contributor}
                                width={30}
                                height={30}
                                alt="contributor image"
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
