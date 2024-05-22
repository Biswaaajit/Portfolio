import { FiFacebook, FiGithub, FiLinkedin } from "react-icons/fi";
import Icon from "../Components/Icon";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Intro() {
  useGSAP(() => {
    var t1 = gsap.timeline();
    t1.from("#intro p", {
      y: 90,
      opacity: 0,
      stagger: 0.3,
    });
    t1.from("#intro .icon a", {
      x: 45,
      opacity: 0,
      stagger: 0.2,
    });
  }, []);
  return (
    <div
      className="text-slate-200 grow flex flex-col justify-center items-center gap-6 md:gap-8 text-center"
      id="intro"
    >
      <p className="text-[8vw] md:text-6xl font-semibold">
        Hi, I am
        <span className="text-amber-700"> Biswajeet Barik</span>
      </p>
      <p className="text-[4vw] px-0 md:text-2xl md:px-40">
        I am a frontend web developer. While my background is in electrical
        engineering, my fascination with technology and user interfaces has led
        me to embark on a journey into the world of web development.
      </p>
      <div className="flex gap-4 md:gap-10 icon">
        <Icon to="https://github.com/Biswaaajit">
          <FiGithub className="text-2xl md:text-3xl text-amber-700 " />
        </Icon>
        <Icon to="www.linkedin.com/in/biswajeet-barik-5a573521a">
          <FiLinkedin className="text-2xl md:text-3xl text-amber-700 " />
        </Icon>
        <Icon to="https://www.facebook.com/biswajeet.biswa.73?mibextid=ZbWKwL">
          <FiFacebook className="text-2xl md:text-3xl text-amber-700" />
        </Icon>
      </div>
    </div>
  );
}

export default Intro;
