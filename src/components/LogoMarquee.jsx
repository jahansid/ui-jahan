import { motion } from "framer-motion";
const LogoMarquee = () => {
  const logoSvg = [
    "/13.svg",
    "/14.svg",
    "/15.svg",
    "/16.svg",
    "/17.svg",
    "/18.svg",
    "/19.svg",
    "/20.svg",
  ];
  return (
    <section className=" bg-black py-20 md:py-24">
      <div className=" container mx-auto text-white">
        <div className=" flex items-center gap-6">
          <div className=" flex-1 md:flex-none">
            <h2 className=" font-semibold leading-none font-sans">
              Trusted by top innovative team.
            </h2>
          </div>
          <div className=" flex flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)] ">
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              transition={{
                repeat: Infinity,
                duration: 30,
                ease: "linear",
              }}
              className="flex flex-shrink-0 "
            >
              {logoSvg.map((image, index) => (
                <img
                  src={image}
                  key={index}
                  className="h-6 w-auto flex-none pr-20"
                />
              ))}
            </motion.div>
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              transition={{
                repeat: Infinity,
                duration: 30,
                ease: "linear",
              }}
              className="flex flex-shrink-0 "
            >
              {logoSvg.map((image, index) => (
                <img
                  src={image}
                  key={index}
                  className="h-6 w-auto flex-none pr-20"
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoMarquee;
