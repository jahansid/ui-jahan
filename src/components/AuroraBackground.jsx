import {
  animate,
  motion,
  useMotionTemplate,
  useMotionValue,
} from "framer-motion";
import { useEffect } from "react";

function AuroraBackground() {
  const COLORS = ["#4B0082", "#FF91A4", "#008080", "#0F9D7D", "#007FFF"];

  const color = useMotionValue(COLORS[0]);
  const backgroundImage = useMotionTemplate`radial-gradient(120% 120% at 50% 0%, #020617 50%, ${color})`;
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

  useEffect(() => {
    animate(color, COLORS, {
      ease: "easeInOut",
      repeat: Infinity,
      duration: 10,
      repeatType: "mirror",
    });
  }, []);

  return (
    <motion.div
      style={{
        backgroundImage,
      }}
      className=" grid min-h-screen bg-gray-900 place-content-center px-4 py-24 text-white overflow-hidden"
    >
      <div className=" flex flex-col items-center">
        <p className=" max-w-3xl bg-gradient-to-br from-white to-gray-400 bg-clip-text text-center text-2xl font-medium leading-tight text-transparent sm:text-5xl sm:leading-tight md:text-5xl md:leading-tight mb-6">
          Inspired from designers, Made for you
        </p>
        <motion.button
          style={{
            border,
            boxShadow,
          }}
          whileHover={{
            scale: 1.015,
          }}
          whileTap={{
            scale: 0.985,
          }}
          className=" w-fit items-center gap-1.5 rounded-full bg-gray-950/10 px-4 py-2 text-gray-50 transition-colors hover:bg-gray-950/50"
        >
          Hover to glow
        </motion.button>
      </div>
    </motion.div>
  );
}

export default AuroraBackground;

// Twilight Purple: #4B0082
// Aurora Blue: #007FFF
// Northern Lights Green: #00FF00
// Dusk Pink: #FF91A4
// Celestial Teal: #008080
// Lunar Silver: #C0C0C0
// Starry Night Indigo: #4B0082
