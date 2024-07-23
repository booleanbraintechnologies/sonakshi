import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React from 'react';
// import div from 'react-parallax-div';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
export default function Arcitecturalintrest() {
    useGSAP(() => {
        gsap.from('.arcitectural span', {
            x: -10,
            opacity: 0,
            duration: 2,
            stagger: 0.5,
            scrollTrigger: {
                trigger: ".arcitectural",
                toggleActions: "restart none none none",
                // markers: true,
                end: '10% 60%',
                start: '10% bottom',
                scrub: true,
            }
        });

        gsap.from('.card_container_a', {
            opacity: 0,
            duration: 2,
            stagger: 0.5,
            scrollTrigger: {
                trigger: ".card_container_parent_a",
                // toggleActions: ".card_container_parent",
                // markers: true,
                end: 'bottom top',
                start: '20% bottom',
                scrub: true,
            }
        });
    });
    return (
        <div className='container mx-auto p-4 pt-0 relative'>
            <div className='text-3xl md:text-5xl font-bold text-gray-300 p-5 pt-0 w-full flex flex-col-reverse lg:flex-row'>
                <div className='w-full md:p-10 h-full md:pt-40 pt-20 card_container_parent_a'>
                    <div className='flex gap-5 card_container_a'>
                        <div className='w-[40%]'>
                            <div className='w-full md:p-10 p-5 bg-gray-900 rounded-md md:mb-10 mb-5 md:text-2xl text-sm text-center overflow-x-scroll relative card_sec'>
                                <h1>Architectural</h1>
                            </div>
                        </div>
                        <div className='w-[60%]'>
                            <div className='w-full md:p-10 p-5 bg-gray-900 rounded-md md:mb-10 mb-5 md:text-2xl text-sm text-center overflow-x-scroll relative card_sec'>
                                <h1>Interiors</h1>
                            </div>
                        </div>
                    </div>

                    <div className='flex gap-5 card_container_a'>
                        <div className='w-[60%]'>
                            <div className='w-full md:p-10 p-5 bg-gray-900 rounded-md md:mb-10 mb-5 md:text-2xl text-sm text-center overflow-x-scroll relative card_sec'>
                                <h1>Retrofitting</h1>
                            </div>
                        </div>
                        <div className='w-[40%]'>
                            <div className='w-full md:p-10 p-5 bg-gray-900 rounded-md md:mb-10 mb-5 md:text-2xl text-sm text-center overflow-x-scroll relative card_sec'>
                                <h1>Landscaping</h1>
                            </div>
                        </div>
                    </div>
                    <div className='flex gap-5 card_container_a'>
                        <div className='w-[100%]'>
                            <div className='w-full md:p-10 p-5 bg-gray-900 rounded-md md:mb-10 mb-5 md:text-2xl text-sm text-center overflow-x-scroll relative card_sec'>
                                <h1>3d Visualisation</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full sticky top-10 h-fit lg:bg-transparent bg-black z-10 p-8 arcitectural lg:text-right text-left'>
                    <span>S</span>
                    <span>E</span>
                    <span>R</span>
                    <span>V</span>
                    <span>I</span>
                    <span>C</span>
                    <span>E</span>
                    <span>S</span> <br />
                    <span>P</span>
                    <span>R</span>
                    <span>O</span>
                    <span>V</span>
                    <span>I</span>
                    <span>D</span>
                    <span>E</span>
                    <span>D</span>

                    {/* services provided */}
                </div>
            </div>
        </div>
    )
}
