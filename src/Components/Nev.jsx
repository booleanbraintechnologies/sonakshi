import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';

export default function Nev() {
    const [nevstate, setNevState] = useState(false);
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(timer); // Cleanup the interval on component unmount
    }, []);

    const formatTime = (date) => {
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
        const seconds = date.getSeconds().toString().padStart(2, '0');
        return `${hours}:${minutes}:${seconds}`;
    };

    useEffect(() => {
        // gsap.from('.nev_time', {
        //     x: -10,
        //     opacity: 0,
        //     duration: 1
        // });
    }, []);

    return (
        <nav className="bg-black container mx-auto p-4 flex justify-between relative h-[10vh]">
            <div className={`text-gray-400 flex items-center font-bold ${!nevstate ? 'opacity-100' : 'opacity-0'}`}>
                Time : {formatTime(time)}
            </div>
            <div>
                <div className='p-1 w-10 h-10 flex flex-col justify-between cursor-pointer hover:scale-105 duration-700' onClick={() => setNevState(!nevstate)}>
                    <div className={`bg-white w-5 h-1 rounded-full translate-y-[2.2px] duration-100 ${nevstate && 'rotate-[45deg] origin-left translate-x-[4.2px]'}`}></div>
                    <div className={`bg-white w-full h-1 rounded-full duration-100 ${nevstate && 'rotate-[-45deg]'}`}></div>
                    <div className={`bg-white w-5 h-1 self-end rounded-full -translate-y-[2.2px] duration-100 ${nevstate && 'rotate-[45deg] origin-right -translate-x-[4.2px]'}`}></div>
                </div>
            </div>
            <div className={`absolute flex ${nevstate ? "top-full" : "-top-[60vh]"} left-0 flex-col bg-black w-full justify-evenly items-center h-[60vh] duration-100 md:text-5xl text-3xl text-gray-100 p-10 text-center`}>
                <a href="#home" className="nav-link hover:text-black w-full py-3 font-bold">Home</a>
                <a href="#work" className="nav-link hover:text-black w-full py-3 font-bold">Featured works</a>
                <a href="#contact" className="nav-link hover:text-black w-full py-3 font-bold">Contact Us</a>

            </div>
        </nav>
    );
}
