import React from 'react';
import img1 from '../assets/brand_img.png'
import { motion } from "framer-motion";

function About() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -200 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mt-12 text-center" id="About">
        <div className="text-3xl md:text-4xl font-bold">
          About <span className="font-normal">our Brand</span>
        </div>
        <div className="mt-2 text-sm md:text-base text-gray-600">
          Passionate About Properties, Dedicated to<br />Your Vision
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-10 mt-12 mb-32 px-4">
        <img
          src={img1}
          className="w-full max-w-xs md:max-w-md"
          alt="Brand"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-6 md:mt-0 text-center">
          <div>
            <p className="text-xl md:text-2xl font-semibold">10+<br /><span className="text-base font-normal">Years of Excellence</span></p>
          </div>
          <div>
            <p className="text-xl md:text-2xl font-semibold">12+<br /><span className="text-base font-normal">Projects completed</span></p>
          </div>
          <div>
            <p className="text-xl md:text-2xl font-semibold">20+<br /><span className="text-base font-normal">Mn.Sq.Ft. Delivered</span></p>
          </div>
          <div>
            <p className="text-xl md:text-2xl font-semibold">25+<br /><span className="text-base font-normal">Ongoing Projects</span></p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
