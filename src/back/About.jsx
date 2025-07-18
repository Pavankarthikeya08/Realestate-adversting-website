import React from 'react';
import img1 from '../assets/brand_img.png'
import { motion } from "motion/react"
function About() {
  return (
    <motion.div initial={{ opacity: 0, x: -200 }}
     whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}>
    <div className='mt-[50px] text-center' id="About">
    <div className='text-4xl'><b>About</b>     our Brand</div>
    <div>Passinate  About Properties, Dedicated to<br/>Your Vision</div>
    </div>
    <div  className='flex justify-center gap-[50px] mt-[50px] mb-[200px]'>
      <img src={img1} className='w-[500px]'></img>
      <div className='grid grid-cols-2 gap-x-[100px] grid-rows-2 gap-y-[50px]  justify-center h-[200px] mt-[50px]'>
        <div>
          <p className='text-2xl'> <b>10+</b><br/>Years of Excellence</p>
        </div>
        <div>
          <p className='text-2xl'> <b>12+</b><br/>Projects completed</p>
        </div>
        <div>
          <p className='text-2xl'> <b>20+</b><br/>Mn.Sq.Ft.Delivered</p>
        </div>
        <div>
          <p className='text-2xl'> <b>25+</b><br/>Ongoing Projects</p>
        </div>
      </div>
    </div>
    </motion.div>
  );
}

export default About;
