import React, { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import TextPlugin from 'gsap/TextPlugin';
gsap.registerPlugin(ScrollTrigger, TextPlugin);
export default function Hero() {
    useEffect(() => {
        gsap.to('.hero_scroll', {
            top: "calc(100% - 14px - 0.25rem)", // Adjust the value as needed
            duration: 0.5,
            repeat: -1, 
            yoyo: true,
            ease: 'none',
        });
    }, []);

    return (
        <div className='container mx-auto flex text-white h-[90vh] flex-col'>
            <div className='w-full flex justify-center'>
                <div className='w-[10%] h-[60vh] mt-[10vh] flex flex-col'>
                    <div className='h-6 w-6 rounded-full bg-[rgb(220,0,255)] self-end'></div>
                    <div className='h-full w-2 rounded-full bg-gradient-to-b from-[#DC00FF] to-transparent mr-[0.50rem] self-end'></div>
                </div>
                <div className='w-[80%] h-[60vh] mt-[10vh] p-10 font-bold text-3xl md:text-5xl'>
                    Hi, I'm <span className='text-[#DC00FF]'>AMULURU SONAKSHI</span><br /><br />
                    <span className='font-normal text-lg md:text-2xl leading-none'>
                        A passionate architecture transforming <br />
                        ideas into reality
                    </span>
                </div>
            </div>
            <div className='h-14 w-6 rounded-full self-center border-[#DC00FF] border-2 p-1 mt-9 relative'>
                <div className='w-[calc(100%-0.5rem)] aspect-square bg-[#DC00FF] rounded-full absolute top-[0.25rem] hero_scroll'></div>
            </div>
        </div>
    );
}
