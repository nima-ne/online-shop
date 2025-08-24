"use client";
import { ComponentPropsWithoutRef } from "react";

function Button({ className, type = "button", onClick, children }: ComponentPropsWithoutRef<"button">) {
  return (
    <button className={className} type={type} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
