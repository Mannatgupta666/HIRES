import Image from "next/image";
import { Navbar } from "./components/Hero/Navbar";
import { Hero } from "./components/Hero/hero";
import { Leftpic } from "./components/Hero/leftpic";
import { Rightpic } from "./components/Hero/rightpic";
import { Register } from "./components/Hero/Register";
import { Unity } from "./components/unitysection/unity";
import { Voice } from "./components/voicesection/voicethatmatters";
import { Speaker } from "./components/voicesection/speaker";
import { Genesis } from "./components/Genesis-section/Genesis";
import { Zenigma } from "./components/Events/Zenigma";
import { Brandstorm } from "./components/Events/brandstorm";
import { Merch } from "./components/Merchsection/merch";
import { Merchitems } from "./components/Merchsection/merchitems";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <div className="relative z-20 flex flex-col items-center bg-[#F8F8F8] px-6 py-6 sm:px-10 pb-40 sm:pb-30 lg:px-8 min-h-[60vh]" style={{backgroundImage: "url('/assets/bg.png')", backgroundSize: 'cover', backgroundPosition: 'top', backgroundRepeat: 'no-repeat',}}>
      
      <div className="absolute w-full top-0 left-0 z-30 pt-[48px] flex justify-center">
        <Navbar/>
      </div>
      <div className="relative mt-40 z-30 sm:w-8/10 lg:w-7/10 md:w-7/10 mx-auto text-center">
        <Hero/>
        <p className="mb-8 font-causten-light lg:px-24 md:px-25">
                    Join to ignite the spark of new beginnings, bringing visions to life through collective brilliance and shaping the future of design.
        </p>
        <div className="absolute z-70 left-1/2 transform -translate-x-1/2">
          <Register/>
        </div>
      </div>
      <div className="absolute md:z-20 sm:z-30 h-100 w-full md:hidden" style={{bottom:'-120px', backgroundImage: "url('/assets/Group 1597883257.png')", backgroundSize:'100% 100%', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}></div>
                
    </div>
      <div className="absolute z-30 top-[24rem] transform -translate-y-1/2 z-10 lg:-left-2 md:-left-10">
        <Leftpic/>
      </div>
      <div className="absolute z-30 top-[170.01px] right-0 z-10 lg:-right-2 md:-right-10">
        <Rightpic/>
      </div>
      

      <div className="relative z-10 flex flex-col items-center justify-center lg:min-h-[150vh] min-h-screen " style={{backgroundImage:"url('/assets/unite.png')", backgroundSize:'100% 100%', backgroundPosition:'top', backgroundRepeat:'no-repeat'}}>
                
                      <div className="z-20 px-6 text-center">
                        <Unity/>
                        <p className="max-w-xs mx-auto mb-6 text-lg text-gray-700 sm:text-xl md:text-2xl sm:mb-8 sm:max-w-sm md:max-w-lg text-center">Discover, learn, and grow in a space where creativity meets opportunity</p>
                      </div>
                      <div className="absolute z-10 top-[20%] left-[70%] transform -translate-x-1/2 -translate-y-1/2">
                        <Image src="/assets/butterflies.png" alt="butterflies" width={249} height={249} className="object-contain scale-[0.4] lg:scale-[0.9]" />
                      </div>
      </div>


      <div className="relative z-10 flex flex-col items-center w-full min-h-[200vh]" style={{backgroundImage:"url('/assets/bgspeaker.png')", backgroundSize:'cover', backgroundPosition:'top', backgroundRepeat:'no-repeat'}}>
        <Voice/>

      <div className="flex flex-wrap">
        <Speaker/>
        <Speaker/>
        <Speaker/>
        <Speaker/>
        <Speaker/>
        <Speaker/>

      </div>
      </div>

      <div className="relative h-auto w-full">
        <img src="/assets/backgroundweb.png" className="hidden h-auto w-full lg:block"></img>
        <img src="/assets/backgroundphone.png" className="block h-auto w-full md:hidden"></img>
        <img src="/assets/backgroundtab.png" className="hidden h-auto w-full md:block lg:hidden"></img>
        <h1 className="absolute top-[15%] w-full text-center font-bold text-[64px] text-white 2md:top-[15%] xl:top-[20%]">Workshops</h1>
      <div className="absolute top-[25%] flex lg:flex-row lg:flex-wrap flex-col items-center justify-around z-10 w-full ">
        <Image src="/assets/workshop1.png" alt="workshops" height={431} width={334}/>
        <Image src="/assets/workshop1.png" alt="workshops" height={431} width={334}/>
      </div>
      </div>


      <div className="relative w-full" style={{backgroundImage:"url('/assets/bgspeaker.png')", backgroundSize:'cover', backgroundPosition:'top', backgroundRepeat:'no-repeat'}}>
        <Genesis/>
      </div>
      <div className="relative w-full min-h-[180vh] " style={{backgroundImage:"url('/assets/bgspeaker.png')", backgroundSize:'cover', backgroundPosition:'top', backgroundRepeat:'no-repeat'}}>
       <div className="absolute flex flex-col h-auto w-full sm:px-20 px-10 py-20 gap-y-[40px]">
        <Zenigma/>
        <Brandstorm/>
       </div>
      </div>
      <div className="relative w-full min-h-screen" style={{backgroundImage:"url('/assets/bgspeaker.png')", backgroundSize:'cover', backgroundPosition:'top', backgroundRepeat:'no-repeat'}}>
       <div className="absolute w-full lg:h-[200vh] md:h-[100vh] h-[100vh]"style={{backgroundImage:"url('/assets/merchbg.png')", backgroundSize:'cover', backgroundPosition:'top', backgroundRepeat:'no-repeat'}}>
      <div className="relative z-20 mx-auto max-w-3xl px-4 md:max-w-4xl lg:max-w-6xl">
      <div className="relative translate-y-1/4 py-4 sm:mt-20 sm:py-6 md:mt-0 lg:mt-10 lg:py-4">
         <Merch/>
         <Merchitems/>
         <img src="/assets/allmerch.png" alt="Merchandise collection" className="mx-auto -mt-16 hidden h-[80vh] w-full  -translate-y-1/3 object-contain pt-4 sm:block  sm:h-[120vh] sm:pt-6 md:h-[80vh] md:pt-8 lg:h-[160vh]"></img>
         <img src="/assets/merchMobile.png" alt="Merchandise collection" className="mx-auto -mt-32  h-[100vh] w-full  -translate-y-1/3 object-contain pt-4 sm:hidden  sm:h-[120vh] sm:pt-6 md:h-[140vh] md:pt-8"></img>
      </div>
      </div>
       </div>
      </div>

      
      <div className="hidden lg:block relative z-10 mt-[900px] pl-[400px] w-full">
        <Image src="/assets/partners.png" alt="partners" height={40} width={400} className="scale-[0.8]"/>
        <div className="absolute top-[200px] overflow-hidden whitespace-nowrap">
          <div className="flex animate-scroll gap-4">
            <img src="/assets/fampay.png" className="w-[288px] h-[131px] object-contain" />
            <img src="/assets/sun.png" className="w-[65px] h-[65px] object-contain" />
            <img src="/assets/DOD.png" className="w-[288px] h-[131px] object-contain" />
            <img src="/assets/Vector.png" className="w-[65px] h-[65px] object-contain" />
            <img src="/assets/fampay.png" className="w-[288px] h-[131px] object-contain" />
            <img src="/assets/sun.png" className="w-[65px] h-[65px] object-contain" />
            <img src="/assets/DOD.png" className="w-[288px] h-[131px] object-contain" />
            <img src="/assets/Vector.png" className="w-[65px] h-[65px] object-contain" />
            
          </div>
        </div>
      </div>

    </div>
  );
}
