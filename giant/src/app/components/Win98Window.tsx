"use client";

import React from "react";

interface Win98WindowProps {
  title: string;
  icon?: string;
  children: React.ReactNode;
  className?: string;
  onClose?: () => void;
}

export default function Win98Window({
  title,
  icon = "🖥️",
  children,
  className = "",
  onClose,
}: Win98WindowProps) {
  return (
    <div className={`win98-window ${className}`}>
      {/* 타이틀바 */}
      <div className="win98-titlebar">
        <div className="win98-titlebar-title">
          <span>{icon}</span>
          <span>{title}</span>
        </div>
        <div className="flex gap-1">
          <button className="win98-button-small" tabIndex={-1}>
            _
          </button>
          <button className="win98-button-small" tabIndex={-1}>
            □
          </button>
          <button
            className="win98-button-small"
            onClick={onClose}
            tabIndex={-1}
          >
            ✕
          </button>
        </div>
      </div>
      {/* 본문 */}
      <div className="p-2">{children}</div>
    </div>
  );
}
