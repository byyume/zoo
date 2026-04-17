"use client";

import { useEffect, useRef } from "react";
import { Section } from "../types";

interface RouletteWheelProps {
  sections: Section[];
  rotation: number;
}

export default function RouletteWheel({
  sections,
  rotation,
}: RouletteWheelProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const size = canvas.width;
    const cx = size / 2;
    const cy = size / 2;
    const radius = cx - 12;

    ctx.clearRect(0, 0, size, size);

    // 외곽 원 (raised 스타일)
    ctx.beginPath();
    ctx.arc(cx, cy, radius + 10, 0, 2 * Math.PI);
    ctx.fillStyle = "#C0C0C0";
    ctx.fill();

    // 외곽 테두리 (Win98 sunken)
    ctx.beginPath();
    ctx.arc(cx, cy, radius + 10, 0, 2 * Math.PI);
    ctx.strokeStyle = "#808080";
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(cx, cy, radius + 10, Math.PI * 1.25, Math.PI * 0.25);
    ctx.strokeStyle = "#FFFFFF";
    ctx.lineWidth = 2;
    ctx.stroke();

    const sliceAngle = (2 * Math.PI) / sections.length;

    sections.forEach((section, i) => {
      const startAngle = rotation + i * sliceAngle;
      const endAngle = startAngle + sliceAngle;

      // 섹션 채우기
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.arc(cx, cy, radius, startAngle, endAngle);
      ctx.closePath();
      ctx.fillStyle = section.color;
      ctx.fill();

      // 경계선
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.arc(cx, cy, radius, startAngle, endAngle);
      ctx.closePath();
      ctx.strokeStyle = "rgba(0,0,0,0.4)";
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // 텍스트
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(startAngle + sliceAngle / 2);

      const textRadius = radius * 0.68;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      // 텍스트 크기 조정 (섹션 수에 따라)
      const fontSize = sections.length <= 8 ? 11 : sections.length <= 12 ? 9 : 7;
      ctx.font = `bold ${fontSize}px "MS Sans Serif", Arial, sans-serif`;

      // 텍스트 그림자 (가독성)
      ctx.shadowColor = "rgba(0,0,0,0.5)";
      ctx.shadowBlur = 2;
      ctx.fillStyle = "#000000";
      ctx.fillText(section.label, textRadius, 0);
      ctx.shadowBlur = 0;

      ctx.restore();
    });

    // 중앙 원 (Win98 raised 버튼 스타일)
    ctx.beginPath();
    ctx.arc(cx, cy, 22, 0, 2 * Math.PI);
    ctx.fillStyle = "#C0C0C0";
    ctx.fill();
    ctx.strokeStyle = "#FFFFFF";
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(cx, cy, 22, Math.PI * 0.25, Math.PI * 1.25);
    ctx.strokeStyle = "#808080";
    ctx.lineWidth = 2;
    ctx.stroke();

    // 중앙 점
    ctx.beginPath();
    ctx.arc(cx, cy, 6, 0, 2 * Math.PI);
    ctx.fillStyle = "#404040";
    ctx.fill();
  }, [sections, rotation]);

  return (
    <div className="relative inline-block">
      {/* 포인터 (12시 방향) */}
      <div
        className="absolute z-10"
        style={{
          top: "-4px",
          left: "50%",
          transform: "translateX(-50%)",
          width: 0,
          height: 0,
          borderLeft: "12px solid transparent",
          borderRight: "12px solid transparent",
          borderTop: "28px solid #FF0000",
          filter: "drop-shadow(1px 1px 0px #800000)",
        }}
      />
      {/* 포인터 하이라이트 */}
      <div
        className="absolute z-10"
        style={{
          top: "-4px",
          left: "50%",
          transform: "translateX(-50%) translateX(-4px)",
          width: 0,
          height: 0,
          borderLeft: "4px solid transparent",
          borderRight: "4px solid transparent",
          borderTop: "12px solid rgba(255,150,150,0.6)",
        }}
      />
      <canvas
        ref={canvasRef}
        width={380}
        height={380}
        style={{ display: "block" }}
      />
    </div>
  );
}
