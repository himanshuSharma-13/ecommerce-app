import Link from 'next/link';
export const AAFooter = () => {
    return (
        <div className="w-full flex h-[461px] bg-[url('/footer.jpg')] bg-no-repeat bg-postion bg-cover text-white mt-[1px]">
            <div className="w-full h-full justify-center items-center mb-[2px] inline-flex">
                <div className="w-5/6 h-full justify-center items-center gap-4 inline-flex">
                    <div className="relative h-full w-2/3 m-auto flex-col items-end flex content-end justify-start">
                        <ul className="relative h-5/6 w-full m-auto flex-col items-start flex content-center justify-start">
                            {/* go */}
                            {/* <Link href="/ourCompany"> */}
                            <li className="text-white text-lg font-semibold font-['Poppins'] mb-[0.625rem] leading-10 tracking-tight">Our Company</li>
                            {/* </Link> */}
                            <Link href="/aboutUs">
                            <li className="opacity-80 text-white text-md font-normal font-['Poppins'] leading-10">About Us</li>
                            </Link>
                            <Link href="/contactUs">
                            <li className="opacity-80 text-white text-md font-normal font-['Poppins'] leading-10">Contact Us</li>
                            </Link>
                            <Link href="/ourLeaders">
                            <li className="opacity-80 text-white text-md font-normal font-['Poppins'] leading-10">Our Leaders</li>
                            </Link>
                          
                        </ul>
                    </div>
                    <div className="relative h-full w-2/3 m-auto flex-col items-center flex content-center justify-start">
                        <ul className="relative h-5/6 w-full m-auto flex-col items-start flex content-start justify-start">
                            <li className="text-white text-lg font-semibold font-['Poppins'] mb-[0.625rem] leading-10 tracking-tight">Products</li>
                            <Link href="/products/men">
                            <li className="opacity-80 text-white text-md font-normal font-['Poppins'] leading-10">Men</li>
                            </Link>
                            <Link href="/products/women">
                            <li className="opacity-80 text-white text-md font-normal font-['Poppins'] leading-10">Women</li>
                            </Link>
                            <Link href="/products/kids">
                            <li className="opacity-80 text-white text-md font-normal font-['Poppins'] leading-10">Kids</li>
                            </Link>
                        </ul>
                    </div>
                    
                    <div className="relative h-full w-full m-auto flex-col items-center flex content-center justify-start">
                        <ul className="relative h-5/6 w-full m-auto flex-col items-start flex content-start justify-start">
                            <li className="text-white text-lg font-semibold font-['Poppins'] mb-[0.625rem] leading-10 tracking-tight">Contact Us</li>
                            <li className="opacity-80 text-white text-md font-normal font-['Poppins'] leading-10">DSS 52, OLD TEHSIL COMPLEX, Parking behind MAHABIRDAL Hospital,</li>
                            <li className="opacity-80 text-white text-md font-normal font-['Poppins'] leading-10">Kunjpura Rd, opp. HDFC Bank, Karnal, Haryana</li>
                            <li className="opacity-80 text-white text-md font-normal font-['Poppins'] leading-10">132001</li>
                            <li className="opacity-80 text-white text-md font-normal font-['Poppins'] leading-10 pt-2">09467099380</li>
                            <li className="opacity-80 text-white text-md font-normal font-['Poppins'] leading-10">Monday To Saturday - 9:30AM To 6:30PM</li>
                            {/* <li className="opacity-80 text-white text-md font-normal font-['Poppins'] leading-10 py-2">Shop Online</li> */}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}