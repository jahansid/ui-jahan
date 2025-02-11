import { easeInOut, motion } from "framer-motion";

const ButtonGlow = () => {
  return (
    <div
      className=" [perspective-1000px] [preserve-3d] h-screen grid place-content-center"
      style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(245, 245, 245, 0.9) 1px, transparent 0)`,
        backgroundSize: "8px 8px",
        backgroundRepeat: "repeat",
      }}
    >
      <motion.button
        whileHover={{
          rotateX: 25,
          rotateY: 10,
          y: -8,
          boxShadow: "0px 20px 50px rgba(232, 121, 249, 0.7)",
        }}
        style={{
          translateZ: 100,
        }}
        whileTap={{
          y: 0,
        }}
        transition={{
          duration: 0.3,
          ease: easeInOut,
        }}
        aria-label="Subscribe"
        className=" group relative font-medium text-neutral-400 bg-black px-12 py-4 rounded-lg shadow-[inset_0_2px_4px_0_rgba(255,255,255,0.1)] "
      >
        <span className="group-hover:text-fuchsia-400 transition-colors duration-300">
          {" "}
          Subscribe
        </span>

        <span className="absolute inset-x-0 bottom-px bg-gradient-to-r from-transparent via-fuchsia-400 to-transparent h-px w-3/4 mx-auto "></span>
        <span className=" absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 inset-x-0 bottom-px bg-gradient-to-r from-transparent via-fuchsia-400 to-transparent h-[4px] w-full mx-auto blur-sm "></span>
      </motion.button>
    </div>
  );
};

export default ButtonGlow;
