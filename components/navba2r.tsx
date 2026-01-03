import React from 'react'
import { Button } from './ui/button'

const navbar = () => {
  return (
    <div className='w-full h-12 fixed top-0 left-0 bg-amber-700 flex justify-between items-center px-20 py-8'>
        <div>
        My Portfolio
        </div>
        <div className='flex items-center gap-12  '>
            <ul className='flex flex-row gap-4'>
                <li>
                    Home
                </li>
                <li>
                    About
                </li>
                <li>
                    Projects
                </li>
                <li>
                    Contact me
                </li>
            </ul>
            <div className='flex gap-4 '>
                <Button>
                    Hire me 
                </Button>
                <Button>
                    Hire me 
                </Button>
            </div>
        </div>
    </div>
  )
}

export default navbar