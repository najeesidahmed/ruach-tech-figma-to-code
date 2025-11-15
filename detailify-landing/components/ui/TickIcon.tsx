import Image from "next/image";

export function TickIcon() {
    return (
        <Image
            src="/icons/tick.svg"
            alt=""
            width={16}
            height={16}
            className="shrink-0"
        />
    )
}