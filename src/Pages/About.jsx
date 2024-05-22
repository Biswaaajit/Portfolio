import { useGSAP } from "@gsap/react";
import Links from "../Components/Links";
import gsap from "gsap";

function About() {
  useGSAP(() => {
    gsap.from("#about a p", {
      y: 200,
      stagger: 0.25,
    });
  }, []);
  return (
    <div
      className="grow text-slate-200 flex flex-col items-center justify-center gap-6"
      id="about"
    >
      <Links to="/home/info">About</Links>
      <Links to="/home/project">Projects</Links>
      <Links to="/resume">Resume</Links>
      <Links to="https://github.com/Biswaaajit/Portfolio.git">Portfolio</Links>
      <Links to="/home/skills">Skills</Links>
    </div>
  );
}

export default About;
