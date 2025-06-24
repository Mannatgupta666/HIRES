import Image from "next/image"
export function Genesis(){
    return(
        <div className="w-full ">
            <div className="absolute z-10 w-full h-auto top-[40%]">
              <img src="/assets/butterfly.gif" alt="butterfly" width={478.78} height={479.33} className="opacity-50 absolute w-[30vw] h-auto top-1/2 left-1/2 z-10 transform -translate-x-1/2 -translate-y-[50%]"/>
            <h1 className="absolute z-10 font-bold lg:text-8xl sm:text-5xl text-2xl text-center w-full">Genesis In Action</h1>
            <h2 className="absolute text-center w-full text-[1.2vw] mt-[9%] ">EVENTS TO EXPLORE</h2>
            </div>
            <Image src="/assets/hands.png" alt="hands" width={901} height={135} className="absolute w-[50vw] h-auto scale-125 transform translate-x-[-20%] translate-y-[-20%] rotate-90"/>
            <Image src="/assets/hands.png" alt="hands" width={901} height={135} className="rotate-270 w-[50vw] h-auto scale-125 transform translate-x-[112%] translate-y-[30%]" />  

        </div>
    )
}