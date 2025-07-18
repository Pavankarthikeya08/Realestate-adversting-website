/*import React from 'react';
import { motion } from "motion/react"
import Projects  from './Projects';
import Contact from './contact';
function Fun() {
  return (
    <div>
    <div className='flex gap-[150px] align-middle  justify-evenly mx-[100px] mt-[15px] absolute top-0 px-[250px]'>
      <div className='text-blue-100 font-light text-3xl'>EState</div>
      <div >
        <nav className='flex gap-[20px]'>
        <a href='#About' className='text-blue-100 font-light text-2xl '>About</a>
        <a href='#Projects' className='text-blue-100 font-light text-2xl'>Projects</a>
        <a href='#Testimonials' className='text-blue-100 font-light text-2xl'>Testimonials</a>
         </nav>
      </div>
      <div className='text-blue-400 font-light text-1.5xl border-[1px] border-amber-50 bg-amber-100 rounded-[30px] p-[6px]'>Sign up</div>
    </div>
    <motion.div className='absolute top-[350px] left-[350px]'
    initial={{opacity:0,y:100}}
    whileInView={{opacity:1,y:0}}
    transition={{duration:0.5}}
    
    >
    <div className='text-7xl text-white font-semibold text-center'>Explore the homes that <br/>fit your dreams</div>
    <nav className='flex justify-center gap-[30px] mt-[30px]'>
      <a href='#Projects' className='border-[2px] border-amber-50 text-amber-50 p-[10px] rounded-2xl' >Projects</a>
      <a href='#Contact' className='border-[2px] border-amber-50 text-amber-50 p-[10px] rounded-2xl bg-blue-500'>Contact us</a>
    </nav>
    </motion.div>
    </div>
  );
} 
export default Fun;
*/


import React from 'react';
import { motion } from "motion/react";
import Projects from './Projects';
import Contact from './contact';

function Fun() {
  return (
    <div>
      {/* Navbar */}
      <div className='flex flex-col md:flex-row items-center justify-between px-4 md:px-10 lg:px-[100px] mt-4 md:mt-[15px] absolute top-0 w-full z-50'>
        <div className='text-blue-100 font-light text-2xl md:text-3xl mb-2 md:mb-0'>EState</div>
        <nav className='flex gap-4 md:gap-6 text-lg md:text-2xl text-blue-100 font-light'>
          <a href='#About'>About</a>
          <a href='#Projects'>Projects</a>
          <a href='#Testimonials'>Testimonials</a>
        </nav>
        <div className='mt-2 md:mt-0 text-blue-400 font-light text-base md:text-xl border border-amber-50 bg-amber-100 rounded-[30px] px-4 py-1'>
          Sign up
        </div>
      </div>

      {/* Hero Section */}
      <motion.div
        className='absolute top-[40%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-full px-4 text-center'
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className='text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-white font-semibold'>
          Explore the homes that <br /> fit your dreams
        </div>
        <nav className='flex flex-wrap justify-center gap-4 md:gap-[30px] mt-6'>
          <a href='#Projects' className='border-2 border-amber-50 text-amber-50 px-4 py-2 rounded-2xl'>
            Projects
          </a>
          <a href='#Contact' className='border-2 border-amber-50 text-amber-50 px-4 py-2 rounded-2xl bg-blue-500'>
            Contact us
          </a>
        </nav>
      </motion.div>
    </div>
  );
}

export default Fun;
