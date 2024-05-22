import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [icon, setIcon] = useState(false);
  const navigate = useNavigate();
  function handleIcon() {
    if (icon) {
      setIcon(false);
      navigate("/home/intro");
    }
    if (!icon) {
      setIcon(true);
      navigate("/home/about");
    }
  }
  useGSAP(() => {
    if (icon === true) {
      gsap.to("#bar1", {
        rotate: 45,
      });
      gsap.to("#bar2", {
        rotate: -45,
      });
    }
    if (!icon) {
      gsap.to("#bar1", {
        rotate: 180,
      });
      gsap.to("#bar2", {
        rotate: 180,
      });
    }
  }, [icon]);
  return (
    <div className="w-full h-fit flex justify-between items-center px-2  md:px-16 xl:px-24 py-2  self-start">
      <img src="/logo2.png" className="w-[5rem] md:w-[6rem]" />
      <div
        className="text-slate-100 flex  cursor-pointer items-center gap-6  p-4 md:p-3"
        onClick={handleIcon}
      >
        <p className="hidden text-lg xl:text-xl md:block font-semibold tracking-wider">
          Menu
        </p>
        <div className={icon ? "space-y-0 relative" : "space-y-2"}>
          <div
            className="w-6 h-[2.5px] rounded-full bg-slate-100 "
            id="bar1"
          ></div>
          <div
            className={`w-6 h-[2.5px] rounded-full bg-slate-100 ${
              icon && "absolute top-0"
            }`}
            id="bar2"
          ></div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
