import Image from "next/image"

export function Leftpic(){
    return(
        <div className="hidden lg:block md:block">
            <Image src="/assets/left.png" alt="left" width={400} height={450} className="rotate-[-1.52deg] md:scale-[0.8] lg:scale-[1]" />
        </div>
    )
}