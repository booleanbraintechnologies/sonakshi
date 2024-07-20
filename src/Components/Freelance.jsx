import React from 'react'
import img1 from '../Assets/Freelance/freelence1.png'
import img2 from '../Assets/Freelance/freelence2.png'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap'

export default function Freelance() {
    useGSAP(() => {
        gsap.from('.freelence_text span', {
            x: -10,
            opacity: 0,
            duration: 2,
            stagger: 0.5,
            scrollTrigger: {
                trigger: ".freelence_text",
                toggleActions: "restart none none none",
                // markers: true,
                end: '10% 60%',
                start: '10% bottom',
                scrub: true,
            }
        });
        gsap.from('.free_card', {
            x: 50,
            opacity: 0,
            duration: 2,
            stagger: 0.5,
            scrollTrigger: {
                trigger: ".free_card",
                toggleActions: "restart none none none",
                // markers: true,
                end: '10% 60%',
                start: '10% bottom',
                // scrub: true,
            }
        });
    });
    return (
        <div>
            <div className='container mx-auto p-4 bg-gray-900'>
                <div className='text-3xl md:text-5xl font-bold text-gray-300 p-5 md:p-10 mb-10 freelence_text w-full'>
                    <span>F</span>
                    <span>R</span>
                    <span>E</span>
                    <span>E</span>
                    <span>L</span>
                    <span>A</span>
                    <span>N</span>
                    <span>C</span>
                    <span>E</span>
                </div>
                <div className='md:px-9'>
                    <div className='w-full md:h-screen h-[25vh] p-4 relative containe mb-4 free_card' style={{
                        backgroundImage: `url(${img1})`,
                        backgroundSize: 'contain',
                        backgroundPosition: 'right center',
                        backgroundRepeat: 'no-repeat',
                    }}>
                        <span className='absolute origin-bottom-left bottom-0 md:left-40 left-20 -rotate-90 text-white'>
                            ALINA APARTMENT <br />ELEVATION- <br /> HOMELAND GROUP
                        </span>
                    </div>
                    <div className='w-full md:h-screen h-[25vh] p-4 relative container free_card' style={{
                        backgroundImage: `url(${img2})`,
                        backgroundSize: 'contain',
                        backgroundPosition: 'right center',
                        backgroundRepeat: 'no-repeat',
                    }}>
                        <span className='absolute origin-bottom-left bottom-0 md:left-40 left-20 -rotate-90 text-white'>
                            2BHK Kavali
                        </span>
                    </div>
                </div>
            </div>

        </div>
    )
}
