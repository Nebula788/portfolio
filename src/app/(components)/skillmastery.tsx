// const skillmastery = () => {
//   return (
//     <div
//       id="skill"
//       className="h-screen flex flex-col justify-center items-center snap-center"
//     >
//       <div className="text-5xl relative w-fit ">
//         {/* <img
//           src={"./pixelborder.png"}
//           className="w-full absolute -z-10 top-0 h-full"
//         /> */}

//         <div className="p-12 text-primary">
//           <div className="flex items-center ">
//             <img src={"./htmllogo.png"} width={"50"} />
//             Hypertext Markup Language
//           </div>
//           <div className="flex items-center">
//             <img src={"./csslogo.png"} width={"50"} />
//             Cascading Style Sheets
//           </div>
//           <div className="flex items-center">
//             <img src={"./jslogo.png"} width={"50"} />
//             Javascript
//           </div>
//           <div className="flex items-center">
//             <img src={"./reactlogo.png"} width={"50"} />
//             React
//           </div>
//           <div className="flex items-center">
//             <img src={"./tslogo.png"} width={"35"} />
//             Typescript
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default skillmastery;
const skills = [
  {
    name: "HTML",
    label: "HyperText Markup Language",
    icon: "/htmllogo.png",
    size: 48,
  },
  {
    name: "CSS",
    label: "Cascading Style Sheets",
    icon: "/csslogo.png",
    size: 48,
  },
  { name: "JavaScript", label: "JavaScript", icon: "/jslogo.png", size: 48 },
  { name: "React", label: "React", icon: "/reactlogo.png", size: 48 },
  { name: "TypeScript", label: "TypeScript", icon: "/tslogo.png", size: 36 },
];

const SkillMastery = () => {
  return (
    <section
      id="skill"
      className="h-screen flex items-center justify-center snap-center px-4"
    >
      <div className="relative">
       
        {/* 
        <img
          src="/pixelborder.png"
          className="absolute inset-0 w-full h-full -z-10 pointer-events-none"
        /> 
        */}

        <div className=" backdrop-blur-sm border-4 border-primary rounded-xl p-8 md:p-10 shadow-lg">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-5 text-center">
            Skill Mastery
          </h2>

          <ul className="space-y-4">
            {skills.map((skill) => (
              <li
                key={skill.name}
                className="flex items-center gap-4 text-xl md:text-2xl text-primary
                           transition-transform duration-200 hover:translate-x-2"
              >
                <img
                  src={skill.icon}
                  alt={skill.name}
                  width={skill.size}
                  height={skill.size}
                  className="pixelated"
                />
                <span className="tracking-wide">{skill.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SkillMastery;
