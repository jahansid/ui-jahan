
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

function CursorMask() {
  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();
  const size = isHovered ? 200 : 40;
  return (
    <section className="  h-screen bg-zinc-900">
      <motion.div
        animate={{
          WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
          WebkitMaskSize: `${size}px`,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
        className=" mask w-full h-full flex  items-center justify-center font-sans font-bold text-3xl md:text-5xl"
      >
        <p
          onMouseEnter={() => {
            setIsHovered(true);
          }}
          onMouseLeave={() => {
            setIsHovered(false);
          }}
          className={`w-4/5 leading-1 ${
            isHovered ? "text-black" : "text-[#afa18f]"
          }`}
        >
          A visual designer - with skills that haven't been replaced by A.I
          (yet) - making good shit only if the paycheck is equally good.
        </p>
      </motion.div>

      <div className=" w-full h-full flex items-center justify-center font-sans font-bold text-3xl md:text-5xl">
        <p className=" w-4/5 leading-1 text-[#afa18f]">
          I'm a <span className=" text-[#ec4e39]">selectively skilled</span>{" "}
          product designer with strong focus on producing high quality &
          impactful digital experience.
        </p>
      </div>
    </section>
  );
}

const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: null, y: null });

  const updateMousePosition = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return mousePosition;
};

export default CursorMask;

