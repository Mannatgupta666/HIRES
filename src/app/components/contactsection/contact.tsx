export function Contact(){
    return(
        <div className="w-full lg:max-w-[1600px] lg:px-6">
            <div className="flex w-full flex-col space-y-8 md:flex-row md:space-y-0">
                <div className="w-full space-y-10 md:w-1/2">
                <div className="flex justify-between space-x-4 md:justify-start">
                    <div className="w-32 md:w-36 lg:w-40">
                        <img src="/assets/E-Summit'25 Logo.png" alt="logo"/>
                    </div>
                    <div className="w-24 md:w-28 lg:w-32">
                        <img src="/assets/ecell.webp"/>
                    </div>
                </div>
                <div className="mt-8 hidden max-w-[509px] text-center text-base leading-6 text-[#CBC8C8] sm:block md:mt-8 md:text-left">
                    <p className="text-left font-normal leading-[24px]">E-Summit IIT Roorkee is North India's largest entrepreneurial fest, organized by the Entrepreneurship Cell to inspire and empower future leaders.</p>
                </div>
                </div>
                <div className="hidden w-full justify-between space-y-8 sm:flex md:ml-10 md:w-1/2 md:flex-row md:space-y-0">
                <div className="space-y-4 text-center md:text-left">
                    <h3 className="text-base font-semibold">EXPLORE</h3>
                    <div className="flex flex-col space-y-4">
                        <span className="cursor-pointer text-sm text-[#CBC8C8] transition duration-200 ease-in-out hover:text-white">Home</span>
                        <span className="cursor-pointer text-sm text-[#CBC8C8] transition duration-200 ease-in-out hover:text-white">Benefits</span>
                        <span className="cursor-pointer text-sm text-[#CBC8C8] transition duration-200 ease-in-out hover:text-white">How it works?</span>
                        <span className="cursor-pointer text-sm text-[#CBC8C8] transition duration-200 ease-in-out hover:text-white">Testimonials</span>
                        <span className="cursor-pointer text-sm text-[#CBC8C8] transition duration-200 ease-in-out hover:text-white">FAQs</span>
                        </div>
                        </div>
                        <div className="order-2 hidden space-y-4 text-left sm:block md:order-1">
                            <h3 className="text-base font-semibold">CONTACT US</h3>
                            <div className="flex flex-col space-y-8">
                                <div className="flex flex-col space-y-4 pt-4">
                                    <a href="mailto:esummit@iitr.ac.in" className="text-sm text-[#CBC8C8] transition duration-200 ease-in-out hover:text-white">esummit@iitr.ac.in</a>
                                    <a href="tel:+918750589268" className="font-public-sans -my-0.5 text-[#CBC8C8] transition duration-200 ease-in-out hover:text-white">+91 87505 89268</a>
                                    <a href="tel:+917016204140" className="font-public-sans -my-0.5 text-[#CBC8C8] transition duration-200 ease-in-out hover:text-white">+91 70162 04140</a>
                        </div>
                        </div>
                        </div>
                        </div>
                </div>
                <div className="mt-12 items-end justify-between space-y-8 md:flex md:space-y-0">
                    <div className="space-y-4 text-left ">
                        <h3 className="text-base font-semibold">ADDRESS</h3>
                        <p className="text-sm leading-6 text-[#CBC8C8] ">E-Cell Office, SAC Building <br/>IIT Roorkee <br/>Roorkee, Uttarakhand - 247667</p>
                        </div>
                        <div className="space-y-4 text-left sm:hidden">
                            <h3 className="text-base font-semibold">CONTACTS</h3>
                            <div className="flex flex-col gap-4">
                                <a href="tel:+918750589268" className="text-sm text-[#CBC8C8] transition duration-200 ease-in-out hover:text-white">+91 87505 89268</a>
                                <a href="tel:+917016204140" className="text-sm text-[#CBC8C8] transition duration-200 ease-in-out hover:text-white">+91 70162 04140</a>
                                </div>
                                <div className="flex flex-col space-y-8">
                                    <div className="flex flex-col space-y-4 pt-4">
                                        <h3 className="text-sm font-semibold tracking-wide">General Queries</h3>
                                        <a href="mailto:esummit@iitr.ac.in" className="text-sm text-[#CBC8C8] transition duration-200 ease-in-out hover:text-white">esummit@iitr.ac.in</a>
                                        </div>
                                        </div>
                                        </div>
                                        <div className="flex flex-col items-center space-y-4">
                                            <span className="block text-sm text-[#CBC8C8] md:hidden">Follow us at</span>
                                            <div className="flex justify-center space-x-4 md:justify-start">
                                                <img alt="Facebook Logo" loading="lazy" width="24" height="24" decoding="async" data-nimg="1" className="h-6 w-6 brightness-0 invert filter transition duration-200 ease-in-out hover:opacity-80" src="/assets/Facebook.png"/>
                                                <img alt="Instagram Logo" loading="lazy" width="24" height="24" decoding="async" data-nimg="1" className="h-6 w-6 brightness-0 invert filter transition duration-200 ease-in-out hover:opacity-80" src="/assets/Instagram.png"/>
                </div>
                </div>
                </div>
                <div className="my-8 hidden border-t border-[#2E2E2E] md:block"></div>
                <div className="mt-5 hidden flex-col items-center justify-between space-y-4 text-center sm:flex md:mt-0 md:flex-row md:space-y-0 md:text-left">
                    <div className="text-xs text-[#727272] md:text-sm">Made with <span className="text-red-500">❤</span> by Design &amp; Tech Team</div>
                    <div className="text-xs text-[#727272] md:text-sm">© 2024 E-Summit IIT Roorkee. All rights reserved.</div>
                    </div>
            </div>
    )
}