// import React from "react";

// const navbar = () => {
//   return (
//     <div className="flex justify-center relative">
//       <img
//         src={"/paper-header.png"}
//         className="w-[80%] xl:h-50 lg:h-45 md:h-40 sm:h-35 xs:h-30 absolute -z-10"
//       />
//       <div className="text-5xl text-primary flex gap-4 items-center justify-items-center h-50">
//         <a href="#base">Home</a>
//         <a href="#about">About</a>
//         <a href="#skill">Skill</a>
//         <a href="#contact">Contact</a>
//       </div>
//     </div>
//   );
// };

// export default navbar;

import React from "react";
import Image from "next/image";
const navbar = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <div className=" relative w-[80%] h-[20vh]">
        <Image alt="scroll" fill src={"/paper-header.png"} className="-translate-y-2"/>
        <div className="absolute inset-0 text-[3vw] text-primary flex gap-4 items-center justify-center ">
          <a href="#base">Home</a>
          <a href="#about">About</a>
          <a href="#skill">Skill</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </div>
  );
};

export default navbar;
