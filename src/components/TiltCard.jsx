/* eslint-disable react/prop-types */
import { useRef } from "react";

function TiltCard({
  name = "Jahan",
  title = "Web Developer 👨🏾‍💻",
  date = "18 Mar 2024",
}) {
  const boundingRef = useRef(null);

  return (
    
      <div className="flex flex-col [perspective:800px]">
        <div
          
         className=" group relative grid w-[260px] grid-rows-[200px_120px_40px] rounded-md bg-[#C6BFFA] p-4 text-[#282d86] transition-transform  hover:[transform:rotateX(35deg)_rotateY(15deg)_scale(1.1)] ">
          <figure className="rounded-md mix-blend-multiply bg-[#413678]  " />
          <div className=" mt-6  ">
            <h3 className=" uppercase text-lg font-bold">{name}</h3>
            <h3 className=" capitalize text-md font-medium ">{title}</h3>
          </div>
          <footer className="">
            <p className="flex justify-center rounded-sm border-2 border-current px-1 py-px text-[9px] uppercase">
              {date}
            </p>
          </footer>
          <div className="pointer-events-none absolute inset-0 group-hover:bg-[radial-gradient(at_var(--x)_var(--y),rgba(255,255,255,0.3)_20%,transparent_80%)]" />
      </div>
        </div>
    
  );
}

export default TiltCard;
