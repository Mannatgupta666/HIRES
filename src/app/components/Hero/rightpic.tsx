import Image from "next/image"

export function Rightpic(){
    return(
        <div className="hidden lg:block md:block">
            <Image src="/assets/right.png" alt="left" width={400} height={450} className="md:scale-[0.8] lg:scale-[1]" />
        </div>
    )
}