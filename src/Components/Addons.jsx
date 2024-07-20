import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React from 'react'
// import div from 'react-parallax-div';
import autocad from '../Assets/icons/autocad.png';
import d5 from '../Assets/icons/d5.png';
import enscape from '../Assets/icons/enscape.jpg';
import designbuillder from '../Assets/icons/designbuillder.png';
import indesign from '../Assets/icons/indesign.png';
import mssuite from '../Assets/icons/mssuite.png';
import photoshop from '../Assets/icons/photoshop.png';
import revit from '../Assets/icons/revit.png';
import rhino from '../Assets/icons/rhino.png';
import sketchup from '../Assets/icons/sketchup.png';
import twinmotion from '../Assets/icons/twinmotion.png';
import vray from '../Assets/icons/vray.png';

export default function Addons() {
    useGSAP(() => {
        gsap.from('.addon span', {
            x: -10,
            opacity: 0,
            duration: 2,
            stagger: 0.5,
            scrollTrigger: {
                trigger: ".addon",
                toggleActions: "restart none none none",
                // markers: true,
                end: '10% 60%',
                start: '10% bottom',
                scrub: true,
            }
        });
        gsap.from('.card_container', {
            opacity: 0,
            duration: 2,
            stagger: 0.5,
            scrollTrigger: {
                trigger: ".card_container_parent",
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
            <div className='text-3xl md:text-5xl font-bold text-gray-300 p-5 pt-0 w-full flex flex-col md:flex-row'>
                <div className='w-full sticky top-10 h-fit md:bg-transparent bg-black z-10 p-8 addon'>
                    <span>S</span>
                    <span>K</span>
                    <span>I</span>
                    <span>L</span>
                    <span>L</span>
                    <span>S</span>
                    {/* skills */}
                </div>
                <div className='w-full md:p-10 h-full md:pt-40 pt-20 card_container_parent'>
                    <div className='flex gap-5 card_container'>
                        <div className='w-[40%]'>
                            <div className='w-full md:p-10 p-5 bg-gray-900 rounded-md md:mb-10 mb-5 md:text-2xl text-sm text-center overflow-x-scroll relative card_sec'>
                                <h1 className='flex items-center justify-center gap-2'><img src={revit} className='md:h-[30px] h-[20px]'/> Revit</h1>
                            </div>
                        </div>
                        <div className='w-[60%]'>
                            <div className='w-full md:p-10 p-5 bg-gray-900 rounded-md md:mb-10 mb-5 md:text-2xl text-sm text-center overflow-x-scroll relative card_sec'>
                                <h1 className='flex items-center justify-center gap-2'><img src={autocad} className='md:h-[30px] h-[20px]'/> Autocad</h1> 
                            </div>
                        </div>
                    </div>

                    <div className='flex gap-5 card_container'>
                        <div className='w-[60%]'>
                            <div className='w-full md:p-10 p-5 bg-gray-900 rounded-md md:mb-10 mb-5 md:text-2xl text-sm text-center overflow-x-scroll relative card_sec'>
                                <h1 className='flex items-center justify-center gap-2'><img src={sketchup} className='md:h-[30px] h-[20px]'/>SketchUp</h1>
                            </div>
                        </div>
                        <div className='w-[40%]'>
                            <div className='w-full md:p-10 p-5 bg-gray-900 rounded-md md:mb-10 mb-5 md:text-2xl text-sm text-center overflow-x-scroll relative card_sec'>
                                <h1 className='flex items-center justify-center gap-2'> <img src={rhino} className='md:h-[30px] h-[20px]'/>Rhino</h1>
                            </div>
                        </div>
                    </div>
                    <div className='flex gap-5 card_container'>
                        <div className='w-[40%]'>
                            <div className='w-full md:p-10 p-5 bg-gray-900 rounded-md md:mb-10 mb-5 md:text-2xl text-sm text-center overflow-x-scroll relative card_sec'>
                                <h1 className='flex items-center justify-center gap-2'><img src={enscape} className='md:h-[30px] h-[20px]'/>Enscape</h1>
                            </div>
                        </div>
                        <div className='w-[60%]'>
                            <div className='w-full md:p-10 p-5 bg-gray-900 rounded-md md:mb-10 mb-5 md:text-2xl text-sm text-center overflow-x-scroll relative card_sec'>
                                <h1 className='flex items-center justify-center gap-2'><img src={d5} className='md:h-[30px] h-[20px]'/>D5</h1>
                            </div>
                        </div>
                    </div>

                    <div className='flex gap-5 card_container'>
                        <div className='w-[60%]'>
                            <div className='w-full md:p-10 p-5 bg-gray-900 rounded-md md:mb-10 mb-5 md:text-2xl text-sm text-center overflow-x-scroll relative card_sec'>
                                <h1 className='flex items-center justify-center gap-2'><img src={vray} className='md:h-[30px] h-[20px]'/>Vray</h1>
                            </div>
                        </div>
                        <div className='w-[40%]'>
                            <div className='w-full md:p-10 p-5 bg-gray-900 rounded-md md:mb-10 mb-5 md:text-2xl text-sm text-center overflow-x-scroll relative card_sec'>
                                <h1 className='flex items-center justify-center gap-2'><img src={twinmotion} className='md:h-[30px] h-[20px]'/>TwinMotion</h1>
                            </div>
                        </div>
                    </div>
                    <div className='flex gap-5 card_container'>
                        <div className='w-[40%]'>
                            <div className='w-full md:p-10 p-5 bg-gray-900 rounded-md md:mb-10 mb-5 md:text-2xl text-sm text-center overflow-x-scroll relative card_sec'>
                                <h1 className='flex items-center justify-center gap-2'><img src={photoshop} className='md:h-[30px] h-[20px]'/>Photoshop</h1>
                            </div>
                        </div>
                        <div className='w-[60%]'>
                            <div className='w-full md:p-10 p-5 bg-gray-900 rounded-md md:mb-10 mb-5 md:text-2xl text-sm text-center overflow-x-scroll relative card_sec'>
                                <h1 className='flex items-center justify-center gap-2'><img src={indesign} className='md:h-[30px] h-[20px]'/>Indesign</h1>
                            </div>
                        </div>
                    </div>

                    <div className='flex gap-5 card_container'>
                        <div className='w-[60%]'>
                            <div className='w-full md:p-10 p-5 bg-gray-900 rounded-md md:mb-10 mb-5 md:text-2xl text-sm text-center overflow-x-scroll relative card_sec'>
                                <h1 className='flex items-center justify-center gap-2'><img src={designbuillder} className='md:h-[30px] h-[20px]'/>DesignBuilder</h1>
                            </div>
                        </div>
                        <div className='w-[40%]'>
                            <div className='w-full md:p-10 p-5 bg-gray-900 rounded-md md:mb-10 mb-5 md:text-2xl text-sm text-center overflow-x-scroll relative card_sec'>
                                <h1 className='flex items-center justify-center gap-2'><img src={mssuite} className='md:h-[30px] h-[20px]'/>MsSuite</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
