import React, { useState } from 'react';

export default function TimelineComponent({ desc, color, date, idx }) {
  const [show, setShow] = useState(true);
  return (
    <div className="relative overflow-y-visible m-0 p-0" id='container'>
      <div className={`timeline_description${idx%2} ${show ? "visible" : "invisible"} duration-500 h-fit`} dangerouslySetInnerHTML={{ __html: desc }}></div>
      <div className="absolute h-14 w-14 bg-[rgb(249,208,255)] top-[calc(50%-1.75rem)] left-[calc(50%-1.75rem)] rounded-full flex items-center justify-center border-2 border-[rgb(220,0,255)] font-bold text-sm" onClick={() => setShow(!show)}>{date}</div>
    </div>
  );
}
