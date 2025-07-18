import React from 'react'
import {projectsData }from '../assets/assets.js'
import { motion } from "motion/react"
function Projects() {
  return (
    <motion.div
    initial={{opacity:0,y:200}}
    whileInView={{opacity:1,y:0}}
    transition={{duration:0.5}}
    >
    <div className='mt-[50px] text-center' id="Projects">
    <div className='text-4xl'><b>Projects</b> Completed</div>
    <div>Crafting Spaces, Building Legacies—Explore <br/>Our Portfolio</div>
   <div className="overflow-x-auto scroll-smooth snap-x snap-mandatory flex gap-[20px] px-[20px] py-[40px] w-[800px] mx-[300px] ">
      {projectsData.map((ele, idx) => (
        <div
          key={idx}
          className="snap-center min-w-[250px] bg-white shadow-lg rounded-lg overflow-hidden"
        >
          <img
            src={ele.image}
            alt="project"
            className="w-full h-[150px] object-cover"
          />
          <p className="p-4 text-sm text-gray-800">
            <span className="font-semibold">{ele.title}</span><br />
            {ele.price} | {ele.location}
          </p>
        </div>
      ))}
    </div>
    </div>
    </motion.div>
  )
}

export default Projects

