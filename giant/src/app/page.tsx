"use client";

import { useState, useRef, useCallback } from "react";
import Win98Window from "./components/Win98Window";
import RouletteWheel from "./components/RouletteWheel";
import SectionEditor from "./components/SectionEditor";
import ResultDisplay from "./components/ResultDisplay";
import { Section, DEFAULT_SECTIONS } from "./types";

function easeOutQuart(t: number): number {
  return 1 - Math.pow(1 - t, 4);
}

function calculateWinner(finalRotation: number, sections: Section[]): Section {
  const sliceAngle = (2 * Math.PI) / sections.length;
  // 포인터는 12시 방향(-π/2), 회전을 역으로 계산
  const normalized =
    (((-finalRotation - Math.PI / 2) % (2 * Math.PI)) + 2 * Math.PI) %
    (2 * Math.PI);
  const idx = Math.floor(normalized / sliceAngle) % sections.length;
  return sections[idx];
}

export default function Home() {
  const [sections, setSections] = useState<Section[]>(DEFAULT_SECTIONS);
  const [rotation, setRotation] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);
  const [result, setResult] = useState<Section | null>(null);
  const [spinCount, setSpinCount] = useState(0);

  const animationRef = useRef<number>(0);
  const startTimeRef = useRef<number>(0);
  const startRotationRef = useRef<number>(0);
  const targetRotationRef = useRef<number>(0);
  const durationRef = useRef<number>(0);
  const currentRotationRef = useRef<number>(0);

  const spin = useCallback(() => {
    if (isSpinning) return;

    const minSpins = 5;
    const extraSpins = Math.random() * 5;
    const randomOffset = Math.random() * (2 * Math.PI);
    const totalRotation = (minSpins + extraSpins) * 2 * Math.PI + randomOffset;

    const duration = 4000 + Math.random() * 2000;
    startTimeRef.current = performance.now();
    startRotationRef.current = currentRotationRef.current;
    targetRotationRef.current = currentRotationRef.current + totalRotation;
    durationRef.current = duration;

    setIsSpinning(true);
    setResult(null);

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTimeRef.current;
      const progress = Math.min(elapsed / durationRef.current, 1);
      const easedProgress = easeOutQuart(progress);

      const newRotation =
        startRotationRef.current +
        (targetRotationRef.current - startRotationRef.current) * easedProgress;

      currentRotationRef.current = newRotation;
      setRotation(newRotation);

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      } else {
        setIsSpinning(false);
        const winner = calculateWinner(newRotation, sections);
        setResult(winner);
        setSpinCount((c) => c + 1);
      }
    };

    animationRef.current = requestAnimationFrame(animate);
  }, [isSpinning, sections]);

  const handleSectionsChange = useCallback((newSections: Section[]) => {
    setSections(newSections);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 gap-4">
      {/* 상단 타이틀 */}
      <div
        style={{
          fontFamily: '"Press Start 2P", monospace',
          fontSize: "14px",
          color: "#FFFFFF",
          textShadow: "2px 2px 0px #000080, -1px -1px 0px #000000",
          letterSpacing: "2px",
        }}
      >
        🎰 ROULETTE 98
      </div>

      {/* 메인 창 */}
      <div className="flex flex-col lg:flex-row gap-4 w-full max-w-5xl">
        {/* 룰렛 창 */}
        <Win98Window
          title="Roulette.exe"
          icon="🎡"
          className="flex-1"
        >
          <div className="flex flex-col items-center gap-3 p-2">
            {/* 룰렛 휠 */}
            <RouletteWheel sections={sections} rotation={rotation} />

            {/* 구분선 */}
            <hr className="win98-divider w-full" />

            {/* 스핀 버튼 */}
            <button
              onClick={spin}
              disabled={isSpinning}
              className="win98-button"
              style={{
                fontSize: "14px",
                fontWeight: "bold",
                padding: "8px 32px",
                minWidth: "160px",
                background: isSpinning ? "#C0C0C0" : "#C0C0C0",
                letterSpacing: "1px",
                cursor: isSpinning ? "not-allowed" : "pointer",
                opacity: isSpinning ? 0.7 : 1,
              }}
            >
              {isSpinning ? "⏳ 돌리는 중..." : "🎯 SPIN!"}
            </button>

            {/* 상태바 */}
            <div className="win98-statusbar w-full flex gap-2">
              <div className="win98-statusbar-panel flex-1">
                {isSpinning
                  ? "🎡 룰렛이 돌아가고 있습니다..."
                  : spinCount === 0
                  ? "SPIN 버튼을 눌러 시작하세요"
                  : `총 ${spinCount}회 실행됨`}
              </div>
              <div className="win98-statusbar-panel">
                섹션: {sections.length}개
              </div>
            </div>
          </div>
        </Win98Window>

        {/* 섹션 에디터 창 */}
        <Win98Window
          title="섹션 편집기"
          icon="⚙️"
          className="lg:w-72"
        >
          <SectionEditor
            sections={sections}
            onSectionsChange={handleSectionsChange}
          />
        </Win98Window>
      </div>

      {/* 하단 정보 */}
      <div
        style={{
          fontFamily: '"MS Sans Serif", Tahoma, Arial, sans-serif',
          fontSize: "10px",
          color: "rgba(255,255,255,0.7)",
        }}
      >
        Windows 98 Roulette v1.0 © 2025 WemadePlay
      </div>

      {/* 결과 다이얼로그 */}
      {result && !isSpinning && (
        <ResultDisplay
          result={result}
          onClose={() => setResult(null)}
        />
      )}
    </div>
  );
}
