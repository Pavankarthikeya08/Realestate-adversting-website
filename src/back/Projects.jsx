import React from 'react';
import { projectsData } from '../assets/assets.js';
import { motion } from 'motion/react';

function Projects() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 200 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mt-12 text-center px-4" id="Projects">
        <h2 className="text-3xl md:text-4xl font-bold">Projects <span className="font-normal">Completed</span></h2>
        <p className="mt-2 text-gray-600 text-sm md:text-base">
          Crafting Spaces, Building Legacies — <br className="md:hidden" /> Explore Our Portfolio
        </p>

        {/* Scroll Container */}
        <div className="overflow-x-auto scroll-smooth snap-x snap-mandatory flex gap-6 px-4 py-10 w-full max-w-full md:max-w-screen-lg mx-auto">
          {projectsData.map((ele, idx) => (
            <div
              key={idx}
              className="snap-center min-w-[250px] max-w-[300px] bg-white shadow-md rounded-lg overflow-hidden flex-shrink-0"
            >
              <img
                src={ele.image}
                alt={ele.title}
                className="w-full h-[180px] object-cover"
              />
              <div className="p-4">
                <p className="text-gray-800 text-sm md:text-base">
                  <span className="font-semibold">{ele.title}</span><br />
                  {ele.price} | {ele.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default Projects;
