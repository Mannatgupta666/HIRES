export function Brandstorm(){
    return(
        <div className="relative flex flex-col bg-rose-400 w-full md:h-[400px] sm:h-[300px] h-[400px] rounded-xl ">
            <img src="/assets/pin.png" alt="pin" className="absolute w-8 h-8 top-4 left-4"/>
            <div className="absolute flex w-full h-full">
                <div className="absolute flex flex-col left-[10vw] lg:top-[10vh] md:top-[10vh] top-[15vh] w-[40vw] sm:gap-y-8 gap-y-4">
                    <h1 className="font-bold lg:text-7xl md:text-6xl text-3xl">Brandstorm</h1>
                    <p className="lg:text-[15px] md:text-[15px] text-[10px]">An inspiring event challenging future designers and design enthusiasts to revolutionize food entrepreneurship and education. Teams from diverse design disciplines tackle one of two compelling problem statements.</p>
                </div>

            </div>
            <div className="absolute bottom-0 right-0 w-40 md:w-72 lg:w-100">
            <div className="relative w-full h-full" style={{opacity:1}}>
                <img src="/assets/brandstormBG.webp" alt="phone"  className="transition-transform duration-300 ease-in-out hover:scale-105"/>
            </div>
            </div>

        </div>
    )
}