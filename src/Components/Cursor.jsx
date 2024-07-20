import React, { useEffect, useState } from 'react';
import gsap from 'gsap';

const Cursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const onMouseMove = (e) => {
            //   setPosition({ x: e.clientX, y: e.clientY });
            gsap.to('.cursor', {
                left: e.clientX,
                top: e.clientY,
                ease: "back.out(4)"
            });
            // gsap.to('.cursor', {
            //     x: e.x,
            //     y: e.y,
            // });
        };
        const onMouseClick = (e) => {
            const timeline = gsap.timeline(); 
            timeline.to('.cursor', {
                scale: 2
            });
            timeline.to('.cursor', {
                scale: 1
            });
        }

        window.addEventListener('mousemove', onMouseMove);
        window.addEventListener('click', onMouseClick);
        return () => {
            window.removeEventListener('mousemove', onMouseMove);
            window.addEventListener('click', onMouseClick);
        };
    }, []);

    return (
        <div
            className="fixed w-5 h-5 bg-gray-300 rounded-full pointer-events-none transform -translate-x-1/2 -translate-y-1/2 z-50 cursor border-2 border-black"
        ></div>
    );
};

export default Cursor;
