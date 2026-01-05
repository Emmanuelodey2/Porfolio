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
    <section className=" overflow-hidden bg-white min-h-fit md:min-h-screen max-w-7xl mx-auto px-4  w-full pb-12 gap-y-24 flex items-center rounded-xl flex-col justify-center">
      <h1 className='text-7xl text-gray-500'>
        About Me
      </h1>
      <div className='w-full items-center flex pl-8 gap-12 '>
      <div className='w-full hidden md:flex space-x-10 '>
        <div className=' w-fit   hidden md:flex flex-col gap-y-8 items-center justify-center  '>
          <div className='bg-gray-300 rounded-full w-14 aspect-square '></div>
          <div className='border h-full bg-black/60'> </div>
        </div>
        <div className='md:w-[500px] hidden md:block bg-gray-300 aspect-square'>
          <Image
            src="/about.png"
            alt="about image"
            width={500}
            height={500}
            className='w-full h-full object-center object-fill'
          />
        </div>
      </div>
      <div className='text-xl'>
        <p className='mb-12'>
        I’m Emmanuel, a Computer Science undergraduate and full-stack developer with a strong focus on frontend engineering and user-centered design. I build responsive, visually clean web applications using tools like React, Next.js, Tailwind CSS, and Django, and I’m steadily expanding into cloud computing and AI-driven systems. Through internships and personal projects, I’ve learned how to translate ideas into functional products, collaborate with teams, and ship solutions that actually solve problems.
        </p>
        <p>
        Beyond code, I’m deeply interested in building technology with purpose—especially in areas like mental health, student well-being, and social impact. I value clarity, consistency, and growth, both in my work and my life. I’m always learning, always refining my skills, and actively working toward becoming a well-rounded engineer who builds reliable systems and meaningful digital experiences.
        </p>
      </div>
      </div>
      {/* <Button>
        Learn More
        <div className=' absolute border-2 border-amber-400 w-32 h-12 '></div>
        <div className=' absolute border-2 border-amber-400 h-14 w-28 '></div>
      </Button> */}
    </section>
  );
};

export default About;
