// CustomSelect.tsx
import React from "react";
import { Controller, type Control } from "react-hook-form";

interface Option {
  label: string;
  value: string;
}

interface Props {
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>;
  label: string;
  options: Option[];
}

const CustomSelect: React.FC<Props> = ({ name, control, label, options }) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <div className="flex flex-col">
          <label className="mb-1">{label}</label>
          <select {...field} className="border px-3 py-2 rounded bg-pink-950">
            <option className="" value="">
              Select...
            </option>
            {options.map((opt) => (
              <option className="" key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          {fieldState.error && <span className="text-red-500 text-sm">{fieldState.error.message}</span>}
        </div>
      )}
    />
  );
};

export default CustomSelect;
