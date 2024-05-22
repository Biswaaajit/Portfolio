import { useGSAP } from "@gsap/react";
import Work from "../Components/Work";
import gsap from "gsap";

function Project() {
  useGSAP(() => {
    gsap.from("#project .work", {
      x: 100,
      opacity: 0,
      stagger: 0.5,
      duration: 1,
    });
  }, []);
  return (
    <div
      className="grow w-full overflow-hidden text-slate-200 flex flex-wrap gap-2 justify-around  mt-12  md:mt-8 py-0 md:py-12"
      id="project"
    >
      <Work
        name="Soujourn"
        img="/soujourn.PNG"
        live="https://biswajeetsoujourn.netlify.app/"
        git="https://github.com/Biswaaajit/Soujourn.git"
      />
    </div>
  );
}

export default Project;
