"use client"
import React from 'react'
import { Label } from './ui/label'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { Button } from './ui/button'
import { Mail } from 'lucide-react';
import { MessageCircle } from 'lucide-react'; // Replace Whatsapp with MessageCircle
import { FaWhatsapp, FaLinkedin } from 'react-icons/fa';

const Feedback = () => {
  const handleEmailClick = () => {
    const email = "odeye358@gmail.com";
    const subject = "Portfolio Contact";
    const body = `Hi Emmanuel,
  
  I came across your portfolio and would like to get in touch.
  
  Best regards,
  `;
    window.open(
      `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`,
      "_self"
    );

  };
  const openWhatsApp = () => {
    const phoneNumber = "2349065048467"; // your number
    const message = "Hi Emmanuel, I saw your portfolio!"; // optional pre-filled message
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank"); // opens WhatsApp in new tab or app
  };

  const openLinkedIn = () => {
    const profileURL = "https://www.linkedin.com/in/emmanuel-odey-23aa2227b/";
    window.open(profileURL, "_blank"); // opens LinkedIn profile
  };
  return (
    <section id="contact" className="  overflow-hidden min-h-fit py-12 max-w-7xl mx-auto flex flex-col space-y-12 w-full md:px-44 px-4 items-center justify-center">
      <div>
        <h1 className='text-6xl text-slate-500'>
          Contact Me
        </h1>
      </div>
      {/* <div className='flex gap-4 md:flex-row flex-col justify-between w-full '>
        <div >
          <Label>
            Email
          </Label>
          <Input />
        </div>
        <div>
          <Label>
            Name
          </Label>
          <Input />
        </div>
        </div>
        <Textarea/> */}
      <div className='flex gap-4 gap-y-12 flex-col md:flex-row'>
        <div className='flex items-center gap-4 '>
          <Mail />
          <Button
            onClick={handleEmailClick}>
            Send me an Email
            <div className=' absolute border-2 border-amber-400 w-40 h-12 '></div>
            <div className=' absolute border-2 border-amber-400 h-14 w-36 '></div>
          </Button>
        </div>
        <div className='flex items-center gap-4 '>
          <FaWhatsapp className='' size={30} color='green' />
          <Button
            onClick={openWhatsApp}>
            Send me a Message on Whatsapp
            <div className=' absolute border-2 border-amber-400 w-64 h-12 '></div>
            <div className=' absolute border-2 border-amber-400 h-14 w-60 '></div>
          </Button>
        </div>
        <div className='flex items-center gap-4 '>
          <FaLinkedin className='' size={30} color='navy-blue' />
          <Button
            onClick={openLinkedIn}>
            check me out on linkedin
            <div className=' absolute border-2 border-amber-400 w-52 h-12 '></div>
            <div className=' absolute border-2 border-amber-400 h-14 w-48 '></div>
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Feedback
