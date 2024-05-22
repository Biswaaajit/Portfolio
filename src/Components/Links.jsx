/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

function Links({ to, children }) {
  const style =
    "text-6xl uppercase h-fit  font-light tracking-tight md:text-7xl overflow-y-hidden aboutLink px-2 relative hover:text-amber-700 hover:font-normal";
  return (
    <NavLink className={style} to={to}>
      <p>{children}</p>
    </NavLink>
  );
}

export default Links;
