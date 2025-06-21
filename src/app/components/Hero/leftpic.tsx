import Image from "next/image"

export function Leftpic(){
    return(
        <div className="flex flex-row hidden lg:block">
            <Image src="/assets/left.png" alt="left" width={400} height={450} className="rotate-[-1.52deg]" />
        </div>
    )
}