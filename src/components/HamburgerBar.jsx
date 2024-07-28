import { motion, MotionConfig } from 'framer-motion';  
import { useState } from 'react';  

function HamburgerBar() {
  return (
<div className=" grid h-screen place-content-center bg-gradient-to-br from-violet-800 to-violet-400">  
    <AnimatedHamburgerButton />  
  </div>   )
}

const BARVARIANTS = {
    topbar: {
      open: {
        rotate: ["0deg", "0deg", "45deg"],
        top: ["35%", "50%", "50%"],
      },
      closed: {
        rotate: ["45deg", "0deg", "0deg"],
        top: ["50%", "50%", "35%"],
      },
    },
    middlebar: {
      open: {
        rotate: ["0deg", "0deg", "-45deg"],
      },
      closed: {
        rotate: ["-45deg", "0deg", "0deg"],
      },
    },
    bottombar: {
      open: {
        rotate: ["0deg", "0deg", "45deg"],
        bottom: ["35%", "50%", "50%"],
        left: "50%",
      },
      closed: {
        rotate: ["45deg", "0deg", "0deg"],
        bottom: ["50%", "50%", "35%"],
        left: "calc(50% + 10px)",
      },
    },
  };

const AnimatedHamburgerButton = () => {
    const [active, setActive] = useState(false);
    return (
      <MotionConfig
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
      >
        <motion.button
          initial={false}
          animate={active ? "open" : "closed"}
          onClick={() => setActive((prev) => !prev)}
          className="relative size-24 rounded-full bg-white/15 transition-colors hover:bg-white/25"
        >
          <motion.span
            variants={BARVARIANTS.topbar}
            className="absolute h-1 w-10 bg-white"
            style={{ y: "-50%", left: "50%", x: "-50%", top: "35%" }}
          />
          <motion.span
            variants={BARVARIANTS.middlebar}
            className="absolute h-1 w-10 bg-white"
            style={{ left: "50%", x: "-50%", top: "50%", y: "-50%" }}
          />
          <motion.span
            variants={BARVARIANTS.bottombar}
            className="absolute h-1 w-5 bg-white"
            style={{
              x: "-50%",
              y: "50%",
              bottom: "35%",
              left: "calc(50% + 10px)",
            }}
          />
        </motion.button>
      </MotionConfig>
    );
  };
  
 



export default HamburgerBar;
