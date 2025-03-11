import {
  Icon24Hours,
  Icon360View,
  IconChevronDown,
  IconMessage,
  IconPlus,
  IconUserShield,
} from "@tabler/icons-react";

import { AnimatePresence, easeInOut, motion } from "framer-motion";
import { useState } from "react";

const CardContent = () => {
  const [open, setOpen] = useState(true);
  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.98,
              filter: "blur(10px)",
            }}
            animate={{
              opacity: 1,
              scale: 1,
              filter: "blur(0px)",
            }}
            exit={{
              opacity: 0,
              scale: 0.98,
              filter: "blur(10px)",
            }}
            transition={{
                    duration: 0.3,
                    ease: easeInOut,
                  }}
            className="bg-gray-100 h-screen w-full grid place-content-center font-sans"
          >
            {/* card component starts here */}
            <div className=" w-96 min-h-[32rem] h-[32rem] flex flex-col gap-3  p-6 bg-white rounded-2xl shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]">
              <h3 className=" font-bold text-base text-neutral-600">
                Organization UI Components
              </h3>
              <p className=" text-sm font-medium text-neutral-400">
                Clerk&apos;s UI components add turn-key simplicity to complex
                Organization management tasks.
              </p>
              <div className=" flex justify-center items-center">
                <button
                  onClick={() => setOpen(false)}
                  className=" flex items-center justify-center gap-2 text-[12px] mt-8 px-2 py-1 font-semibold text-neutral-600 border border-gray-200 shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] rounded-lg"
                >
                  <IconUserShield className=" size-4" />
                  Clerk
                  <IconChevronDown className=" size-3 mt-1 text-neutral-400" />
                </button>
              </div>
              <div className=" relative flex-1 bg-gray-50  mt-3 rounded-xl border-2 border-dashed border-gray-200">
                <motion.div
                  initial={{
                    opacity: 0,
                    scale: 0.98,
                    filter: "blur(10px)",
                  }}
                  whileHover={{
                    opacity: 1,
                    scale: 1.05,
                    filter: "blur(0px)",
                  }}
                  transition={{
                    duration: 0.3,
                    ease: easeInOut,
                  }}
                  className=" absolute inset-0 h-full w-full border border-gray-200 bg-white rounded-xl divide-y divide-gray-200"
                >
                  <div className=" flex gap-4 p-4 items-center">
                    <div className="flex items-center justify-center size-8 flex-shrink-0 rounded-md border border-gray-200 bg-white shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]">
                      <IconMessage className=" size-5  text-neutral-600 "></IconMessage>{" "}
                    </div>
                    <div className=" flex flex-col gap-1">
                      <h4 className=" font-bold text-sm text-neutral-600">
                        Organization UI Components
                      </h4>
                      <p className=" text-sm font-medium text-neutral-400">
                        Clerk&apos;s UI components
                      </p>
                    </div>
                  </div>
                  <div className=" flex gap-4 p-4 items-center">
                    <div className="flex items-center justify-center size-8 flex-shrink-0 rounded-md border border-gray-200 bg-white shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]">
                      <Icon24Hours className=" size-5  text-neutral-600 "></Icon24Hours>{" "}
                    </div>
                    <div className=" flex flex-col gap-1">
                      <h4 className=" font-bold text-sm text-neutral-600">
                        24 hours turnaround
                      </h4>
                      <p className=" text-sm font-medium text-neutral-400">
                        Superfast delivery at warp speed
                      </p>
                    </div>
                  </div>
                  <div className=" flex gap-4 p-4 items-center">
                    <div className="flex items-center justify-center size-8 flex-shrink-0 rounded-md border border-gray-200 bg-white shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]">
                      <Icon360View className=" size-5  text-neutral-600 "></Icon360View>{" "}
                    </div>
                    <div className=" flex flex-col gap-1">
                      <h4 className=" font-bold text-sm text-neutral-600">
                        360 days all around
                      </h4>
                      <p className=" text-sm font-medium text-neutral-400">
                        we&apos;re here to help you 24/7
                      </p>
                    </div>
                  </div>
                  <div className=" flex gap-4 p-4 items-center justify-center">
                    <div className="flex items-center justify-center size-8 flex-shrink-0 rounded-md border border-gray-200 bg-white shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]">
                      <IconPlus className=" size-5  text-neutral-600 "></IconPlus>{" "}
                    </div>

                    <p className=" text-sm font-medium text-neutral-600">
                      Create Project
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
            {/* card component ends here */}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default CardContent;

// shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]
