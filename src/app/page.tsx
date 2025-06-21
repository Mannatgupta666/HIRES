import Image from "next/image";
import { Navbar } from "./components/Hero/Navbar";
import { Hero } from "./components/Hero/hero";
import { Leftpic } from "./components/Hero/leftpic";
import { Rightpic } from "./components/Hero/rightpic";
import { Register } from "./components/Hero/Register";

export default function Home() {
  return (
    <div className="w-full overflow-x-hidden">
      <div className="relative w-full h-[232px]">
      <Image src="/assets/Mask group.png" alt="background" width={4000.16} height={232.13} className="object-cover z-0 scale-[5.5] lg:scale-[1]" />
      <div className="absolute w-full top-0 left-0 z-10 pt-[48px] flex justify-center">
        <Navbar/>
      </div>
      <div className="absolute z-10 lg:top-[60px]">
        <Hero/>
      </div>
    </div>
      <div className="absolute top-[83.43px] left-0 z-10">
        <Leftpic/>
      </div>
      <div className="absolute top-[170.01px] right-0 z-10">
        <Rightpic/>
      </div>
      <button className="absolute z-10 lg:top-[560px] top-[400px] left-1/2 transform -translate-x-1/2 z-10">
        <Register/>
      </button>

      <div className="relative z-1 mt-[250px] w-full">
        <Image src="/assets/Rectangle 176609.png" alt="paper" height={541} width={1440}/>
      <div className="absolute z-1 w-full h-auto top-[5px]">
          <Image src="/assets/paper.png" alt="paper" height={100} width={1909} className="object-cover z-0 rotate-[7deg] brightness-0 invert scale-[5.5] lg:scale-[1.4]"/>
          <div className="absolute inset-0 bg-gradient-to-b from-white to-[#C2B28000] pointer-events-none" />
      </div>
      <div className="absolute z-10 w-full top-[180px] h-[232.13] w-[1061px] overflow-hidden">
        <Image src="/assets/Mask group.png" alt="background" width={4000.16} height={232.13} className="object-cover z-10 rotate-[180deg] scale-[5.5] lg:scale-[1.5]" />
      </div>
      <div className="absolute z-10 top-[30px] right-0 w-[190px] h-[301px] lg:hidden overflow-hidden">
        <Image src="/assets/flower-2.png" alt="background" width={318} height={301} className="w-full h-full object-cover object-left z-10 scale-[1.1]" />
      </div>
      <div className="absolute z-10 top-[130px] left-[78px] lg:hidden">
        <Image src="/assets/doorbell.png" alt="background" width={195} height={167} className="w-full h-full object-cover z-10 scale-[0.8] rotate-[90deg]" />
      </div>
      <div className="absolute z-5 top-[250px] left-[90px] lg:hidden">
        <Image src="/assets/stairs2.png" alt="background" width={133} height={134} className="w-full h-full object-cover scale-[1.5]" />
      </div>
      <div className="absolute z-10 top-[170px] w-[130px] h-[150px] lg:hidden overflow-hidden">
        <Image src="/assets/flower-2.png" alt="background" width={199} height={188} className="w-full h-full object-cover object-top scale-[1.2]" />
      </div>
      <div className="absolute z-5 top-0 left-0 h-[300px] w-[150px] lg:hidden overflow-hidden">
        <Image src="/assets/flower.png" alt="background" width={268} height={310} className="w-full h-full object-cover object-right object-bottom " />
      </div>
      <div className="absolute z-0 w-full lg:top-[220px] top-[300px] h-[1021] w-[375px] overflow-hidden">
        <Image src="/assets/background-2.jpg" alt="background" width={1441} height={1021} className="object-cover z-0 rotate-[180deg] opacity-75 scale-[2.8] lg:scale-[1]" />
      </div>

      <div className="absolute z-10 lg:top-[500px] top-[450px] lg:pl-[330px]">
        <Image src="/assets/Frame 1597884573.png" alt="unite" width={615} height={491} className="object-contain brightness-70 invert saturate-100 scale-[0.8] lg:scale-[0.8]" />
      </div>
      <div className="absolute z-10 lg:top-[390px] top-[350px] lg:left-[330px] left-[160px] lg:pl-[330px]">
        <Image src="/assets/butterflies.png" alt="butterflies" width={249} height={249} className="object-contain scale-[0.4] lg:scale-[0.9]" />
      </div>
      <div className="absolute z-5 top-[750px] right-0 w-[400px] h-[649px] overflow-hidden">
        <Image src="/assets/staircase.png" alt="stairs" width={649} height={649} className=" hidden lg:block w-full h-full object-left object-cover" />
      </div>
      <div className="absolute z-5 top-[750px] left-0 w-[400px] h-[649px] overflow-hidden">
        <Image src="/assets/staircase.png" alt="stairs" width={649} height={649} className="hidden lg:block scale-x-[-1] w-full h-full object-left object-cover" />
      </div>
      <div className="absolute z-5 top-[700px] left-0 w-[160px] h-[225px] overflow-hidden">
        <Image src="/assets/staircase.png" alt="stairs" width={225} height={225} className="block lg:hidden scale-x-[-1] w-full h-full object-left object-cover" />
      </div>
      <div className="absolute z-5 top-[700px] right-0 w-[160px] h-[225px] overflow-hidden">
        <Image src="/assets/staircase.png" alt="stairs" width={225} height={225} className="block lg:hidden w-full h-full object-left object-cover" />
      </div>
      <div className="absolute z-10 w-full h-auto lg:top-[1050px] top-[850px]">
          <Image src="/assets/paper-2.png" alt="paper" height={100} width={1909} className="scale-x-[-1] object-cover z-10 rotate-[357deg] brightness-0 invert scale-[1.8]"/>
      </div>     
      </div>

      <div className="relative z-10 lg:mt-[900px] mt-[750px] w-full flex flex-col items-center lg:gap-y-[100px] gap-y-[30px]">
  <Image src="/assets/Frame 1597884636.png" alt="voice that matters" height={135} width={1256}/>

  <div className="lg:mt-[50px] mt-0 max-w-[1116px] mx-auto w-full">
    <div className="flex lg:flex-wrap lg:flex-row flex-col overflow-y-auto justify-center lg:gap-x-[3px] lg:gap-y-[70px] gap-y-[20px]">
      <div className="relative flex lg:flex-col flex-row lg:gap-y-[3px] gap-x-[5px]">
      <Image
          src="/assets/voicepic.png"
          alt="1"
          width={293}
          height={293}
          className="scale-[0.8] lg:scale-[1] transition-transform duration-300 ease-in-out hover:scale-105"
        />
        <div className="absolute top-0 lg:left-[180px] left-[80px]">
          <Image src="/assets/butterfly3.png" alt="1" width={108} height={108} className="lg:scale-[1.2] scale-[0.6] rotate-[30deg] transition-transform duration-300 ease-in-out hover:scale-105"/>
        </div>
        <div className="absolute lg:top-[200px] top-[70px] lg:left-[10px] left-0">
          <Image src="/assets/butterfly4.png" alt="1" width={108} height={108} className="lg:scale-[1.1] scale-[0.4] rotate-[330deg] transition-transform duration-300 ease-in-out hover:scale-105"/>
        </div>
        
      <Image
          src="/assets/ansh.png"
          alt="1"
          width={317}
          height={138}
          className="scale-[0.8] lg:scale-[1]"
        />
      </div>
      <div className="relative flex lg:flex-col flex-row lg:gap-y-[3px] gap-x-[5px]">
      <Image
          src="/assets/voicepic.png"
          alt="1"
          width={293}
          height={293}
          className="scale-[0.8] lg:scale-[1] transition-transform duration-300 ease-in-out hover:scale-105"
        />
        <div className="absolute top-0 right-[250px] top-[90px] lg:top-[240px]">
          <Image src="/assets/butterfly5.png" alt="1" width={108} height={108} className="lg:scale-[1.5] scale-[0.6] rotate-[330deg] transition-transform duration-300 ease-in-out hover:scale-105"/>
        </div>
      <div className="absolute lg:top-[160px] top-[50px] lg:left-[10px] right-[230px]">
          <Image src="/assets/butterfly4.png" alt="1" width={108} height={108} className="lg:scale-[1.1] scale-[0.4] rotate-[30deg] transition-transform duration-300 ease-in-out hover:scale-105"/>
      </div>
      <Image
          src="/assets/ansh.png"
          alt="1"
          width={317}
          height={138}
          className="scale-[0.8] lg:scale-[1]"
        />
      </div>
      <div className="relative flex lg:flex-col flex-row lg:gap-y-[3px] gap-x-[5px]">
      <Image
          src="/assets/voicepic.png"
          alt="1"
          width={293}
          height={293}
          className="scale-[0.8] lg:scale-[1] transition-transform duration-300 ease-in-out hover:scale-105"
        />
        <div className="absolute top-0 lg:left-[180px] left-[80px]">
          <Image src="/assets/butterfly3.png" alt="1" width={108} height={108} className="lg:scale-[1.2] scale-[0.6] rotate-[30deg] transition-transform duration-300 ease-in-out hover:scale-105"/>
        </div>
        <div className="absolute lg:top-[200px] top-[70px] lg:left-[10px] left-0">
          <Image src="/assets/butterfly4.png" alt="1" width={108} height={108} className="lg:scale-[1.1] scale-[0.4] rotate-[330deg] transition-transform duration-300 ease-in-out hover:scale-105"/>
        </div>
      <Image
          src="/assets/ansh.png"
          alt="1"
          width={317}
          height={138}
          className="scale-[0.8] lg:scale-[1]"
        />
      </div>
      <div className="relative flex lg:flex-col flex-row lg:gap-y-[3px] gap-x-[5px]">
      <Image
          src="/assets/voicepic.png"
          alt="1"
          width={293}
          height={293}
          className="scale-[0.8] lg:scale-[1] transition-transform duration-300 ease-in-out hover:scale-105"
        />
        <div className="absolute top-0 right-[250px] top-[90px] lg:top-[240px]">
          <Image src="/assets/butterfly5.png" alt="1" width={108} height={108} className="lg:scale-[1.5] scale-[0.6] rotate-[330deg] transition-transform duration-300 ease-in-out hover:scale-105"/>
        </div>
      <div className="absolute lg:top-[160px] top-[50px] lg:left-[10px] right-[230px]">
          <Image src="/assets/butterfly4.png" alt="1" width={108} height={108} className="lg:scale-[1.1] scale-[0.4] rotate-[30deg] transition-transform duration-300 ease-in-out hover:scale-105"/>
      </div>
      <Image
          src="/assets/ansh.png"
          alt="1"
          width={317}
          height={138}
          className="scale-[0.8] lg:scale-[1]"
        />
      </div>
      
       </div>
      </div>
      </div>

      <div className="relative z-1 mt-[5px] w-full">
        <Image src="/assets/Rectangle 176609.png" alt="paper" height={541} width={1440}/>
      <div className="absolute z-1 w-full h-auto top-0">
          <Image src="/assets/paper.png" alt="paper" height={100} width={1909} className="object-cover z-0 rotate-[7deg] brightness-0 invert"/>
          <div className="absolute inset-0 bg-gradient-to-b from-white to-[#C2B28000] pointer-events-none" />
      </div>
      <div className="absolute z-0 w-full lg:top-[180px] top-[70px] lg:h-[1200px] h-[1500px] overflow-hidden">
        <Image src="/assets/background-3.png" alt="background" width={2078} height={2466} className="object-cover z-0 rotate-[284deg] lg:scale-[2.2] scale-[2.8] opacity-20 " />
        <div className="absolute inset-0 bg-[#187bcd] opacity-80 mix-blend-color pointer-events-none" />
      </div>
      <div className="absolute z-5 w-full h-auto lg:top-[1250px] top-[1530px]">
          <Image src="/assets/paper-2.png" alt="paper" height={100} width={1909} className="scale-x-[-1] object-cover z-5 rotate-[357deg] brightness-0 invert"/>
      </div> 
      <div className="absolute z-0 lg:left-0 lg:top-[200px] top-0 right-[150px]">
        <Image src="/assets/balls.png" alt="balls" height={219} width={339} className="z-0 rotate-[90deg] scale-[0.7]"/>
      </div>
      <div className="absolute z-10 lg:left-[650px] lg:top-[250px] top-[20px] left-[180px]">
        <Image src="/assets/asterisk.png" alt="asterisk" height={363} width={363} className="z-10 rotate-[140deg] scale-[0.9] lg:scale-[1]"/>
      </div>
      <div className="absolute z-10 w-full h-auto lg:top-[500px] top-[180px]">
        <Image src="/assets/Frame 1597884565.png" alt="workshop" height={62} width={1256} className="lg:scale-[1] scale-[2]"/>
      </div>
      <div className="absolute flex lg:flex-row lg:flex-wrap flex-col overflow-y-auto z-10 w-full lg:top-[700px] top-[240px] pl-[50px] lg:pl-[100px] lg:pr-[50px] lg:gap-y-[5px] gap-x-[5px]">
        <Image src="/assets/workshop1.png" alt="workshops" height={431} width={334}/>
        <Image src="/assets/workshop1.png" alt="workshops" height={431} width={334}/>
        <Image src="/assets/workshop1.png" alt="workshops" height={431} width={334}/>
      
      </div>
      <div className="absolute z-10 lg:left-0 right-[200px] lg:top-[1100px] top-[1450px]">
        <Image src="/assets/asterisk.png" alt="asterisk" height={363} width={363} className="z-10 rotate-[140deg] scale-[1.1]"/>
      </div>
      <div className="absolute z-0 lg:left-[160px] right-[100px] lg:top-[1100px] top-[1430px]">
        <Image src="/assets/asterisk.png" alt="asterisk" height={363} width={363} className="z-0 rotate-[100deg] scale-[0.4]"/>
      </div>
      <div className="lg:hidden absolute z-0 left-[100px] top-[1400px]">
        <Image src="/assets/eclipse.png" alt="asterisk" height={363} width={363} className="z-0 rotate-[100deg] scale-[0.4]"/>
      </div>
      <div className="lg:hidden absolute z-4 left-[190px] top-[1460px]">
        <Image src="/assets/radio.png" alt="radio" height={109} width={109} className="z-4"/>
      </div>
      <div className="absolute lg:left-[900px] left-[100px] lg:top-[1050px] top-[1405px] lg:w-[390px] lg:h-[300px] h-[200px] w-[410px] overflow-hidden">
        <Image src="/assets/sideone.png" alt="sideone" height={544} width={544} className="z-0 scale-x-[-1]"/>
      </div>
      </div>


      <div className="relative z-5 mt-[1100px] w-full h-auto">
        <div className="absolute z-5 lg:top-0 top-[380px] lg:w-[550px] lg:right-[700px]  right-[130px] lg:h-[644px] overflow-hidden">
          <Image src="/assets/hands.png" alt="hands" width={901} height={135} className="rotate-[69deg] z-5 lg:scale-[1.5] object-right scale-[1.5]" />
        </div>
        <div className="absolute z-0 lg:top-[150px] top-[400px] lg:left-[330px]">
          <img src="/assets/butterfly.gif" alt="butterfly" width={478.78} height={479.33} className="opacity-50 lg:scale-[1] scale-[0.6]"/>
        </div>
        <div className="absolute z-10 lg:top-[400px] lg:left-[120px] top-[570px]">
          <Image src="/assets/Frame 1597884600.png" alt="Genesis in action" width={901} height={135} className="lg:scale-[1] scale-[0.8]"/>
        </div>
        <div className="absolute z-10 lg:top-[400px] top-[600px] lg:w-[500px] lg:left-[710px] left-[150px] lg:h-[644px] overflow-hidden">
          <Image src="/assets/hands.png" alt="hands" width={901} height={135} className="rotate-[260deg] z-10 scale-[1.5]" />
        </div>
      </div>

      <div>
        <div className="relative flex flex-col gap-y-10 mt-[2000px] lg:pl-[93px] lg:pr-[93px] pl-[10px]">
          <div className="relative lg:w-[1000px] lg:h-[520px] w-[400px] h-[520px] rounded-md" style={{ backgroundColor: '#ED6F2E' }}>
            <div className="hidden lg:block relative transition-transform duration-300 ease-in-out hover:scale-105">
            <div className="absolute z-6 right-0 h-[520px] w-[440px] top-0 overflow-hidden ">
              <Image src="/assets/phone frame.png" alt="phoneframe" height={415} width={610}  className="scale-[0.8]"/>
            </div>
            <div className="absolute z-5 h-[590px] w-[220px] right-[110px] top-[100px] overflow-hidden ">
              <Image src="/assets/Rectangle 176628.png" alt="phonescreen" height={415} width={610}  className="scale-[1.3]"/>
            </div>
            <div className="absolute z-0 left-[760px] top-[280px] bottom-[5px] ">
              <Image src="/assets/flower-2.png" alt="phonescreen" height={240.42} width={195.14} className="rotate-[18deg] scale-x-[-1]"/>
            </div>
            <div className="absolute z-0 left-[560px] top-[20px] bottom-[5px] ">
              <Image src="/assets/flower.png" alt="phonescreen" height={232} width={200} className="rotate-[26deg] scale-x-[-1]"/>
            </div>
            <div className="absolute z-7 left-[640px] top-[140px] bottom-[5px]">
              <Image src="/assets/Frame 1597884652.png" alt="phonescreen" height={244} width={211}  className="transition-transform duration-300 ease-in-out hover:rotate-[8deg]"/>
            </div>
            <div className="absolute z-7 left-[620px] top-[160px] bottom-[5px]">
              <Image src="/assets/Frame 1597884648.png" alt="phonescreen" height={244} width={211} className="transition-transform duration-300 ease-in-out hover:rotate-[-8deg]"/>
            </div>
            <div className="absolute z-7 left-[660px] top-[400px] bottom-[5px]">
              <Image src="/assets/Frame 1597884651.png" alt="phonescreen" height={78} width={209} className="transition-transform duration-300 ease-in-out hover:scale-105"/>
            </div>
            </div>
            <div className="absolute top-[30px] left-[30px]">
              <Image src="/assets/pin.png" alt="pin" height={32} width={32} className="scale-[1.5]"/>
            </div>
            <div className="hidden lg:block absolute z-5 right-0 h-[173px] w-[638px] left-[40px] top-[150px] overflow-hidden ">
              <Image src="/assets/zenigma.png" alt="zenigma" height={178} width={638}  className="scale-[0.8]"/>
            </div>
            <button className="absolute z-5 right-0 left-[100px] top-[380px]">
              <Image src="/assets/Register.png" alt="register" height={68} width={168}/>
            </button>

          </div>
          <div className="relative lg:w-[1000px] lg:h-[520px] w-[400px] h-[520px] rounded-md" style={{ backgroundColor: '#E84489' }}>
            <div className=" hidden lg:block relative transition-transform duration-300 ease-in-out hover:scale-105">
              <div className="absolute right-[20px] top-[215px] ">
                <Image src="/assets/burgerking.png" alt="brands" height={449} width={117} className="scale-[1.3]"/>
              </div>
              <div className="absolute right-[130px] top-[240px] ">
                <Image src="/assets/netflix.png" alt="brands" height={449} width={117} className="scale-[1.8]"/>
              </div>
              <div className="absolute right-[260px] top-[285px] ">
                <Image src="/assets/adobe.png" alt="brands" height={335} width={117} className="scale-[1.5]"/>
              </div>
              <div className="absolute right-[80px] top-[100px] ">
                <Image src="/assets/butterfly3.png" alt="butterfly" height={154} width={154} className="rotate-[13deg]"/>
              </div>
              <div className="absolute right-[310px] top-[380px] ">
                <Image src="/assets/butterfly4.png" alt="butterfly" height={154} width={154} className="rotate-[320deg] scale-[0.9]"/>
              </div>
            </div>
            <div className="absolute top-[30px] left-[30px]">
              <Image src="/assets/pin.png" alt="pin" height={32} width={32} className="scale-[1.5]"/>
            </div>
            <div className="hidden lg:block absolute z-5 right-0 h-[173px] w-[638px] left-[40px] top-[150px] overflow-hidden ">
              <Image src="/assets/brandstorm.png" alt="zenigma" height={178} width={638}  className="scale-[0.8]"/>
            </div>
            <button className="absolute z-5 right-0 left-[100px] top-[380px]">
              <Image src="/assets/Register.png" alt="register" height={68} width={168}/>
            </button>
          </div>

        </div>
      </div>
      <div className="relative z-1 mt-[100px] w-full">
        <Image src="/assets/Rectangle 176609.png" alt="paper" height={541} width={1440}/>
      <div className="absolute z-1 w-full h-auto top-[5px]">
          <Image src="/assets/paper.png" alt="paper" height={100} width={1909} className="object-cover z-0 rotate-[7deg] brightness-0 invert scale-[5.5] lg:scale-[1.2] "/>
          <div className="absolute inset-0 bg-gradient-to-b from-white to-[#C2B28000] pointer-events-none" />
      </div>
      <div className="absolute z-0 w-full lg:top-[220px] top-[280px] h-[1021] w-[375px] overflow-hidden">
        <Image src="/assets/background-4.png" alt="background" width={1441} height={1021} className="object-cover opacity-10 scale-[2.6] lg:scale-[1]" />
        <div className="absolute inset-0 bg-rose-700 opacity-90 mix-blend-screen pointer-events-none" />
      </div>
      <div className="absolute z-5 w-full h-auto lg:top-[960px] top-[1530px]">
          <Image src="/assets/paper-2.png" alt="paper" height={100} width={1909} className="scale-x-[-1.2] object-cover z-5 rotate-[357deg] brightness-0 invert"/>
      </div> 
      <div className="absolute z-1 top-[500px] right-[400px]">
        <Image src="/assets/Merchandise.png" alt="merchandise" height={62} width={402} className="scale-[0.8]"/>
      </div>
      <div className="absolute z-1 top-[550px] right-[400px]">
        <Image src="/assets/merchandise line.png" alt="merchandise" height={62} width={402} className="scale-[1]"/>
      </div>
      <div className="absolute z-2 top-[530px] right-[200px]">
        <Image src="/assets/white hoodie mockup@2x 1.png" alt="merchandise" height={549} width={549} className="scale-[0.7]"/>
      </div>
      <div className="absolute z-1 top-[470px] right-[250px]">
        <Image src="/assets/blackhoodie.png" alt="merchandise" height={549} width={549} className="scale-[0.6]"/>
      </div>
      <div className="absolute z-0 top-[290px] right-[370px]">
        <Image src="/assets/totebags.png" alt="merchandise" height={549} width={549} className="scale-[0.4] rotate-[10deg]"/>
      </div>
      <div className="absolute z-5 top-[650px] right-[300px]">
        <Image src="/assets/book.png" alt="merchandise" height={549} width={549} className="scale-[0.4] "/>
      </div>
      <div className="absolute z-5 top-[680px] right-[200px]">
        <Image src="/assets/bookmark.png" alt="merchandise" height={549} width={549} className="scale-[0.25] rotate-[8deg] "/>
      </div>
      <div className="absolute z-5 top-[810px] right-[500px]">
        <Image src="/assets/mug.png" alt="merchandise" height={232} width={184} className="scale-[0.8] rotate-[348deg] "/>
      </div>
      <div className="absolute z-5 top-[810px] right-[680px]">
        <Image src="/assets/letters.png" alt="merchandise" height={232} width={184} className="scale-[0.9] rotate-[29deg] "/>
      </div>
      <div className="absolute z-10 top-[1100px] right-[500px]">
        <Image src="/assets/buymerch.png" alt="merchandise" height={232} width={184} className="scale-[0.9] "/>
      </div>
      <div className="absolute z-1 top-[300px] right-[450px]">
        <Image src="/assets/totebags.png" alt="merchandise" height={381} width={571} className="scale-[0.4] rotate-[340deg]"/>
      </div>
      <div className="absolute z-2 top-[830px] left-[890px]">
        <Image src="/assets/flower.png" alt="flower" height={664} width={531} className="scale-[1.1]"/>
      </div>
      <div className="absolute z-1 top-[300px] left-[890px]">
        <Image src="/assets/bffgdg 1.png" alt="man" height={829} width={623} className="scale-[1.1]"/>
      </div>
      <div className="absolute z-10 top-[500px] right-[800px]">
        <Image src="/assets/person2.png" alt="man" height={829} width={623} className="scale-[1.5]"/>
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
