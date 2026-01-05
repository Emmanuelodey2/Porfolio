import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    const nav = [
        {
            id: 1,
            link: "Home",
            path: "#home"
        },
        {
            id: 3,
            link: "Projects",
            path: "#projects"
        },
        {
          id: 4,
          link: "Skills",
          path: "#skills"
      },
        {
            id: 5,
            link: "Contacts",
            path: "#contact"
        },
        
       
    ];
    return (
        <div className="overflow-hidden font-[Inria-Serif] text-2xl">
          <ul className="flex text-black  space-x-2 md:space-x-8">
            {nav.map((items, index) => (
              <Link
                key={index}
                href={items.path}
                className="relative text-black group  hover:text-blue-900 transition-all duration-500"
              >
                                <span className="absolute w-0 h-[2px] group-hover:w-full bottom-0 bg-blue-900 transition-all duration-500">
                                </span>

                {items.link}
                {/* Underline effect */}
              </Link>
            ))}
          </ul>
        </div>
      );
    }      

export default Navbar