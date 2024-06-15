import React from "react";
import { cva } from "class-variance-authority";
import { cx } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

// Define the classname utility using cva
const buttonVariants = cva(
  "w-full text-lg rounded-lg transition-all duration-300",
  {
    variants: {
      variant: {
        google:
          "bg-white py-2 flex items-center justify-center gap-4 hover:opacity-90",
        default:
          "bg-amber-300 text-black py-2 px-4 font-semibold hover:opacity-90",
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

function Button({ children, className, onClick, variant, disabled, ...props }) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={twMerge(cx(buttonVariants({ variant, disabled })), className)}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
