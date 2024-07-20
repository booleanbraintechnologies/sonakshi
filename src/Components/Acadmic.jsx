// import { useGSAP } from '@gsap/react';
// import gsap from 'gsap';
// import React from 'react'
// import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
// import 'react-vertical-timeline-component/style.min.css';
// export default function Acadmic() {
//     useGSAP(() => {
//         gsap.from('.acadmics_text span', {
//             x: -10,
//             opacity: 0,
//             duration: 2,
//             stagger: 0.5,
//             scrollTrigger: {
//                 trigger: ".acadmics_text",
//                 toggleActions: "restart none none none",
//                 // markers: true,
//                 end: '10% 60%',
//                 start: '10% bottom',
//                 scrub: true,
//             }
//         });
//     });
//     return (
//         <div className='container mx-auto p-4'>
//             <div className='text-3xl md:text-5xl font-bold text-gray-300 p-5 md:p-10 mb-10 acadmics_text w-full'>
//                 <span>A</span>
//                 <span>C</span>
//                 <span>A</span>
//                 <span>D</span>
//                 <span>M</span>
//                 <span>I</span>
//                 <span>C</span>
//                 <span>S</span>
//             </div>
//             <VerticalTimeline>
//                 <VerticalTimelineElement
//                     className="vertical-timeline-element--work"
//                     contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
//                     contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
//                     date="1st sem"
//                     iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
//                 // icon={<WorkIcon />}
//                 >
//                     <p className='p-0 m-0'>
//                         Single user space (kiosk)
//                     </p>
//                 </VerticalTimelineElement>
//                 <VerticalTimelineElement
//                     className="vertical-timeline-element--work"
//                     contentStyle={{ background: 'rgb(55, 55, 55)', color: '#fff' }}
//                     contentArrowStyle={{ borderRight: '7px solid rgb(55, 55, 55)' }}
//                     date="2nd sem"
//                     iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
//                 // icon={<WorkIcon />}
//                 >
//                     <p>
//                         Residence design (3bhk)
//                     </p>
//                 </VerticalTimelineElement>
//                 <VerticalTimelineElement
//                     className="vertical-timeline-element--work"
//                     contentStyle={{ background: 'rgb(55, 55, 55)', color: '#fff' }}
//                     contentArrowStyle={{ borderRight: '7px solid rgb(55, 55, 55)' }}
//                     date="3rd sem"
//                     iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
//                 // icon={<WorkIcon />}
//                 >
//                     <p>
//                         Campus design (kindergarten)
//                     </p>
//                 </VerticalTimelineElement>
//                 <VerticalTimelineElement
//                     className="vertical-timeline-element--work"
//                     contentStyle={{ background: 'rgb(55, 55, 55)', color: '#fff' }}
//                     contentArrowStyle={{ borderRight: '7px solid rgb(55, 55, 55)' }}
//                     date="4th sem"
//                     iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
//                 // icon={<WorkIcon />}
//                 >
//                     <p>
//                         Climate responsive design (island resort group of 2)
//                     </p>
//                 </VerticalTimelineElement>
//                 <VerticalTimelineElement
//                     className="vertical-timeline-element--education"
//                     contentStyle={{ background: 'rgb(55, 55, 55)', color: '#fff' }}
//                     contentArrowStyle={{ borderRight: '7px solid rgb(55, 55, 55)' }}
//                     date="5th sem"
//                     iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
//                 // icon={<SchoolIcon />}
//                 >
//                     <p>
//                         Environmental design (architecture campus)
//                     </p>
//                 </VerticalTimelineElement>
//                 <VerticalTimelineElement
//                     className="vertical-timeline-element--education"
//                     contentStyle={{ background: 'rgb(55, 55, 55)', color: '#fff' }}
//                     contentArrowStyle={{ borderRight: '7px solid rgb(55, 55, 55)' }}
//                     date="6th sem"
//                     iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
//                 // icon={<SchoolIcon />}
//                 >
//                     <p>
//                         Public buildings (artisan's village)
//                     </p>
//                 </VerticalTimelineElement>
//                 <VerticalTimelineElement
//                     className="vertical-timeline-element--education"
//                     contentStyle={{ background: 'rgb(55, 55, 55)', color: '#fff' }}
//                     contentArrowStyle={{ borderRight: '7px solid rgb(55, 55, 55)' }}
//                     date="7th sem"
//                     iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
//                 // icon={<SchoolIcon />}
//                 >
//                     <p>
//                         Human centric campus design (high rise residence)
//                     </p>
//                 </VerticalTimelineElement>
//                 <VerticalTimelineElement
//                     className="vertical-timeline-element--education"
//                     contentStyle={{ background: 'rgb(55, 55, 55)', color: '#fff' }}
//                     contentArrowStyle={{ borderRight: '7px solid rgb(55, 55, 55)' }}
//                     date="8th sem"
//                     iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
//                 // icon={<SchoolIcon />}
//                 >
//                     <p>
//                         Practical Training
//                     </p>
//                 </VerticalTimelineElement>
//                 <VerticalTimelineElement
//                     className="vertical-timeline-element--education"
//                     contentStyle={{ background: 'rgb(55, 55, 55)', color: '#fff' }}
//                     contentArrowStyle={{ borderRight: '7px solid rgb(55, 55, 55)' }}
//                     date="9th sem"
//                     iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
//                 // icon={<SchoolIcon />}
//                 >
//                     <p>
//                         Urban Context Studio (multi - use development)
//                     </p>
//                 </VerticalTimelineElement>
//                 <VerticalTimelineElement
//                     className="vertical-timeline-element--education"
//                     contentStyle={{ background: 'rgb(55, 55, 55)', color: '#fff' }}
//                     contentArrowStyle={{ borderRight: '7px solid rgb(55, 55, 55)' }}
//                     date="10th"
//                     iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
//                 // icon={<SchoolIcon />}
//                 >
//                     <p>
//                         Thesis (Eco- wellness resort)
//                     </p>
//                 </VerticalTimelineElement>
//             </VerticalTimeline>
//         </div>
//     )
// }
import React, { useState } from 'react';
import './timeline.css'; // Create a CSS file for custom styles
import { useGSAP } from '@gsap/react';
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger';
import TimelineComponent from './TimelineComponent';
gsap.registerPlugin(ScrollTrigger);
export default function Academic() {
  const [timeline, setTimeline] = useState(false);
  useGSAP(() => {
    gsap.from('.acadmics_text span', {
      x: -10,
      opacity: 0,
      duration: 2,
      stagger: 0.5,
      scrollTrigger: {
        trigger: ".acadmics_text",
        toggleActions: "restart none none none",
        // markers: true,
        end: '10% 60%',
        start: '10% bottom',
        scrub: true,
      }
    });
  });
  const items = [
    { date: "2019", description: "Kiosk design", background: 'rgb(33, 150, 243)' },
    { date: "2020", description: "➢ 4bhk duplex residence<br>➢ Kindergarten school ", background: 'rgb(55, 55, 55)' },
    { date: "2021", description: "➢ Island resort design<br>➢ Architecture campus design", background: 'rgb(55, 55, 55)' },
    { date: "2022", description: "➢ Artisan’s village<br>➢ High rise apartments", background: 'rgb(55, 55, 55)' },
    { date: "2023", description: "➢ Practical training at B design studios, Hyderabad<br>➢ Mixed use development, freelance- 2bhk, apartment elevation design", background: 'rgb(55, 55, 55)' },
    { date: "2024", description: "➢ Eco wellness beach resort<br>➢ Jr. architect at sudhir and associates ( May 2024 - present)", background: 'rgb(55, 55, 55)' },
    // rgb(220,0,255)
  ];

  return (
    <div className='container mx-auto p-4'>
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
        {/* experience */}
      </div>
      <div className={`timeline-container w-screen ${!timeline ? "overflow-hidden" : "overflow-auto"}`}>
        <div className={`absolute w-20 right-0 h-full z-10 flex items-center justify-center bg-gradient-to-l from-black via-black/100 to-transparent text-white cursor-pointer ${!timeline ? "block": "hidden"}`} onClick={()=>setTimeline(!timeline)}>M<br />O<br />R<br />E</div>
        <div className="timeline" >
          {items.map((item, index) => (
            // <div key={index} className="timeline-item" style={{ background: item.background }}>
            //   <div className="timeline-item-content">
            //     <span className="tag" style={{ background: item.background }}>{item.date}</span>
            //     <p dangerouslySetInnerHTML={{ __html: item.description }}></p>
            //     <span className="circle" style={{ background: item.background }}></span>
            //   </div>
            // </div>
            <TimelineComponent desc={item.description} date={item.date} color={item.color} idx={index} key={index}/>
          ))}
        </div>
      </div>
    </div>
  );
}
