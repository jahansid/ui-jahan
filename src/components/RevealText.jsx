import { motion } from "framer-motion";

export function RevealText() {
  return (
    <section className=" bg-violet-400 h-screen text-black grid place-content-center py-24 px-8 font-sans gap-2">
      <FlipText href="#">Twitter</FlipText>
      <FlipText href="#">Facebook</FlipText>
      <FlipText href="#">Instagram</FlipText>
      <FlipText href="#">Behance</FlipText>
    </section>
  );
}
const DURATION = 0.3;
const STAGGER = 0.025;
const FlipText = ({ children, href }) => {
  return (
    <motion.a
      className="relative block overflow-hidden text-4xl  md:text-7xl font-bold whitespace-nowrap uppercase "
      style={{ lineHeight: 0.87 }}
      href={href}
      initial="initial"
      whileHover="hovered"
    >
      <div>
        {children.split("").map((letter, index) => (
          <motion.span
            className="inline-block"
            variants={{
              initial: { y: 0 },
              hovered: { y: "-100%" },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * index,
            }}
            key={index}
          >
            {letter}
          </motion.span>
        ))}
      </div>
      <div className="absolute inset-0">
        {children.split("").map((letter, index) => (
          <motion.span
            className="inline-block"
            variants={{
              initial: { y: "100%" },
              hovered: { y: 0 },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * index,
            }}
            key={index}
          >
            {letter}
          </motion.span>
        ))}
      </div>
    </motion.a>
  );
};

export default RevealText;
