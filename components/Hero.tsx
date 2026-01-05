/* eslint-disable react/jsx-no-undef */
import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <section id='home' className=" bg-white overflow-hidden  min-h-fit md:min-h-screen max-w-7xl mx-auto md:px-12 px-4 md:gap-20 gap-4 py-12 flex items-center rounded-b-xl md:flex-row flex-col-reverse justify-center">
      {/* Left content column */}
      <div className="  w-full  overflow-hidden md:space-y-6">
      {/* Placeholder for heading */}
        <div className="h-14 text-gray-900 text-5xl font-bold font-[Poppins] md:text-6xl w-full" >
          <h1 className=" text-gray-900 text-5xl font-bold font-[Poppins] md:text-6xl">
          Hi There 
          </h1>
          </div> 
        <div className=" w-full flex flex-col gap-4 mb-12" > 
        <h1 className=" text-gray-900 text-5xl  md:text-6xl">
        I&apos;m Emmanuel Odey
       
          </h1>
          <h1 className=" text-gray-900 text-5xl font-bold font-[Poppins] md:text-7xl">
          I&apos;m a FullStack Developer 
  
          </h1>
         
         
          </div>{/* Placeholder for subtext */}
      </div>

      {/* Right circle element */}
      <div className=" w-full  lg:w-1/3 aspect-square flex justify-center">
        <div className=" overflow-hidden w-[400px] h-[400px] aspect-square rounded-full bg-gray-300">
        <Image
          src="/dp.png"
          alt="Profile Picture"
          width={400}
          height={400}
          className=" w-full rounded-full object-cover object-center"/>
          </div>
      </div>
    </section>
  );
};

export default Hero;
