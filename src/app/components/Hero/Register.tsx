import Image from "next/image"
export function Register(){
    return(
        <div className="flex items-center h-[60px] w-[260px] px-593px" >
            <Image src="/assets/Register.png" alt="register now" height={60} width={260} className="scale-[0.6] lg:scale-[1]"/>
        </div>

    )
}