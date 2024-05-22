/* eslint-disable react/prop-types */
function StyleHeading({ width, title }) {
  return (
    <div className="w-full overflow-hidden heading ">
      <p className="text-center text-amber-700 font-bold text-4xl md:text-5xl">
        {title}
      </p>
      <div
        className={`${
          width ? width : "w-[45%] md:w-[20%]"
        } h-[3px] bg-stone-700 rounded-full mx-auto mt-2 md:mt-3 transition-all`}
      >
        <div className="w-[40%] h-full bg-amber-700 mx-auto"></div>
      </div>
    </div>
  );
}

export default StyleHeading;
