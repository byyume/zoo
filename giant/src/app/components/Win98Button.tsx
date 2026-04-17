"use client";

import React from "react";

interface Win98ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  disabled?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset";
  variant?: "default" | "small";
}

export default function Win98Button({
  onClick,
  children,
  disabled = false,
  className = "",
  type = "button",
  variant = "default",
}: Win98ButtonProps) {
  if (variant === "small") {
    return (
      <button
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={`win98-button-small ${disabled ? "opacity-50 cursor-not-allowed" : ""} ${className}`}
      >
        {children}
      </button>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`win98-button ${disabled ? "opacity-50 cursor-not-allowed" : ""} ${className}`}
    >
      {children}
    </button>
  );
}
