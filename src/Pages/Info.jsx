import { useGSAP } from "@gsap/react";
import StyleHeading from "../Components/StyleHeading";
import gsap from "gsap";

function Info() {
  useGSAP(() => {
    let t1 = gsap.timeline();
    t1.from("#info .heading p", {
      y: 200,
    });
    t1.from("#info .para p", {
      x: 90,
      opacity: 0,
      stagger: 0.5,
    });
  }, []);
  return (
    <div
      className="grow w-full h-full overflow-hidden  text-slate-200 space-y-7 md:space-y-10 py-6 md:pt-12"
      id="info"
    >
      <StyleHeading title="About Me" />
      <div className="italic text-base sm:text-[1.05rem] md:text-xl space-y-6 w-[90%] md:w-[70%] xl:w-[55%] mx-auto para transition-all ">
        <p>
          <span className="text-xl font-semibold">Hello</span>, my name is{" "}
          <span>Biswajeet Barik.</span> I recently graduated with a
          Bachelor&apos;s degree in Electrical Engineering from Techno India
          University. Although my academic focus was on electrical systems and
          circuits, I&apos;ve always been drawn to the creative aspects of
          technology, particularly in designing user-friendly interfaces.
        </p>
        <p>
          <span className="pl-16">I</span> have choosen Front-end development as
          my career because I am captivated by the idea of building interactive
          and visually appealing websites that not only look great but also
          provide seamless user experiences. As a fresher in the field, my
          primary goal is to immerse myself in front-end development, expand my
          skill set, and contribute to impactful projects. I&apos;m eager to
          learn from experienced developers, tackle new challenges, and
          ultimately carve out a fulfilling career in this exciting industry.
        </p>
      </div>
    </div>
  );
}

export default Info;
