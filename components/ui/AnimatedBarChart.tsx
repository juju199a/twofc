'use client';

import React from 'react';
import { motion } from 'framer-motion';

type Datum = { group: string; blue: number; red: number };

const data: Datum[] = [
  { group: 'Screen 30',  blue: 8,  red: 5  },
  { group: 'Screen 100', blue: 20, red: 10 },
  { group: 'Screen 300', blue: 40, red: 15 },
];

const toUnit = (v: number, max: number) => (max === 0 ? 0 : v / max);

function AnimatedBarChart() {
  const width = 620;
  const height = 300;
  const margin = { top: 20, right: 24, bottom: 40, left: 48 };
  const innerW = width - margin.left - margin.right;
  const innerH = height - margin.top - margin.bottom;

  const groups = data.map(d => d.group);
  const groupCount = groups.length;
  const maxY = Math.max(...data.flatMap(d => [d.blue, d.red]));

  const interGroupGap = 28;
  const groupW = (innerW - interGroupGap * (groupCount - 1)) / groupCount;
  const gapInGroup = 6;
  const barW = Math.max(12, (groupW - gapInGroup) / 2);
  const groupX = (gi: number) => gi * (groupW + interGroupGap);

  const [activated, setActivated] = React.useState(false);

  const wrapperRef = React.useRef<HTMLDivElement | null>(null);
  const [tooltip, setTooltip] = React.useState<{
    show: boolean; x: number; y: number; label: string;
    series: { name: string; value: number; color: string }[];
  }>({ show: false, x: 0, y: 0, label: '', series: [] });

  const handleBarEnter = (evt: React.MouseEvent, d: Datum) => {
    if (!activated) setActivated(true);
    const rect = wrapperRef.current?.getBoundingClientRect();
    const x = rect ? evt.clientX - rect.left + 10 : 0;
    const y = rect ? evt.clientY - rect.top  - 10 : 0;
    setTooltip({
      show: true,
      x, y,
      label: d.group,
      series: [
        { name: 'blue', value: d.blue, color: '#3b82f6' },
        { name: 'red',  value: d.red,  color: '#ef4444' },
      ]
    });
  };
  const handleMove = (evt: React.MouseEvent) => {
    const rect = wrapperRef.current?.getBoundingClientRect();
    if (!rect || !tooltip.show) return;
    setTooltip(t => ({ ...t, x: evt.clientX - rect.left + 10, y: evt.clientY - rect.top - 10 }));
  };
  const handleLeave = () => {
    setTooltip(t => ({ ...t, show: false }));
  };

  const ticks = 4;
  const gridValues = Array.from({ length: ticks + 1 }, (_, i) =>
    Math.round((maxY / ticks) * i)
  );

  const baseDelay = 0.35;
  const duration  = 0.5;

  return (
    <div
      ref={wrapperRef}
      className="w-full max-w-[620px] mx-auto p-4 shadow rounded-2xl bg-white relative"
      style={{ fontSize: 16 }}
    >
      <h2 className="text-lg font-bold mb-2">Animated Bar Chart (Blue vs Red)</h2>

      <div className="h-72">
        <svg
          viewBox={`0 0 ${width} ${height}`}
          width="100%"
          height="100%"
          role="img"
          aria-label="Animated Bar Chart"
          onMouseMove={handleMove}
          onMouseLeave={handleLeave}
        >
          <g transform={`translate(${margin.left},${margin.top})`}>
            {gridValues.map((gv) => {
              const y = innerH - toUnit(gv, maxY) * innerH;
              return (
                <g key={`grid-${gv}`}>
                  <line x1={0} y1={y} x2={innerW} y2={y} stroke="currentColor" opacity={0.15} strokeDasharray="3 3" />
                  <text x={-10} y={y} textAnchor="end" dominantBaseline="central" fill="#4b5563">
                    {gv}
                  </text>
                </g>
              );
            })}

            {data.map((d, gi) => {
              const gx = groupX(gi);
              const delay = gi * baseDelay;

              const xBlue = gx;
              const xRed  = gx + barW + 6;

              const hBlue = toUnit(d.blue, maxY) * innerH;
              const hRed  = toUnit(d.red,  maxY) * innerH;
              const yBlue = innerH - hBlue;
              const yRed  = innerH - hRed;

              return (
                <g key={d.group} transform={`translate(0,0)`}>
                  <text
                    x={gx + (2 * barW + 6) / 2}
                    y={innerH + 24}
                    textAnchor="middle"
                    fill="#374151"
                    style={{ pointerEvents: 'none' }}
                  >
                    {d.group}
                  </text>

                  {/* BLUE BAR */}
                  <rect
                    x={xBlue}
                    y={yBlue}
                    width={barW}
                    height={hBlue}
                    fill="#3b82f6"
                    rx={6}
                    ry={6}
                  />
                  {/* BLUE VALUE LABEL */}
                  <text
                    x={xBlue + barW / 2}
                    y={yBlue - 8}
                    textAnchor="middle"
                    fill="#111827"
                    fontSize={16}
                    style={{ pointerEvents: 'none', paintOrder: 'stroke', stroke: '#ffffff', strokeWidth: 3 }}
                  >
                    {d.blue} weeks
                  </text>

                  {/* RED BAR */}
                  <rect
                    x={xRed}
                    y={yRed}
                    width={barW}
                    height={hRed}
                    fill="#ef4444"
                    rx={6}
                    ry={6}
                  />
                  {/* RED VALUE LABEL */}
                  <text
                    x={xRed + barW / 2}
                    y={yRed - 8}
                    textAnchor="middle"
                    fill="#111827"
                    fontSize={16}
                    style={{ pointerEvents: 'none', paintOrder: 'stroke', stroke: '#ffffff', strokeWidth: 3 }}
                  >
                    {d.red} weeks
                  </text>
                </g>
              );
            })}
          </g>
        </svg>
      </div>

      {tooltip.show && (
        <div
          className="absolute pointer-events-none rounded-lg shadow-lg px-3 py-2 border border-gray-200"
          style={{
            left: Math.min(Math.max(tooltip.x, 8), (wrapperRef.current?.clientWidth ?? 0) - 200),
            top:  Math.min(Math.max(tooltip.y, 8), 260),
            background: '#ffffff',
            lineHeight: 1.2,
          }}
        >
          <div className="font-semibold mb-1">{tooltip.label}</div>
          {tooltip.series.map(s => (
            <div key={s.name} className="flex items-center gap-2">
              <span
                aria-hidden
                className="inline-block w-2.5 h-2.5 rounded-sm"
                style={{ background: s.color }}
              />
              <span className="capitalize">{s.name}</span>
              <span className="tabular-nums ml-1">{s.value} weeks</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
export default function Component() {
  return <AnimatedBarChart/>;
}