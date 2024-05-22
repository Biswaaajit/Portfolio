import { FaRegStar, FaStar } from "react-icons/fa6";

/* eslint-disable react/prop-types */
function Skill({ skillName, rating }) {
  const no = +rating;
  return (
    <div className="flex items-center  w-[80%] md:w-[50%] lg:w-[40%] xl:w-[30%] mx-auto justify-between  eachSkill">
      <p className=" text-[4vw] sm:text-xl  tracking-wide skill">{skillName}</p>
      <div className="flex items-center text-amber-700 space-x-1">
        {Array.from({ length: 5 }, (_, i) =>
          i < no ? (
            <FaStar key={i} className="text-[4vw] sm:text-xl" />
          ) : (
            <FaRegStar key={i} className="text-[4vw] sm:text-xl" />
          )
        )}
      </div>
    </div>
  );
}

export default Skill;
