import Image from "next/image"
export function Hero(){
    return(
        
            <div className="relative mb-8 flex flex-col mx-auto items-center">
                <div className="relative w-full max-w-xs sm:max-w-md ">
                    <Image src="/assets/Frame 1597884674.png" alt="Eventname" width={400} height={200.26} className="mx-auto md:scale-[0.8] lg:scale-[1]" />
                </div>
            </div>
            
        

    )
}