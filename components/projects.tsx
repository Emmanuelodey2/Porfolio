import React from 'react';
import Image from 'next/image'
import { Button } from './ui/button';

const Project = () => {
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
    <section id='projects' className=" overflow-hidden bg-white min-h-fit  max-w-7xl mx-auto px-4 md:px-24 py-24 w-full gap-24 flex items-center rounded-xl flex-col  justify-center">
      {/* Left content column */}
      <div>
        <h1 className='text-7xl text-slate-500'>
          Projects
        </h1>
      </div>
      <div className='w-full md:flex h-full items-center justify-center flex-row gap-44'>
        <div className='md:w-1/2 flex-col flex items-start justify-center gap-12'>
          <div className='flex flex-col gap-4 text-gray-600 font-semibold'>
          <h1 className='text-2xl'>
              TIC Club Website Project
            </h1>
            <p>
            I designed and developed a responsive TIC website that provides users with a seamless experience across devices. The site features a clean layout, intuitive navigation, and interactive components, allowing users to easily access information and services. Built with modern web technologies, the platform emphasizes usability, accessibility, and visual appeal, showcasing practical design and frontend development skills.      

            </p>
          </div>
          <div className='flex-row max-md:w-full flex gap-4 items-center justify-center'>
            {languages.map((items, index) => (
              <div key={index} className='flex items-center justify-center'>
                <div className='w-14 bg-gray-300 overflow-hidden aspect-square flex justify-center items-center rounded-full'>
                  <Image
                    src={`/logos/${index + 5}.png`}
                    alt={items.name}
                    width={1900}
                    height={19000}
                    className='object-fill object-center' />
                </div>
              </div>
            ))}

          </div>
        </div>

        <div className='hidden md:block w-2/5 h-2/3 aspect-square my-6 bg-gray-200'>
          <Image
            src="/project1.png"
            alt=''
            width={1900}
            height={19000}
            className='object-fill w-full h-full aspect-square object-center' />
          <div className=' border-[1px] border-[#f9cf75] bottom-[99%] relative -left-2  w-full h-full'>

          </div>
        </div>
      </div>

      <div className='w-full md:flex h-full items-center justify-center flex-row-reverse gap-44'>
      <div className='md:w-1/2 flex-col flex items-start justify-center gap-12'>
          <div className='flex flex-col gap-4 text-gray-600 font-semibold'>
            <h1 className='text-2xl'>
              Menu Tech
            </h1>
            <p>
            I developed the MenuTech website, a modern platform for restaurants to showcase their menus and streamline customer interactions. The site features an intuitive interface, responsive design, and visually engaging components, highlighting my skills in UI/UX design and frontend development while providing a seamless user experience.

                  </p>
          </div>
          <div className='flex-row max-md:w-full flex gap-4 items-center justify-center'>
            {languages.map((items, index) => (
              <div key={index} className='flex items-center justify-center'>
                <div className='w-14 bg-gray-300 overflow-hidden aspect-square flex justify-center items-center rounded-full'>
                  <Image
                    src={`/logos/${index + 4}.png`}
                    alt={items.name}
                    width={1900}
                    height={19000}
                    className='object-fill object-center' />
                </div>
              </div>
            ))}

          </div>
        </div>

        <div className='hidden md:block w-2/5 h-2/3 aspect-square my-6 bg-gray-200'>
          <Image
            src="/project2.png"
            alt=''
            width={1900}
            height={19000}
            className='object-fill w-full h-full aspect-square object-center' />
          <div className='  border-[1px] border-[#f9cf75] bottom-[99%] relative -left-2  w-full h-full'>

          </div>
        </div>
        <div className='absolute hidden xl:block'>
          <div className='relative w-[200px] h-1/5 right-[220px] top-28  aspect-square my-6 bg-gray-300'>
            <Image
              src="/project22.png"
              alt=''
              width={1900}
              height={19000}
              className='object-fill w-full h-full aspect-square object-center' />
            <div className='  border-[1px] border-[#f9cf75] bottom-[99%] relative -left-2  w-full h-full'>

            </div>
          </div>
        </div>
      </div>
      {/* <Button className='text-xl px-12 py-6 '>
        Check out more Projects
        <div className=' absolute border-2 border-amber-400 w-[330px] h-14 '></div>
        <div className=' absolute border-2 border-amber-400 h-16 w-[320px]'></div>
        </Button> */}
    </section>
  );
};

export default Project;
