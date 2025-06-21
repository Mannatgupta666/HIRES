import Image from "next/image"

export function Rightpic(){
    return(
        <div className="flex flex-row-reverse hidden lg:block">
            <Image src="/assets/right.png" alt="left" width={400} height={450} />
        </div>
    )
}