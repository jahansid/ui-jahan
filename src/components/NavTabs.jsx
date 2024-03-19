import { useState } from "react";

function NavTabs() {
  const tabs = [
    { id: 1, label: "Home" },
    { id: 2, label: "Portfolio" },
    { id: 3, label: "Contact Us" },
    { id: 4, label: "Services" },
    { id: 5, label: "Business" },
  ];
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  return (
    <div className="grid place-content-center min-h-screen bg-indigo-950 text-white">
      <div className="">
        <div className="flex space-x-4 capitalize">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={` ${
                activeTab === tab.id ? "bg-violet-600" : "hover:opacity-80"
              }  rounded-full px-3 py-1.5 text-sm font-semibold outline-2 outline-sky-400 focus-visible:outline `}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default NavTabs;
