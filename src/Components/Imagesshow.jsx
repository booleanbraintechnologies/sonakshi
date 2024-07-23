import React, { useState, useEffect } from 'react';
import img1 from '../Assets/Images/1.png';
import img2 from '../Assets/Images/2.png';
import img3 from '../Assets/Images/3.png';
import img4 from '../Assets/Images/4.png';
import img5 from '../Assets/Images/5.png';
import img6 from '../Assets/Images/6.png';
import img7 from '../Assets/Images/7.png';
import img8 from '../Assets/Images/8.png';
import img9 from '../Assets/Images/9.png';
import img10 from '../Assets/Images/10.png';
import img11 from '../Assets/Images/11.png';
import img12 from '../Assets/Images/12.png';
import img13 from '../Assets/Images/13.png';
import img14 from '../Assets/Images/14.png';
import img15 from '../Assets/Images/15.png';
import img16 from '../Assets/Images/16.png';
import img17 from '../Assets/Images/17.png';
import img18 from '../Assets/Images/18.png';

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17, img18];
// const texts = ['Sample Work 1', 'Sample Work 2', 'Sample Work 3', 'Sample Work 4', 'Sample Work 5', 'Sample Work 6'];

export default function ImagesShow() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        setFade(true);
      }, 1000); // Time for the fade-out effect
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div
        className={`lg:w-[150%] w-full lg:h-full md:h-full h-full transition-opacity duration-1000 lg:bg-cover bg-contain ${fade ? 'opacity-100' : 'opacity-0'}`}
        style={{
          backgroundImage: `url(${images[currentIndex]})`,
          // backgroundSize: 'contain',
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',
          backgroundRepeat: "no-repeat"
        }}
      >
        <div className='text-gray-500 p-4 sticky top-0 text-xl font-bold h-[50vh]'>
          {/* {texts[currentIndex]} */}
        </div>
      </div>
    </>
  );
}
