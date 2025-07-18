import React from 'react'
import headerImg from "../assets/header_img.png";

function Back() {
  return (
    <img src={headerImg} alt="Header" className='w-full h-full object-cover top-0 left-0 z-[-1] opacity-100 transition-opacity duration-300 ease-in' />
  );
}
export default Back