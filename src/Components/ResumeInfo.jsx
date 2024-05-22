/* eslint-disable react/prop-types */
function ResumeInfo({ name, content }) {
  return (
    <div className="w-full flex text-base xl:text-lg">
      <p className="w-[25%] font-medium">{name}</p>
      <p>: {content}</p>
    </div>
  );
}

export default ResumeInfo;
