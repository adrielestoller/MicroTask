import Flags from "@/components/flags";
import Image from "next/image";

export default function Task() {
    return (
        <main className="w-auto m-2 sm:w-1/2 sm:mx-auto">
            <h2 className="text-2xl font-semibold">Task #0</h2>

            <div className="my-2">
                <Flags
                    flags={[
                        "teste green",
                        "teste red",
                        "teste yellow",
                        "teste red",
                    ]}
                />
            </div>
            <div className="mt-4 flex flex-col gap-4">
                <section>
                    <p className="text-sm">Contributors:</p>
                    <div className="mt-2 flex flex-row gap-2">
                        <Image
                            className="w-5 h-5 rounded-full"
                            src="/profile.jpg"
                            width={100}
                            height={100}
                            alt="contributor"
                        />
                        <Image
                            className="w-5 h-5 rounded-full"
                            src="/profile.jpg"
                            width={100}
                            height={100}
                            alt="contributor"
                        />
                        <Image
                            className="w-5 h-5 rounded-full"
                            src="/profile.jpg"
                            width={100}
                            height={100}
                            alt="contributor"
                        />
                        <Image
                            className="w-5 h-5 rounded-full"
                            src="/profile.jpg"
                            width={100}
                            height={100}
                            alt="contributor"
                        />
                        <Image
                            className="w-5 h-5 rounded-full"
                            src="/profile.jpg"
                            width={100}
                            height={100}
                            alt="contributor"
                        />
                        <Image
                            className="w-5 h-5 rounded-full"
                            src="/profile.jpg"
                            width={100}
                            height={100}
                            alt="contributor"
                        />
                    </div>
                </section>

                <section>
                    <p className="text-sm">Description:</p>
                    <p className="mt-2 text-xs text-justify">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Ducimus officiis aliquam nulla earum molestias
                        dicta. Pariatur amet ab dolorem, obcaecati rem ea
                        possimus facere nobis vitae fuga quas accusamus
                        deleniti.
                    </p>
                </section>

                <button className="w-fit p-3 px-5 text-sm self-center bg-green-500 rounded-2xl">
                    Mark as done
                </button>
            </div>
        </main>
    );
}
