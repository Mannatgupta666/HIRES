import Image from "next/image"
export function Speaker(){
    return(
                <div className="group flex md:flex-col items-center md:w-[18vw] md:ml-[11.5vw] mb-[45px] sm:mb-[60px] pl-[9vw] md:px-0">
                  <div className="relative p-1 transform transition-all duration-200 -rotate-[3deg] group-hover:rotate-0 group-hover:scale-110">
                    <Image src="/assets/voicepic.png" alt="1" width={293} height={293} className="scale-[0.8] lg:scale-[1] transition-transform duration-300 ease-in-out group-hover:scale-105"/>
                    <Image src="/assets/butterfly3.png" alt="1" width={108} height={108} className="absolute top-[-3.5vw] right-[-3vw] h-[16vw] w-[16vw] md:h-[7.5vw] md:w-[7.5vw] transform transition-all duration-300 group-hover:scale-125"/>
                    <Image src="/assets/butterfly4.png" alt="1" width={108} height={108} className="absolute top-[17vw] md:top-[8vw] left-[-3.5vw] md:left-[-2vw] h-[11vw] w-[11vw] md:h-[5.2vw] md:w-[5.2vw] transform transition-all duration-300 group-hover:scale-125"/>

        
            </div>
            <div className="w-[44vw] md:w-full flex text-left md:text-center pl-[5vw] md:pl-0 flex-col md:justify-center md:items-center mt-4">
                <div className="flex items-center md:justify-center mb-[5px]">
                    <img src="/images/pyramid.webp" alt="" className=" hidden md:block mr-[6px]  w-[23px] h-[21px] lg:h-[24px] lg:w-[27px]"/>
                    <h3 className=" lg:tracking-[2px] font-newake text-lg font-bold tracking-wide md:text-xl lg:text-2xl text-[#2E3272]">Prateek Sethi</h3>
                </div>
                    <p className="text-sm text-gray-600 md:text-base lg:text-lg font-causten-medium">Founder &amp; Creative Director - Trip Creative Services</p>
                    <p className="mt-1 text-xs text-gray-500 md:text-sm lg:text-base text-[16px]  leading-[19.2px] sm:leading-[30px] md:leading-3 lg:leading-[21.6px] font-causten-light">Times 40 under 40, Animator, producer, TEDx speaker, ex-host of Pogo TV's 'FAQ,' and creator of 'Folktales of India'.</p>
            </div>
        </div>
    )
}