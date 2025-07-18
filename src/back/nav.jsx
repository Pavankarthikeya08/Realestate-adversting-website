import React from 'react';
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
