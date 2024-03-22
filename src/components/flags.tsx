interface FlagsProps {
    flags: string[];
}

export default function Flags({ flags }: FlagsProps) {
    return (
        <div className="flex flex-row gap-2">
            {flags.map((flag, index) => {
                const [flagName, flagType] = flag.split(" ");
                return (
                    <span
                        key={index}
                        className={`py-1 px-3 text-xs rounded-2xl ${getFlagColorClass(
                            flagType
                        )}`}
                    >
                        {flagName}
                    </span>
                );
            })}
        </div>
    );
}

function getFlagColorClass(flag: string): string {
    switch (flag) {
        case "green":
            return "bg-green-300";
        case "red":
            return "bg-red-300";
        case "yellow":
            return "bg-yellow-300";
        default:
            return "bg-gray-300";
    }
}
