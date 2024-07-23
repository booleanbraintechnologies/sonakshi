import React, { useState, useEffect, useRef } from 'react';
import './timeline.css'; // Create a CSS file for custom styles
import { useGSAP } from '@gsap/react';
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger';
import TimelineComponent from './TimelineComponent';

gsap.registerPlugin(ScrollTrigger);

export default function Academic() {
  const [timeline, setTimeline] = useState(false);
  const [enableHorizontalScroll, setEnableHorizontalScroll] = useState(false);
  const timelineRef = useRef(null);

  useGSAP(() => {
    gsap.from('.acadmics_text span', {
      x: -10,
      opacity: 0,
      duration: 2,
      stagger: 0.5,
      scrollTrigger: {
        trigger: ".acadmics_text",
        toggleActions: "restart none none none",
        end: '10% 60%',
        start: '10% bottom',
        scrub: true,
      }
    });
  });

  const handleDoubleClick = () => {
    setEnableHorizontalScroll(!enableHorizontalScroll);
  };

  const handleMouseScroll = (event) => {
    if (enableHorizontalScroll && timelineRef.current) {
      timelineRef.current.scrollLeft += event.deltaY;
    }
  };

  const items = [
    { date: "2019", description: "Kiosk design", background: 'rgb(33, 150, 243)' },
    { date: "2020", description: "➢ 4bhk duplex residence<br>➢ Kindergarten school ", background: 'rgb(55, 55, 55)' },
    { date: "2021", description: "➢ Island resort design<br>➢ Architecture campus design", background: 'rgb(55, 55, 55)' },
    { date: "2022", description: "➢ Artisan’s village<br>➢ High rise apartments", background: 'rgb(55, 55, 55)' },
    { date: "2023", description: "➢ Practical training at B design<br> studios, Hyderabad<br>➢ Mixed use development, freelance-<br> 2bhk, apartment elevation design", background: 'rgb(55, 55, 55)' },
    { date: "2024", description: "➢ Eco wellness beach resort<br>➢ Jr. architect at sudhir and <br> associates ( May 2024 - present)", background: 'rgb(55, 55, 55)' },
  ];

  useEffect(() => {
    if (enableHorizontalScroll) {
      window.addEventListener('wheel', handleMouseScroll);
    } else {
      window.removeEventListener('wheel', handleMouseScroll);
    }
    return () => {
      window.removeEventListener('wheel', handleMouseScroll);
    };
  }, [enableHorizontalScroll]);

  return (
    <div className='container mx-auto p-4 relative'>
      <div className='text-3xl md:text-5xl font-bold text-gray-300 p-5 md:p-10 mb-10 acadmics_text w-full'>
        <span>E</span>
        <span>X</span>
        <span>P</span>
        <span>E</span>
        <span>R</span>
        <span>I</span>
        <span>E</span>
        <span>N</span>
        <span>C</span>
        <span>E</span>
      </div>
      <div
        className={`timeline-container w-screen ${!timeline ? "overflow-hidden" : "overflow-x-auto"} 2xl:overflow-x-auto lg:overflow-x-auto scrollable-element scrollbar-dark`}
        // onDoubleClick={handleDoubleClick}
        ref={timelineRef}
      >
        <div className="timeline 2xl:mx-0 lg:mx-auto md:mx-auto mx-5">
          {items.map((item, index) => (
            <TimelineComponent desc={item.description} date={item.date} color={item.color} idx={index} key={index} />
          ))}
        </div>
      </div>
      <div className={`absolute w-20 right-0 top-0 h-full z-10 flex items-center justify-end bg-gradient-to-l from-black via-black/100 to-transparent text-white cursor-pointer ${!timeline ? "block" : "hidden"} font-bold p-4 text-5xl lg:hidden 2xl:hidden`} onClick={() => setTimeline(!timeline)}>⟩</div>
    </div>
  );
}
