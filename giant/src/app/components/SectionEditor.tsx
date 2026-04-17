"use client";

import React from "react";
import { Section, SECTION_COLORS } from "../types";
import Win98Button from "./Win98Button";

interface SectionEditorProps {
  sections: Section[];
  onSectionsChange: (sections: Section[]) => void;
}

export default function SectionEditor({
  sections,
  onSectionsChange,
}: SectionEditorProps) {
  const addSection = () => {
    if (sections.length >= 20) return;
    const nextColor = SECTION_COLORS[sections.length % SECTION_COLORS.length];
    const newSection: Section = {
      id: Date.now().toString(),
      label: `항목 ${sections.length + 1}`,
      color: nextColor,
    };
    onSectionsChange([...sections, newSection]);
  };

  const removeSection = (id: string) => {
    if (sections.length <= 2) return;
    onSectionsChange(sections.filter((s) => s.id !== id));
  };

  const updateLabel = (id: string, label: string) => {
    onSectionsChange(
      sections.map((s) => (s.id === id ? { ...s, label } : s))
    );
  };

  const updateColor = (id: string, color: string) => {
    onSectionsChange(
      sections.map((s) => (s.id === id ? { ...s, color } : s))
    );
  };

  return (
    <div className="flex flex-col gap-2 h-full">
      {/* 카운터 상태바 */}
      <div className="win98-statusbar-panel text-xs" style={{ fontSize: "11px" }}>
        섹션: {sections.length} / 20
      </div>

      {/* 리스트박스 */}
      <div
        className="win98-listbox flex-1"
        style={{ minHeight: "280px", maxHeight: "340px" }}
      >
        {sections.map((section, index) => (
          <div
            key={section.id}
            className="flex items-center gap-1 px-1 py-1 hover:bg-[#000080] hover:text-white group"
            style={{ borderBottom: "1px solid #F0F0F0" }}
          >
            {/* 색상 선택 */}
            <div className="relative flex-shrink-0">
              <div
                style={{
                  width: "16px",
                  height: "16px",
                  backgroundColor: section.color,
                  border: "1px solid #808080",
                  cursor: "pointer",
                  flexShrink: 0,
                }}
                title="색상 변경"
              />
              <input
                type="color"
                value={section.color}
                onChange={(e) => updateColor(section.id, e.target.value)}
                className="absolute inset-0 opacity-0 cursor-pointer"
                style={{ width: "16px", height: "16px" }}
                title="색상 선택"
              />
            </div>

            {/* 번호 */}
            <span className="text-xs w-4 text-center flex-shrink-0 group-hover:text-white" style={{ fontSize: "10px", color: "#808080" }}>
              {index + 1}
            </span>

            {/* 라벨 입력 */}
            <input
              type="text"
              value={section.label}
              onChange={(e) => updateLabel(section.id, e.target.value)}
              className="win98-input flex-1"
              style={{ minWidth: 0, fontSize: "11px" }}
              maxLength={20}
            />

            {/* 삭제 버튼 */}
            <button
              onClick={() => removeSection(section.id)}
              disabled={sections.length <= 2}
              className="win98-button"
              style={{
                minWidth: "auto",
                padding: "1px 6px",
                fontSize: "10px",
                flexShrink: 0,
                opacity: sections.length <= 2 ? 0.4 : 1,
                cursor: sections.length <= 2 ? "not-allowed" : "pointer",
              }}
            >
              Del
            </button>
          </div>
        ))}
      </div>

      {/* 하단 버튼 */}
      <div className="flex gap-2">
        <Win98Button
          onClick={addSection}
          disabled={sections.length >= 20}
          className="flex-1"
        >
          + 섹션 추가
        </Win98Button>
      </div>

      {/* 도움말 */}
      <div
        className="win98-statusbar-panel"
        style={{ fontSize: "10px", color: "#808080" }}
      >
        최소 2개 · 최대 20개 · 색상 클릭으로 변경
      </div>
    </div>
  );
}
