import React from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const GeneralButton = ({ text, onclick, loading, disabled, type = "submit" }: { text: string; onclick?: (e?: any) => void; loaderComponent?: React.ReactNode; loading?: boolean; disabled?: boolean; type?: "submit" | "button" | undefined }) => {
  return (
    <div className="w-auto cursor-pointer">
      <button type={type} className={`${disabled ? "bg-gray-500 text-gray-800" : "bg-gradient-to-br from-purple-950 via-pink-900 to-pink-950 text-white"} flex items-center justify-center  rounded-[8px] py-[10px] px-[24px] w-full font-semibold`} onClick={onclick} disabled={disabled}>
        {loading ? <span>loading...</span> : text}
      </button>
    </div>
  );
};

export default GeneralButton;
