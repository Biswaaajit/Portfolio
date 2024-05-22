import { VscGithub } from "react-icons/vsc";

/* eslint-disable react/prop-types */
function Work({ git, live, img }) {
  return (
    <div className="bg-amber-900/15 backdrop-blur-[10px] rounded-xl p-5 work w-[65%] md:w-[40%] lg:w-[30%]  h-fit work">
      <img src={img} />
      <div className="flex justify-between mt-4 px-1 sm:px-6">
        <a
          href={git}
          className="flex gap-[6px] py-1.5 md:py-1 px-2 md:px-4 items-center border-2 border-amber-700/70 overflow-x-hidden rounded-xl w-fit transition-all duration-300"
        >
          <VscGithub className="grow text-lg sm:text-xl shrink-0" />
          <p className="text-xs sm:text-sm sm:text-md lg:text-lg">GitHub</p>
        </a>
        <a
          href={live}
          className="flex items-center gap-[6px] md:px-4 self-center  py-1.5 lg:py-1 px-3 border-2 border-amber-700/70 rounded-xl"
        >
          <div className="w-[8px] h-[8px] bg-green-600 rounded-full"></div>
          <p className="text-xs sm:text-sm sm:text-md lg:text-lg">Live</p>
        </a>
      </div>
    </div>
  );
}

export default Work;
