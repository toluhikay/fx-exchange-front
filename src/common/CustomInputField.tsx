// CustomInput.tsx
import React, { useState } from "react";
import { Controller, type Control } from "react-hook-form";
import { Eye, EyeOff } from "lucide-react";

interface Props {
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>;
  label: string;
  placeholder: string;
  type?: "text" | "password"; // added type prop
}

const CustomInputField: React.FC<Props> = ({ name, control, label, placeholder, type = "text" }) => {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === "password";

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <div className="flex flex-col">
          <label className="mb-1 text-sm">{label}</label>
          <div className="relative">
            <input {...field} type={isPassword ? (showPassword ? "text" : "password") : type} className="w-full border border-[#D0D5DD] px-3 py-2 placeholder:text-sm rounded pr-10" placeholder={placeholder} />
            {isPassword && (
              <button type="button" onClick={togglePasswordVisibility} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            )}
          </div>
          {fieldState.error && <span className="text-red-500 text-sm mt-1">{fieldState.error.message}</span>}
        </div>
      )}
    />
  );
};

export default CustomInputField;
