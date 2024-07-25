/* eslint-disable react/prop-types */


import { useRef, useState } from "react";  
import { motion } from "framer-motion";  

const tabs = ["Home", "Pricing", "Features", "Docs", "Blog"];

export const AnimatedTabSlider = () => (  
  <div className=" bg-neutral-400 py-20 grid place-content-center h-screen">  
    <SlideTabs />  
  </div>  
);  

const SlideTabs = () => {
    const [position, setPosition] = useState({
      left: 0,
      width: 0,
      opacity: 0,
    });
  
    return (
      <ul
        onMouseLeave={() => {
          setPosition((pv) => ({
            ...pv,
            opacity: 0,
          }));
        }}
        className="relative mx-auto flex w-fit rounded-full border-2 border-black bg-white p-1"
      >
     {tabs.map((tab) => (  
        <Tab key={tab} setPosition={setPosition}>  
          {tab}  
        </Tab>  
      ))}  
  
        <Cursor position={position} />
      </ul>
    );
  };
  
  const Tab = ({ children, setPosition }) => {
    const ref = useRef(null);
  
    return (
      <li
        ref={ref}
        onMouseEnter={() => {
          if (!ref?.current) return;
  
          const { width } = ref.current.getBoundingClientRect();
  
          setPosition({
            left: ref.current.offsetLeft,
            width,
            opacity: 1,
          });
        }}
        className="relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase text-white mix-blend-difference md:px-5 md:py-3 md:text-base"
      >
        {children}
      </li>
    );
  };
  
  const Cursor = ({ position }) => {
    return (
      <motion.li
        animate={{
          ...position,
        }}
        transition={{ type: "spring", stiffness: 100, mass: 0.4 }}
        className="absolute z-0 h-7 rounded-full bg-black md:h-12"
      />
    );
  };