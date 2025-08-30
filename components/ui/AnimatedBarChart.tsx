'use client';

import React from 'react';

type Datum = { group: string; blue: number; red: number };

const data: Datum[] = [
  { group: '30 Screens',  blue: 8,  red: 5  },
  { group: '100 Screens', blue: 20, red: 10 },
  { group: '300 Screens', blue: 40, red: 15 },
];

const toUnit = (v: number, max: number) => (max === 0 ? 0 : v / max);

function AnimatedBarChart() {
  const width = 620;
  const height = 434; // 70% 높이
  const margin = { top: 28, right: 64, bottom: 56, left: 64 };
  const innerW = width - margin.left - margin.right;
  const innerH = height - margin.top - margin.bottom;

  const innerPad = 20;
  const paddedW = innerW - innerPad * 2;

  const maxY = Math.max(...data.flatMap(d => [d.blue, d.red]));
  const groupCount = data.length;

  const interGroupGap = 28;
  const groupW = (paddedW - interGroupGap * (groupCount - 1)) / groupCount;

  const gapInGroup = 6;
  const baseBarW = (groupW - gapInGroup) / 2;
  const barW = Math.max(8, baseBarW * 0.84); // 막대 20% 두꺼운 상태 유지

  const groupX = (gi: number) => innerPad + gi * (groupW + interGroupGap);

  const wrapperRef = React.useRef<HTMLDivElement | null>(null);
  const [tooltip, setTooltip] = React.useState<{
    show: boolean; x: number; y: number; label: string;
    series: { name: string; value: number; color: string }[];
  }>({ show: false, x: 0, y: 0, label: '', series: [] });

  const handleBarEnter = (evt: React.MouseEvent, d: Datum) => {
    const rect = wrapperRef.current?.getBoundingClientRect();
    const x = rect ? evt.clientX - rect.left + 10 : 0;
    const y = rect ? evt.clientY - rect.top  - 10 : 0;
    setTooltip({
      show: true,
      x, y,
      label: d.group,
      series: [
        { name: 'Before:', value: d.blue, color: '#A6BBD1' },
        { name: 'After:',     value: d.red,  color: '#1E69A1' },
      ]
    });
  };
  const handleMove = (evt: React.MouseEvent) => {
    const rect = wrapperRef.current?.getBoundingClientRect();
    if (!rect || !tooltip.show) return;
    setTooltip(t => ({ ...t, x: evt.clientX - rect.left + 10, y: evt.clientY - rect.top - 10 }));
  };
  const handleLeave = () => setTooltip(t => ({ ...t, show: false }));

  const ticks = 4;
  const gridValues = Array.from({ length: ticks + 1 }, (_, i) =>
    Math.round((maxY / ticks) * i)
  );

  return (
    <div
      ref={wrapperRef}
      className="w-full max-w-[620px] mx-auto p-4 shadow rounded-2xl bg-white relative"
      style={{ fontSize: 16 }}
    >
      <svg
        viewBox={`0 0 ${width} ${height}`}
        width="100%"
        height="100%"
        role="img"
        aria-label="Animated Bar Chart"
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
      >
        <defs>
          <marker id="yArrow" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
            <path d="M0,0 L8,4 L0,8 Z" fill="#6b7280" />
          </marker>
          <marker id="xArrow" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
            <path d="M0,0 L8,4 L0,8 Z" fill="#6b7280" />
          </marker>
        </defs>

        <g transform={`translate(${margin.left},${margin.top})`}>
          {/* Y축 */}
          <line
            x1={0}
            y1={innerH}
            x2={0}
            y2={0}
            stroke="#6b7280"
            strokeWidth={1.5}
            markerEnd="url(#yArrow)"
          />
          {/* Weeks 라벨: 축 안쪽으로 이동하여 잘림 방지 + 색상 완화 */}
          <text
            x={-20}           // 축 오른쪽으로 이동
            y={-16}
            textAnchor="start"
            fill="#374151"    // 축 눈금과 동일한 색
            style={{ fontSize: 16, fontWeight: 400 }}
          >
            Weeks
          </text>

          {/* X축 */}
          <line
            x1={0}
            y1={innerH}
            x2={innerW}
            y2={innerH}
            stroke="#6b7280"
            strokeWidth={1.5}
            markerEnd="url(#xArrow)"
          />
          {/* Count of Screens: 화살표 끝 중심과 라벨 중심 맞춤 + 색상 완화 */}
          <text
            x={innerW + 6}    // 화살표 팁(약 6~8px) 위치로 이동
            y={innerH + 18}
            textAnchor="middle"
            fill="#374151"
            style={{ fontSize: 14, fontWeight: 400 }}
          >
            <tspan x={innerW + 6} dy="0">Count of</tspan>
            <tspan x={innerW + 6} dy="16">Screens</tspan>
          </text>

          {/* 격자 & Y축 눈금 */}
          {gridValues.map((gv) => {
            const y = innerH - toUnit(gv, maxY) * innerH;
            return (
              <g key={`grid-${gv}`}>
                <line x1={0} y1={y} x2={innerW} y2={y} stroke="currentColor" opacity={0.15} strokeDasharray="3 3" />
                <text x={-12} y={y} textAnchor="end" dominantBaseline="central" fill="#4b5563">
                  {gv}
                </text>
              </g>
            );
          })}

          {/* 막대 + X축 카테고리(숫자만) */}
          {data.map((d, gi) => {
            const gx = groupX(gi);

            const xBlue = gx;
            const xRed  = gx + barW + gapInGroup;

            const hBlue = toUnit(d.blue, maxY) * innerH;
            const hRed  = toUnit(d.red,  maxY) * innerH;
            const yBlue = innerH - hBlue;
            const yRed  = innerH - hRed;

            const numberOnly = d.group.replace(/\D/g, '');

            return (
              <g key={d.group}>
                <text
                  x={gx + (2 * barW + gapInGroup) / 2}
                  y={innerH + 26}
                  textAnchor="middle"
                  fill="#374151"
                  style={{ pointerEvents: 'none' }}
                >
                  {numberOnly}
                </text>

                <rect
                  x={xBlue}
                  y={yBlue}
                  width={barW}
                  height={hBlue}
                  fill="#A6BBD1"
                  rx={6}
                  ry={6}
                  onMouseEnter={(e) => handleBarEnter(e, d)}
                />
                <rect
                  x={xRed}
                  y={yRed}
                  width={barW}
                  height={hRed}
                  fill="#1E69A1"
                  rx={6}
                  ry={6}
                  onMouseEnter={(e) => handleBarEnter(e, d)}
                />
              </g>
            );
          })}
        </g>
      </svg>

      {/* 범주(legend): 전체는 중앙 배치, 내부 항목은 왼쪽 정렬 */}
      <div className="mt-3 flex flex-col items-center justify-center text-sm text-gray-800">
        <div className="flex flex-col items-start gap-[5px]">
          <div className="flex items-center gap-[10px]">
            <span
              aria-hidden
              className="inline-block"
              style={{ width: 36, height: 12, background: '#A6BBD1', borderRadius: 2 }}
            />
            <span>Before Framework</span>
          </div>
          <div className="flex items-center gap-[10px]">
            <span
              aria-hidden
              className="inline-block"
              style={{ width: 36, height: 12, background: '#1E69A1', borderRadius: 2 }}
            />
            <span>After Framework</span>
          </div>
        </div>
      </div>

      {tooltip.show && (
        <div
          className="absolute pointer-events-none rounded-lg shadow-lg px-3 py-2 border border-gray-50 p-[5px] rounded-[4px] shadow-lg"
          style={{
            left: Math.min(Math.max(tooltip.x, 8), (wrapperRef.current?.clientWidth ?? 0) - 160),
            top:  Math.min(Math.max(tooltip.y, 8), 260),
            background: '#ffffff',
            lineHeight: 1.2,
          }}
        >
          <div className="font-semibold mb-1">{tooltip.label}</div>
          {tooltip.series.map(s => (
            <div key={s.name} className="flex items-center gap-[2px]">
              <span>{s.name}</span>
              <span className="tabular-nums ml-1">{s.value} weeks</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Component() {
  return <AnimatedBarChart />;
}
