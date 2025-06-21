import Image from "next/image"
export function Hero(){
    return(
        
        <div className="flex flex-row justify-center lg:px-[300px] px-[40px]">
            <div className="flex flex-col items-center justify-between lg:gap-y-[44px] lg:w-[616px] lg:h-[329.26px] w-[250px] h-[150px] pt-[100px] gap-y-[30px]">
                <div>
                    <Image src="/assets/Frame 1597884674.png" alt="Eventname" width={400} height={200.26} />
                </div>
                <div>
                    <Image src="/assets/tagline.png" alt="tagline" width={616} height={48} className="hidden lg:block" />
                    <Image src="/assets/tagline2.png" alt="tagline" width={616} height={48} className="lg:hidden" />
                </div>
            </div>
        </div>

    )
}