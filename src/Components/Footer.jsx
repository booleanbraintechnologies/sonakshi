import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaPhone } from 'react-icons/fa6';
import { GoMail } from 'react-icons/go';
import { MdEmail, MdPhone } from "react-icons/md";

export default function Footer() {
  return (
    <div className='w-full bg-black text-gray-400 p-5 flex justify-between'>
      <div>&copy; AMULURU SONAKSHI</div>
      <div className='flex items-center md:text-2xl text-xl md:gap-10 gap-5'>
        <a href="tel:+918639731401">
          <MdPhone />
        </a>
        <a href="https://www.linkedin.com/in/sonakshi-amuluru-059833251" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="mailto:amuluru.sonakshi@gmail.com">
          <MdEmail />
        </a>
      </div>
    </div>
  )
}
