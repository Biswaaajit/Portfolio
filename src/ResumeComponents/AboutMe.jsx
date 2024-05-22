import ResumeInfo from "../Components/ResumeInfo";

function AboutMe() {
  return (
    <div
      className="mt-8 w-full  flex flex-col md:flex-row justify-between gap-3 transition-allpy-4 xl:py-6"
      id="aboutMe"
    >
      <div className="w-[50%] md:w-[30%] lg:w-[20%] mx-auto rounded-full shadow-[0px_0px_45px_-18px_#B45309]  self-center transition-all img">
        <img
          src="me1.jpeg"
          className="grayscale brightness-75 w-fit rounded-full"
        />
      </div>
      <div className="space-y-5 md:space-y-3 xl:space-y-7 py-8 w-full md:w-[60%] para overflow-hidden transition-all">
        <p className="text-amber-700 text-4xl  font-medium">Biswajeet Barik</p>
        <p className="text-2xl">Front-End Developer</p>
        <p className="text-base xl:text-lg">
          Hi there! I&apos;m a seasoned Front-end developer with a passion for
          crafting dynamic and user-friendly web experiences. Proficient in
          leveraging React&apos;s power to build scalable, interactive
          applications, I thrive on turning complex ideas into elegant
          solutions.
        </p>
        <div className="space-y-2">
          <ResumeInfo name="Birthday" content="December 08, 1999" />
          <ResumeInfo name="Phone" content="+91 7595989249" />
          <ResumeInfo name="Email" content="biswajeetbarik3936@gmail.com" />
          <ResumeInfo
            name="Address"
            content="Sector-III Salt Lake, West Bengal"
          />
          <ResumeInfo name="Nationality" content="India" />
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
