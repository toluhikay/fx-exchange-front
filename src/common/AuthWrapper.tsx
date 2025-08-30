import React from "react";

const AuthWrapper = ({ children, h1, subHeader, icon }: { children: React.ReactNode; h1: string; subHeader: string; icon?: string }) => {
  return (
    <main className="w-full min-h-screen flex flex-col justify-center items-center px-[1.5rem] bg-gradient-to-br from-purple-950 via-pink-900 to-pink-950">
      <div className="bg-gray-100 text-[purple] w-[36.75rem] max-w-[98%]  shadow-2xs rounded-[.625rem] p-[3%]">
        <div className="w-full flex flex-col items-center gap-y-1 text-center">
          <p>INTERSTELLAR FX-EXCHANGE</p>
          <div>
            <h1 className="text-[1.75rem] font-medium">{h1}</h1>
            {icon && icon}
            <p className="text-sm">{subHeader}</p>
          </div>
        </div>
        {children}
      </div>
    </main>
  );
};

export default AuthWrapper;
