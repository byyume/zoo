"use client";

import React from "react";
import { Section } from "../types";
import Win98Button from "./Win98Button";

interface ResultDisplayProps {
  result: Section;
  onClose: () => void;
}

export default function ResultDisplay({ result, onClose }: ResultDisplayProps) {
  return (
    <div className="win98-overlay" onClick={onClose}>
      <div
        className="win98-window"
        style={{ width: "320px" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* 타이틀바 */}
        <div className="win98-titlebar">
          <div className="win98-titlebar-title">
            <span>🎉</span>
            <span>룰렛 결과</span>
          </div>
          <div className="flex gap-1">
            <button className="win98-button-small" onClick={onClose} tabIndex={-1}>
              ✕
            </button>
          </div>
        </div>

        {/* 본문 */}
        <div className="p-4">
          {/* 메시지박스 레이아웃 */}
          <div className="flex items-start gap-4 mb-4">
            {/* 아이콘 영역 */}
            <div
              className="flex-shrink-0 flex items-center justify-center"
              style={{
                width: "48px",
                height: "48px",
                fontSize: "32px",
                lineHeight: "1",
              }}
            >
              🏆
            </div>

            {/* 메시지 영역 */}
            <div className="flex-1">
              <div
                style={{
                  fontFamily: '"MS Sans Serif", Tahoma, Arial, sans-serif',
                  fontSize: "13px",
                  fontWeight: "bold",
                  marginBottom: "8px",
                }}
              >
                🎊 당첨되었습니다!
              </div>
              <div
                className="win98-sunken"
                style={{
                  padding: "8px 12px",
                  background: "#FFFFFF",
                  border: "1px solid #808080",
                  boxShadow:
                    "inset 1px 1px 0px #808080, inset -1px -1px 0px #DFDFDF",
                  fontSize: "16px",
                  fontWeight: "bold",
                  fontFamily: '"MS Sans Serif", Tahoma, Arial, sans-serif',
                  textAlign: "center",
                  color: "#000080",
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    width: "12px",
                    height: "12px",
                    backgroundColor: result.color,
                    border: "1px solid #808080",
                    marginRight: "8px",
                    verticalAlign: "middle",
                  }}
                />
                {result.label}
              </div>
            </div>
          </div>

          {/* 구분선 */}
          <hr className="win98-divider" />

          {/* 버튼 영역 */}
          <div className="flex justify-center pt-2">
            <Win98Button onClick={onClose} className="min-w-[80px]">
              확인
            </Win98Button>
          </div>
        </div>
      </div>
    </div>
  );
}
