"use client";
import { useEffect } from "react";
import { Carousel, CarouselInterface, CarouselItem, CarouselOptions } from "flowbite";
import { BsEnvelope, BsClock, BsCursor, BsRocket } from 'react-icons/bs';

export default function ContactUs() {


    useEffect(() => {
        onPageLoad();
    }, []);

    // const [dimensions, setDimensions] = useState<any>(
    //     {
    //         width: window!.innerWidth,
    //         height: window!.innerHeight,
    //     }
    // );

    // const handleResize = () => {
    //     setDimensions({
    //         width: window!.innerWidth,
    //         height: window!.innerHeight,
    //     });
    // }

    const onPageLoad = () => {
        // window.addEventListener("resize", handleResize, false);
        const items: CarouselItem[] = [
            {
                position: 0,
                el: document!.querySelector('#carousel-item-1')!,
            },
            {
                position: 1,
                el: document!.querySelector('#carousel-item-2')!,
            },
            {
                position: 2,
                el: document!.querySelector('#carousel-item-3')!,
            },
            {
                position: 3,
                el: document!.querySelector('#carousel-item-4')!,
            },
            {
                position: 4,
                el: document!.querySelector('#carousel-item-5')!,
            }
        ];
        const options: CarouselOptions = {
            defaultPosition: 0,
            interval: 3000,
            indicators: {
                activeClasses: 'bg-[#0092f4]',
                inactiveClasses:
                    'bg-[#c2e6ff] hover:bg-[#4db7ff] dark:bg-gray-800/50 dark:hover:bg-gray-800',
                items: [
                    {
                        position: 0,
                        el: document!.getElementById('carousel-indicator-1')!,
                    },
                    {
                        position: 1,
                        el: document!.getElementById('carousel-indicator-2')!,
                    },
                    {
                        position: 2,
                        el: document!.getElementById('carousel-indicator-3')!,
                    },
                    {
                        position: 3,
                        el: document!.getElementById('carousel-indicator-4')!,
                    },
                    {
                        position: 4,
                        el: document!.getElementById('carousel-indicator-5')!,
                    }
                ],
            },
            onChange: ($event) => {
            },
        };
        const carousel: CarouselInterface | null = (new Carousel(items, options)) || null;

        carousel.cycle();
    }

    return (
        <>
            <section className="w-full h-full bg-white">
                <section className="w-full h-full bg-white">
                    <div id="indicators-carousel" className="relative w-full" data-carousel="static">
                        <div className="relative min-h-carsouel overflow-hidden rounded-none md:h-96">
                            <div id="carousel-item-1" className="hidden duration-700 ease-in-out" data-carousel-item="active">
                                <img src="/banner-1.jpg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                            </div>
                            <div id="carousel-item-2" className="hidden duration-700 ease-in-out" data-carousel-item>
                                <img src="/banner-2.jpg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                            </div>
                            <div id="carousel-item-3" className="hidden duration-700 ease-in-out" data-carousel-item>
                                <img src="/banner-3.jpg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                            </div>
                            <div id="carousel-item-4" className="hidden duration-700 ease-in-out" data-carousel-item>
                                <img src="/banner-4.jpg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                            </div>
                            <div id="carousel-item-5" className="hidden duration-700 ease-in-out" data-carousel-item>
                                <img src="/banner-5.jpg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                            </div>
                        </div>
                        <div className="absolute z-30 flex -translate-x-1/2 space-x-3 rtl:space-x-reverse bottom-5 left-1/2">
                            <button id="carousel-indicator-1" type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                            <button id="carousel-indicator-2" type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                            <button id="carousel-indicator-3" type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
                            <button id="carousel-indicator-4" type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
                            <button id="carousel-indicator-5" type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
                        </div>
                    </div>
                </section>
                <section className="w-full h-full flex px-6 py-16">
                    <div className="p-6 w-11/12 justify-between bg-white border border-stone-200 rounded-lg shadow dark:bg-stone-800 dark:border-stone-700  mx-auto">
                        <div className="flex w-full flex-row gap-16 justify-evenly">
                            <div className="w-full">
                                <h1 className="text-lg mb-6 w-full flex mx-auto text-stone-800  font-['Poppins'] items-start text-start justify-start font-semibold">
                                    <span className="overflow-hidden text-stone-800 font-['Poppins'] p-0 clip"></span>Send Us an Email</h1>
                                <form className="mb-6">
                                    <div className="flex w-full flex-row gap-6">
                                        <div className="mb-6 w-full">
                                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-stone-800  font-['Poppins'] dark:text-white">Your Name</label>
                                            <input type="email" id="email" className="bg-stone-100  border border-stone-300 text-stone-800  font-['Poppins']text-sm rounded-lg focus:ring-stone-500 focus:border-stone-500 block w-full p-2.5 dark:bg-stone-700 dark:border-stone-600 dark:placeholder-stone-400 dark:text-white dark:focus:ring-stone-500 dark:focus:border-stone-500" placeholder="name" required />
                                        </div>
                                        <div className="mb-6 w-full">
                                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-stone-800  font-['Poppins']dark:text-white">Your Email</label>
                                            <input type="email" id="email" className="bg-stone-100  border border-stone-300 text-stone-800  font-['Poppins']text-sm rounded-lg focus:ring-stone-500 focus:border-stone-500 block w-full p-2.5 dark:bg-stone-700 dark:border-stone-600 dark:placeholder-stone-400 dark:text-white dark:focus:ring-stone-500 dark:focus:border-stone-500" placeholder="name@company.com" required />
                                        </div>
                                    </div>
                                    <div className="mb-6">
                                        <label htmlFor="phone" className="block mb-2 text-sm font-medium text-stone-800  font-['Poppins']dark:text-white">Phone</label>
                                        <input type="text" id="phone" className="bg-stone-100 border border-stone-300 text-stone-800  font-['Poppins']text-sm rounded-lg focus:ring-stone-500 focus:border-stone-500 block w-full p-2.5 dark:bg-stone-700 dark:border-stone-600 dark:placeholder-stone-400 dark:text-white dark:focus:ring-stone-500 dark:focus:border-stone-500 " placeholder="Phone Number" required />
                                    </div>
                                    <div className="mb-6">
                                        <label htmlFor="subject" className="block mb-2 text-sm font-medium text-stone-800  font-['Poppins']dark:text-white">Subject</label>
                                        <input type="text" id="subject" className="bg-stone-100 border border-stone-300 text-stone-800  font-['Poppins']text-sm rounded-lg focus:ring-stone-500 focus:border-stone-500 block w-full p-2.5 dark:bg-stone-700 dark:border-stone-600 dark:placeholder-stone-400 dark:text-white dark:focus:ring-stone-500 dark:focus:border-stone-500" placeholder="Let us know how we can help you" required />
                                    </div>
                                    <div className="mb-6">
                                        <label htmlFor="message" className="block mb-2 text-sm font-medium text-stone-800  font-['Poppins']dark:text-white">Your message</label>
                                        <textarea id="message" rows={14} className="block bg-stone-100  p-2.5 w-full text-sm text-stone-800  font-['Poppins']rounded-lg border border-stone-300 focus:ring-stone-500 focus:border-stone-500 dark:bg-stone-700 dark:border-stone-600 dark:placeholder-stone-400 dark:text-white dark:focus:ring-stone-500 dark:focus:border-stone-500" placeholder="Your message..."></textarea>
                                    </div>
                                    <button type="submit" className="text-white bg-stone-700 hover:bg-stone-800 w-full focus:ring-4 focus:ring-stone-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-stone-600 dark:hover:bg-stone-700 focus:outline-none dark:focus:ring-stone-800 block">Send message</button>
                                </form>
                            </div>
                            <div className="w-full">
                                <h1 className="text-lg mb-6 w-full uppercase flex mx-auto items-center text-start text-stone-800  font-['Poppins']justify-start font-semibold">
                                    <span className="overflow-hidden p-0 clip text-stone-800 font-['Poppins'] capitalize"></span>About our shop</h1>
                                <div className="text-md mb-6 font-normal opacity-80 text-stone-800 justify-normal">
                                    <span className="">Home to hundreds of products that can make life easier after a loss of sight, Shop CNIB is a retail enterprise created by the charity Canadian National Institute for the Blind (CNIB).</span>
                                </div>
                                <div className="flex w-full justify-center pb-6">
                                    <div className="flex w-11/12">
                                        <iframe className="border" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1733.0521625215658!2d76.9868336838613!3d29.68775489999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390e711a383fc30f%3A0x870a362056aac50c!2sARYA%20AGENCIES%20RAYMOND%20WHOLESALER.!5e0!3m2!1sen!2sin!4v1703920999793!5m2!1sen!2sin" width="600" height="450" loading="lazy"></iframe>
                                    </div>
                                </div>
                                <div className="flex w-full justify-center">
                                    <div className="flex flex-row w-5/6 justify-between content-center">
                                        <ul className="flex w-full flex-col py-2 items-center">
                                            <li className="flex w-full flex-col pb-4 justify-start text-left">
                                                <div className="spb_wrapper flex justify-start">
                                                    <span className="float-left text-stone-800 h-full font-lg opacity-80 font-['Poppins'] m-0 pr-4"><BsEnvelope className="w-10 h-10 leading-10 flex justify-center font-[40px]"/>&nbsp;</span>
                                                    Tel: 877-45-44-33<br />E-Mail: shop@store.uk
                                                </div>
                                            </li>
                                            <li className="flex w-full flex-col pb-4 justify-start text-left">
                                                <div className="spb_wrapper flex justify-start">
                                                    <span className="float-left  text-stone-800 h-full font-lg opacity-80 font-['Poppins'] m-0 pr-4"><BsCursor className="w-10 h-10 leading-10 flex justify-center font-[40px]"/>&nbsp;</span>
                                                    20 Margaret St, London <br />Great Britain, 3NM98-LK
                                                </div>
                                            </li>
                                        </ul>
                                        <ul className="flex w-full flex-col py-2">
                                            <li className="flex flex-col pb-4">
                                                <div className="spb_wrapper flex justify-start">
                                                    <span className="float-left text-stone-800 h-full font-lg opacity-80  font-['Poppins'] m-0 ml-3 pr-4"><BsClock className="w-10 h-10 leading-10 flex justify-center font-[40px]"/>&nbsp;</span>
                                                    Supoort Forum <br />for over 24h
                                                </div>
                                            </li>
                                            <li className="flex w-full flex-col pb-4 justify-start text-left">
                                                <div className="spb_wrapper flex w-full h-full justify-start">
                                                    <span className="float-left text-stone-800 h-full font-lg opacity-80 font-['Poppins'] m-0 ml-3 pr-4"><BsRocket className="w-10 h-10 leading-10 flex justify-center font-[40px]"/>&nbsp;</span>
                                                    Free standard shipping <br/>on all orders.
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </>
    )
}