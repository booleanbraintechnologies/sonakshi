import React from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger';
import TextPlugin from 'gsap/TextPlugin';
import profile from '../Assets/profile.jpg';
import pdf from '/resume.pdf'
import portfolio from '/portfolio.pdf'
import { FaDownload } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger, TextPlugin);
export default function About() {
    useGSAP(() => {
        // gsap.to('.about_image_laptop', {
        //     // bottom:"0",
        //     top: '90%',
        //     ease: 'linear',
        //     scrollTrigger: {
        //         trigger: ".about_image_container",
        //         end: '190% top',
        //         start: '50% bottom',
        //         // markers: true,
        //         scrub: true,
        //         // pin: true
        //     }
        // });

        gsap.from('.about_text span', {
            x: -10,
            opacity: 0,
            duration: 2,
            stagger: 0.5,
            scrollTrigger: {
                trigger: ".about_container",
                toggleActions: "restart none none none",
                // markers: true,
                end: '10% 60%',
                start: '10% bottom',
                scrub: true,
            }
        });

        gsap.to('.about_text_inner', {
            duration: 2,
            text: `Welcome to my portfolio! I am a
dedicated architect based out of Hyderabad, India; passionate about designing, planning,
and executing various projects with creativity and precision. With a strong commitment to
continuous learning and growth, I actively seek opportunities to enhance my skills and
expand my knowledge in architecture and design. My goal is to deliver innovative solutions
that not only meet but exceed client expectations, ensuring each project is a testament to
both aesthetic appeal and functional excellence. Explore my portfolio to discover how I can
contribute to your next architectural endeavor.`,
            ease: 'power4.out',
            scrollTrigger: {
                trigger: '.about_text_inner',
                start: 'top 80%',
                end: 'top 60%',
                toggleActions: "restart none none none",
                // scrub: true,
            },
        });
    }, [])
    return (
        <div className='container mx-auto p-4 relative about_container flex h-full md:gap-20 md:flex-row flex-col-reverse'>
            <div className='text-3xl md:text-5xl font-bold text-gray-300 p-5 md:p-10 mb-10 about_text w-full'>
                <span>A</span>
                <span>B</span>
                <span>O</span>
                <span>U</span>
                <span>T</span>
                <br /><br />
                <div className='md:text-2xl text-xl md:w-[60%] w-full text-justify font-medium text-gray-400 about_text_inner'>
                </div> <br />
                <div className='flex gsp-5 flex-row'>
                    <a href={pdf} download={'resume.pdf'} className='text-xl text-[#ffffff] flex w-fit items-center rounded-md justify-center p-0'>
                        <div className="button2"><span className='h-full w-full'>
                            <div className='flex'>
                                <span className='p-2'>Resume</span> <span className='border-l-2 p-2 flex items-center'><FaDownload /></span>
                            </div>
                        </span></div>
                    </a> <br />
                    <a href={portfolio} download={'portfolio.pdf'} className='text-xl text-[#ffffff] flex w-fit items-center rounded-md justify-center p-0'>
                        <div className="button2"><span className='h-full w-full'>
                            <div className='flex'>
                                <span className='p-2'>Portfolio</span> <span className='border-l-2 p-2 flex items-center'><FaDownload /></span>
                            </div>
                        </span></div>
                    </a>
                </div>
            </div>
            <div className='md:h-[100vh] h-[15vh] md:pr-[10vw] flex items-center'>
                <div className='md:w-[300px] w-full border-4 h-[90%] rounded-full relative p-2 overflow-hidden about_image_container'>
                    <div className='md:w-full w-auto h-full
                    md:h-auto aspect-square rounded-full bg-slate-200 about_image_laptop absolute top-0 left-0' style={{
                        backgroundImage: 'url("' + profile + '")',
                        backgroundSize: 'cover'
                    }}></div>
                </div>
            </div>
        </div>
    )
}
