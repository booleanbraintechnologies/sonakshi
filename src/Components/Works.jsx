import React, { useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import work1 from '../Assets/works/work1.png';
import work2 from '../Assets/works/work2.png';
import work3 from '../Assets/works/work3.png';
import work4 from '../Assets/works/work4.png';
import work5 from '../Assets/works/work5.png';
import work6 from '../Assets/works/work6.png';
import ScrollTrigger from 'gsap/ScrollTrigger';
import TextPlugin from 'gsap/TextPlugin';
import { Link } from 'react-router-dom';
gsap.registerPlugin(ScrollTrigger, TextPlugin);
export default function Works() {
    useGSAP(() => {
        gsap.from('.work_card', {
            x: -100,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: "back.out(1.4)",
            scrollTrigger: {
                trigger: ".work_container",
                toggleActions: "restart none none none",
                end: '10% top',
                start: '10% 60%'
                // markers: true
            }
        });
        gsap.from('.work_text span', {
            x: -10,
            opacity: 0,
            duration: 2,
            stagger: 0.5,
            scrollTrigger: {
                trigger: ".work_container",
                toggleActions: "restart none none none",
                // markers: true,
                end: '10% 60%',
                start: '10% bottom',
                scrub: true
            }
        });
    }, []);
    return (
        <div className='container mx-auto p-4 relative work_container'>
            <div className='text-3xl md:text-5xl font-bold text-gray-300 p-5 md:p-10 mb-10 work_text'>
                <span>F</span>
                <span>E</span>
                <span>A</span>
                <span>T</span>
                <span>U</span>
                <span>R</span>
                <span>E</span>
                <span>D</span>
                <br />
                <span>W</span>
                <span>O</span>
                <span>R</span>
                <span>K</span>
                {/* FEATURED <br />
                WORK */}
            </div>
            <div className="grid grid-cols-2 md:grid-cols-6 gap-10 px-5 md:px-10 ">
                <Link to={'work1'} className="w-full md:h-[70vh] h-[50vh] bg-gray-200 font-bold work_card" style={{
                    backgroundImage: 'url(' + work1 + ')',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}>
                    <div className='h-full w-full backdrop-grayscale hover:backdrop-grayscale-0 duration-500 flext text-center items-center justify-center p-1 cursor-pointer' >
                        HIGH RISE RESIDENCE - ALLY HIGH
                    </div>
                </Link>
                <Link to={'work2'} className="w-full md:h-[70vh] h-[50vh] bg-gray-200 font-bold work_card" style={{
                    backgroundImage: 'url(' + work2 + ')',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}>
                    <div className='h-full w-full backdrop-grayscale hover:backdrop-grayscale-0 duration-500 flext text-center items-center justify-center p-1 cursor-pointer' >
                        ECO-WELLNESS RESORT - CLIFF VISTA ECO HAVEN
                    </div>
                </Link>
                <Link to={'work3'} className="w-full md:h-[70vh] h-[50vh] bg-gray-200 font-bold work_card" style={{
                    backgroundImage: 'url(' + work3 + ')',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}>
                    <div className='h-full w-full backdrop-grayscale hover:backdrop-grayscale-0 duration-500 flext text-center items-center justify-center p-1 cursor-pointer' >
                        RESIDENCE DESIGN - CORNER HOUSE
                    </div>
                </Link>
                <Link to={'work4'} className="w-full md:h-[70vh] h-[50vh] bg-gray-200 font-bold work_card" style={{
                    backgroundImage: 'url(' + work4 + ')',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}>
                    <div className='h-full w-full backdrop-grayscale hover:backdrop-grayscale-0 duration-500 flext text-center items-center justify-center p-1 cursor-pointer' >
                        OTHER PROJECTS
                    </div>
                </Link>
                <Link to={'work5'} className="w-full md:h-[70vh] h-[50vh] bg-gray-200 font-bold work_card" style={{
                    backgroundImage: 'url(' + work5 + ')',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}>
                    <div className='h-full w-full backdrop-grayscale hover:backdrop-grayscale-0 duration-500 flext text-center items-center justify-center p-1 cursor-pointer' >
                        INTERIORS
                    </div>
                </Link>
                <Link to={'work6'} className="w-full md:h-[70vh] h-[50vh] bg-gray-200 font-bold work_card" style={{
                    backgroundImage: 'url(' + work6 + ')',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}>
                    <div className='h-full w-full backdrop-grayscale hover:backdrop-grayscale-0 duration-500 flext text-center items-center justify-center p-1 cursor-pointer' >
                        FREELANCE PROJECTS
                    </div>
                </Link>
            </div>

        </div>
    )
}
