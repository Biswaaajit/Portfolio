import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import StyleHeading from "../Components/StyleHeading";
import AboutMe from "../ResumeComponents/AboutMe";
import EducationSection from "../ResumeComponents/EducationSection";
import Training from "../ResumeComponents/Training";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Resume() {
  const navigate = useNavigate();
  useGSAP(() => {
    let t1 = gsap.timeline();
    t1.from("#resume .heading p", { y: -50 });
    t1.from("#aboutMe img", {
      scale: 0,
      rotate: 220,
      ease: "expo.inOut",
      duration: 0.7,
    });
    t1.from("#aboutMe .para p", {
      x: 90,
      opacity: 0,
      stagger: 0.2,
    });
  }, []);
  return (
    <div
      className="bg-[#0B0A0A] pt-6 px-3 w-full min-h-[100vh] max-h-fit text-slate-200 pb-14 relative"
      id="resume"
    >
      <button
        className="flex items-center z-[9999999] px-3 rounded-lg py-1 gap-2 border-2 border-amber-700/70 absolute top-7 left-5 md:left-12 opacity-55 hover:opacity-100 hover:border-amber-700"
        onClick={() => navigate(-1)}
      >
        <FaArrowLeft />
        <span className="hidden md:block">Back</span>
      </button>
      <StyleHeading title="Resume" />
      <AboutMe />
      <div className="flex mt-6 gap-12 lg:gap-0 lg:mt-20 flex-col lg:flex-row w-full divide-x-0 lg:divide-x-2 divide-amber-900/70">
        <EducationSection width="w-full lg:w-[45%] px-0 lg:px-[5%]" />
        <Training width="w-full lg:w-[45%] px-0 lg:px-[5%]" />
      </div>
    </div>
  );
}

export default Resume;
