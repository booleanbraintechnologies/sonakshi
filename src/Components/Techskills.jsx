import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React from 'react';

export default function Techskills() {
    useGSAP(() => {
        gsap.from('.techskills span', {
            x: -10,
            opacity: 0,
            duration: 2,
            stagger: 0.5,
            scrollTrigger: {
                trigger: ".techskills",
                toggleActions: "restart none none none",
                markers: true,
                end: '10% 60%',
                start: '10% bottom',
                scrub: true,
            }
        });
    });
    return (
        <div className='container mx-auto p-4 pt-0 relative'>
            <div className='text-3xl md:text-5xl font-bold text-gray-300 p-5 pt-0 w-full flex flex-col-reverse md:flex-row'>

                <div className='w-full md:p-10 h-full md:pt-40 pt-20'>
                    <div className='flex gap-5'>
                        <Tilt className='w-full'>
                            <div className='w-full md:p-10 p-5 bg-gray-900 rounded-md md:mb-10 mb-5 mb:text-2xl text-xl text-center overflow-x-scroll relative card_sec'>
                                <h1>Model Making</h1>
                            </div>
                        </Tilt>
                    </div>

                    <div className='flex gap-5'>
                        <Tilt className='w-[60%]'>
                            <div className='w-full md:p-10 p-5 bg-gray-900 rounded-md md:mb-10 mb-5 mb:text-2xl text-xl text-center overflow-x-scroll relative card_sec'>
                                <h1>Drafting</h1>
                            </div>
                        </Tilt>
                        <Tilt className='w-[40%]'>
                            <div className='w-full md:p-10 p-5 bg-gray-900 rounded-md md:mb-10 mb-5 mb:text-2xl text-xl text-center overflow-x-scroll relative card_sec'>
                                <h1>Sketching</h1>
                            </div>
                        </Tilt>
                    </div>
                </div>
                <div className='w-full sticky top-10 h-fit md:bg-transparent bg-black z-10 p-8 text-right techskills'>
                    <span>T</span>
                    <span>E</span>
                    <span>C</span>
                    <span>H</span>
                    <span>N</span>
                    <span>I</span>
                    <span>C</span>
                    <span>A</span>
                    <span>L</span> <br />
                    <span>S</span>
                    <span>K</span>
                    <span>I</span>
                    <span>L</span>
                    <span>L</span>
                    <span>S</span>
                </div>
            </div>
        </div>
    )
}
