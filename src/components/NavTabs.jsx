import { motion } from "framer-motion";
import { useState } from "react";

function NavTabs() {
  const tabs = [
    { id: 1, label: "Home" },
    { id: 2, label: "Portfolio" },
    { id: 3, label: "Contact Us" },
    { id: 4, label: "Services" },
    { id: 5, label: "Work" },
  ];
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  return (
    <div className="grid place-content-center min-h-screen bg-zinc-900 ">
      <div className=" border-2 border-white rounded-2xl px-4 py-5">
        <div className="flex space-x-4 ">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={` ${
                activeTab === tab.id ? "" : "hover:text-white/50"
              } relative  rounded-full capitalize px-3 py-1.5 text-sm text-white transition font-semibold outline-2 outline-sky-400 focus-visible:outline `}
            >
              <span className=" relative z-10 mix-blend-exclusion">
                {tab.label}
              </span>

              {activeTab === tab.id && (
                <motion.div
                  layoutId="active-pill"
                  style={{ borderRadius: 9999 }}
                  transition={{ type: "spring", duration: 0.6 }}
                  className="absolute inset-0 bg-white"
                />
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default NavTabs;
