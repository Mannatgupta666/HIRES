import Image from "next/image";

const navlinks=[
    {name:"Home"},
    {name:"Hires"},
    {name:"Benefits"},
    {name:"process"},
    {name:"Testimonials"},
    {name:"FAQs"},
    {name:"Contact Us"}

];

export function Navbar(){
    return(
        <nav className="flex w-full items-center justify-between px=[0px]">
            <div className="flex item-center">
                <Image src="/assets/E-Summit'25 Logo.png" alt="Logo" width={172.35} height={48}  />
            </div>
            <div className="hidden w-fit lg:flex flex-1 justify-center gap-x-[24px] mx-auto flex-none">
                    {navlinks.map((item,index)=>(
                    <p key={index}>{item.name}</p>
                    ))}

            </div>
            <div className="w-fit">
                <span className="hidden lg:block"><Image src="/assets/Frame 402517945.png" alt='Login' width={158} height={48} /></span>
                <span className="block lg:hidden pr-4"><Image src="/assets/icon.png" alt="icon" width={24} height={24} className="scale-[1.3]"/></span>
            </div>
        </nav>
    )
}