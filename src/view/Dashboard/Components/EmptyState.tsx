import React from "react";

interface Props {
  title?: string;
  btnText?: string;
  btnAction?: VoidFunction;
  icon?: React.ReactNode;
}

const EmptyState = ({ icon, title, btnAction }: Props) => {
  return (
    <div className="bg-white text-[#1D2433] p-20  flex items-center flex-col gap-2 justify-center">
      {icon} <p className="">No Response yet</p>
      <button
        onClick={btnAction}
        className="bg-[#0D6EFD] p-2 text-white font-poppins rounded px-8"
      >
        {title}
      </button>
    </div>
  );
};

export default EmptyState;
