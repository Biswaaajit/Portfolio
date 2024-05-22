import { VscDebugBreakpointLogUnverified } from "react-icons/vsc";

/* eslint-disable react/prop-types */
function EducationInfo({ children, date, institute, course }) {
  return (
    <div className="space-y-3">
      <p className="font-bold text-lg flex items-center relative">
        <span className="absolute -left-6">
          <VscDebugBreakpointLogUnverified className="text-amber-700" />
        </span>
        <span>{course}</span>
      </p>
      <p className="font-medium">{institute}</p>
      <p>{date}</p>
      <ul className="list-disc list-outside ml-6 space-y-3">{children}</ul>
    </div>
  );
}

export default EducationInfo;
