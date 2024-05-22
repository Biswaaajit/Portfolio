import { useGSAP } from "@gsap/react";
import Skill from "../Components/Skill";
import StyleHeading from "../Components/StyleHeading";
import gsap from "gsap";

function Skills() {
  useGSAP(() => {
    let t1 = gsap.timeline();
    t1.from("#skill .heading p", {
      y: 200,
    });
    t1.from("#skill .para", {
      y: 100,
      opacity: 0,
    });
    t1.from("#skill div .eachSkill", {
      x: 50,
      opacity: 0,
      stagger: 0.2,
    });
  }, []);
  return (
    <div className="text-slate-200 space-y-8 mt-8" id="skill">
      <StyleHeading title="Skills" width="w-[30%] md:w-[25%] xl:w-[15%]" />
      <p className="text-center text-xl sm:text-2xl para">
        All the skills that I have used in my front-end projects.
      </p>
      <div className="space-y-3">
        <Skill skillName="JavaScript" rating="4" />
        <Skill skillName="ReactJS" rating="5" />
        <Skill skillName="Tailwind CSS" rating="5" />
        <Skill skillName="Redux" rating="5" />
        <Skill skillName="React-Router" rating="4" />
        <Skill skillName="HTML & CSS" rating="5" />
        <Skill skillName="Bootstrap" rating="4" />
        <Skill skillName="C++" rating="4" />
      </div>
    </div>
  );
}

export default Skills;
