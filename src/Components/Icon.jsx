/* eslint-disable react/prop-types */
function Icon({ children, to }) {
  return (
    <a
      href={to}
      className="w-fit p-2 md:p-3 cursor-pointer  border-2 border-amber-700 rounded-full hover:border-amber-500"
    >
      {children}
    </a>
  );
}

export default Icon;
