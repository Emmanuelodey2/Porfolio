import React from 'react';
import Image from 'next/image'
import { Button } from './ui/button';

const About = () => {
  const languages = [
    {
      name: "javascript",
      path: "/assets/00_earthmap1k.jpg",
    },
    {
      name: "javascript",
      path: "/assets/00_earthmap1k.jpg",
    },
    {
      name: "javascript",
      path: "/assets/00_earthmap1k.jpg",
    },
    {
      name: "javascript",
      path: "/assets/00_earthmap1k.jpg",
    },
    {
      name: "javascript",
      path: "/assets/00_earthmap1k.jpg",
    },
  ]
  return (
    <section className=" overflow-hidden bg-white min-h-screen max-w-7xl mx-auto px-4 border w-full py-12 gap-y-24 flex items-center rounded-xl flex-col justify-center">
      <div className='w-full md:flex space-x-10 '>
        <div className=' w-fit   hidden md:flex flex-col gap-y-8 items-center justify-center  '>
          <div className='bg-gray-300 rounded-full w-14 aspect-square '></div>
          <div className='border h-full bg-black/60'> </div>
        </div>
        <div className='md:w-[700px] bg-gray-300 aspect-square'>
          <h1>

          </h1>
          <p>

          </p>
        </div>
      </div>
      <Button>
        Learn More
        <div className=' absolute border-2 border-amber-400 w-32 h-12 '></div>
        <div className=' absolute border-2 border-amber-400 h-14 w-28 '></div>
      </Button>
    </section>
  );
};

export default About;
