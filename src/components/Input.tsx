import React from "react";
import { cva } from "class-variance-authority";
import { cx } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

// Define the classname utility using cva
const inputVariants = cva(
  "block w-full p-3 rounded-lg transition-all duration-300",
  {
    variants: {
      variant: {
        default: "bg-white border-gray-300 outline-none",
        error: "border border-2  border-red-500 outline-none",
        success: "border border-green-500 outline-none",
      },
      disabled: {
        true: "opacity-50 cursor-not-allowed",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

function Input({ value, className, onChange, variant, disabled, ...props }) {
  return (
    <input
      value={value}
      onChange={onChange}
      disabled={disabled}
      className={twMerge(cx(inputVariants({ variant, disabled })), className)}
      {...props}
    />
  );
}

export default Input;
