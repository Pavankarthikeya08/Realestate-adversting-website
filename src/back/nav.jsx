import React from "react";
import { motion } from "motion/react";

function Fun() {
  return (
    <header className="relative bg-blue-900 min-h-screen flex flex-col">
      {/* Navbar */}
      <div className="flex items-center justify-between px-6 md:px-20 py-4">
        <div className="text-blue-100 font-light text-3xl">EState</div>
        <nav>
          <ul className="flex gap-6 text-blue-100 font-light text-lg md:text-2xl">
            <li>
              <a href="#About" className="hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="#Projects" className="hover:underline">
                Projects
              </a>
            </li>
            <li>
              <a href="#Testimonials" className="hover:underline">
                Testimonials
              </a>
            </li>
          </ul>
        </nav>
        <a
          href="#SignUp"
          className="text-blue-400 border border-amber-50 bg-amber-100 rounded-3xl px-4 py-1 text-base md:text-lg font-light hover:bg-amber-200 transition"
        >
          Sign up
        </a>
      </div>

      {/* Hero Section */}
      <motion.div
        className="flex-grow flex flex-col justify-center items-center text-center px-4 md:px-0"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-white font-semibold text-4xl md:text-6xl max-w-3xl leading-snug">
          Explore the homes that <br /> fit your dreams
        </h1>
        <nav className="flex justify-center gap-6 mt-8">
          <a
            href="#Projects"
            className="border-2 border-amber-50 text-amber-50 px-6 py-3 rounded-2xl hover:bg-amber-50 hover:text-blue-900 transition"
          >
            Projects
          </a>
          <a
            href="#Contact"
            className="border-2 border-amber-50 bg-blue-500 text-amber-50 px-6 py-3 rounded-2xl hover:bg-blue-600 transition"
          >
            Contact us
          </a>
        </nav>
      </motion.div>
    </header>
  );
}

export default Fun;
