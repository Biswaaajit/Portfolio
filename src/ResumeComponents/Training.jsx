/* eslint-disable react/prop-types */
import { LuClipboardList } from "react-icons/lu";
import EducationInfo from "./EducationInfo";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
function Training({ width }) {
  useGSAP(() => {
    let t1 = gsap.timeline({
      scrollTrigger: {
        trigger: "#training",
        scroller: "body",
        start: "top 80%",
        end: "top 16%",
        scrub: 4,
      },
    });
    t1.from("#training .head", {
      x: 90,
      opacity: 0,
      stagger: 0.2,
    });
    t1.from("#training .info p,#training .info ul li", {
      x: 90,
      opacity: 0,
      stagger: 0.1,
    });
  }, []);
  return (
    <div className={width} id="training">
      <div className="text-amber-700 mb-4 text-3xl flex items-center gap-4 py-6 justify-start lg:justify-center mt-6">
        <LuClipboardList className="head" />
        <p className="font-semibold tracking-wide head">Training</p>
      </div>
      <div className="space-y-8 px-4 md:px-12 lg:px-0 info overflow-hidden">
        <EducationInfo
          course="Ultimate Web Designer & Web Developer Course"
          institute="Udemy"
          date="August 2022 - January 2023"
        >
          <li>
            Completed an extensive training program covering the full spectrum
            of web design and development.
          </li>
          <li>
            Mastered essential skills in HTML, CSS, JavaScript, and various
            front-end frameworks.
          </li>
          <li>
            Gained practical experience through hands-on projects and real-world
            applications, solidifying proficiency in creating dynamic and
            user-friendly websites.
          </li>
          <li>
            <a
              className="text-sky-500/70"
              href="https://www.udemy.com/certificate/UC-612b96e8-b9de-4aa7-bcac-edd665657ee8/"
            >
              Certificate Link
            </a>
          </li>
        </EducationInfo>
        <EducationInfo
          course="Programming With Python"
          date="Aug 2021 - Sep 2021"
          institute="Internshala"
        >
          <li>
            The training consisted of Introduction to Python, Using Variables in
            Python, Basics of Programming in Python, Principles of
            Object-oriented Programming, Connecting to SQLite Database,
            Developing a GUI with PyQT, Application of Python in Various
            Disciplines, and The Final Project modules.
          </li>
          <li>
            I scored 90% in the final assessment and was a top performer in the
            training.
          </li>
          <li>
            <a
              href="https://trainings.internshala.com/verify-certificate"
              className="text-sky-500/70"
            >
              Certificate Link
            </a>
          </li>
          <li>Certificate No - 013BB2C4-74C5-92DA-5C29-B6CE734962F9</li>
        </EducationInfo>
      </div>
    </div>
  );
}

export default Training;
