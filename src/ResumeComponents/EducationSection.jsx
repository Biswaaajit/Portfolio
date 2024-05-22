/* eslint-disable react/prop-types */
import { FaUserGraduate } from "react-icons/fa";
import EducationInfo from "./EducationInfo";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
function EducationSection({ width }) {
  useGSAP(() => {
    let t1 = gsap.timeline({
      scrollTrigger: {
        trigger: "#edu",
        scroller: "body",
        start: "top 80%",
        end: "top 25%",
        scrub: 4,
      },
    });
    t1.from("#edu .head", {
      x: 90,
      opacity: 0,
      stagger: 0.2,
    });
    t1.from("#edu .info p,#edu .info ul li", {
      x: 90,
      opacity: 0,
      stagger: 0.1,
    });
  }, []);
  return (
    <div className={`${width} overflow-hidden`} id="edu">
      <div className="flex items-center gap-4 py-6 mb-4  justify-start mt-6  lg:justify-center">
        <FaUserGraduate className="text-amber-700 text-3xl head" />
        <p className="text-amber-700 text-3xl font-semibold tracking-wide head">
          Education
        </p>
      </div>
      <div className="space-y-12 px-4 md:px-12 lg:px-0 info">
        <EducationInfo
          course="Bachelor of Technology in Electrical Engineering"
          date="June 2019 - June 2023"
          institute="Techno India University"
        >
          <li>
            Developed strong analytical and problem-solving skills through
            coursework and practical projects.
          </li>
          <li>
            Discovered a passion for front-end development, initiating
            self-learning and hands-on projects in web development alongside my
            core studies.
          </li>
        </EducationInfo>
        <EducationInfo
          date="April 2017 - April 2019"
          course="Higher Secondary Education in Computer Science"
          institute="Calcutta Public School"
        >
          <li>
            Delved into the principles of computer science, including
            programming fundamentals and software development methodologies.
          </li>
          <li>
            Acquired foundational knowledge in computer science, laying the
            groundwork for further studies and professional growth.
          </li>
        </EducationInfo>
      </div>
    </div>
  );
}

export default EducationSection;
