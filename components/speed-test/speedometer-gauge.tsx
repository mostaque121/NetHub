"use client";

import { Download } from "lucide-react";
import { useEffect, useState } from "react";

interface SpeedometerGaugeProps {
  liveData?: number;
}

export default function SpeedometerGauge({ liveData }: SpeedometerGaugeProps) {
  const [animatedValue, setAnimatedValue] = useState(0);

  useEffect(() => {
    setAnimatedValue(liveData ?? 0);
  }, [liveData]);

  const startAngle = -135;
  const endAngle = 135;
  const totalAngle = endAngle - startAngle;

  const markers = [
    { value: 0, angle: -135.35 },
    { value: 1, angle: -101.25 },
    { value: 5, angle: -67.5 },
    { value: 10, angle: -33.75 },
    { value: 20, angle: 0 },
    { value: 50, angle: 33.75 },
    { value: 100, angle: 67.5 },
    { value: 200, angle: 101.25 },
    { value: 500, angle: 135.35 },
  ];

  const getRotationForValue = (val: number) => {
    if (val <= markers[0].value) return markers[0].angle;
    if (val >= markers[markers.length - 1].value)
      return markers[markers.length - 1].angle;

    for (let i = 0; i < markers.length - 1; i++) {
      const current = markers[i];
      const next = markers[i + 1];

      if (val >= current.value && val <= next.value) {
        const ratio = (val - current.value) / (next.value - current.value);
        return current.angle + ratio * (next.angle - current.angle);
      }
    }
  };

  const rotation = getRotationForValue(animatedValue);

  const polarToCartesian = (
    centerX: number,
    centerY: number,
    radius: number,
    angleInDegrees: number
  ) => {
    const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;
    return {
      x: centerX + radius * Math.cos(angleInRadians),
      y: centerY + radius * Math.sin(angleInRadians),
    };
  };

  const createArcPath = () => {
    const centerX = 200;
    const centerY = 200;
    const radius = 120;
    const start = polarToCartesian(centerX, centerY, radius, endAngle);
    const end = polarToCartesian(centerX, centerY, radius, startAngle);
    const largeArcFlag = totalAngle <= 180 ? "0" : "1";
    return `M ${start.x} ${start.y} A ${radius} ${radius} 0 ${largeArcFlag} 0 ${end.x} ${end.y}`;
  };

  return (
    <div className="relative w-[250px] h-[250px]">
      <svg viewBox="75 75 250 250" className="w-full h-full">
        {/* Arc */}
        <path
          d={createArcPath()}
          fill="none"
          className="stroke-primary" // uses theme color for both dark/light
          strokeWidth="6"
          strokeLinecap="round"
        />

        {/* Tick marks */}
        {markers.map((marker) => {
          const angleRad = ((marker.angle - 90) * Math.PI) / 180;
          const outerRadius = 120;
          const innerRadius = 110;
          const x1 = 200 + outerRadius * Math.cos(angleRad);
          const y1 = 200 + outerRadius * Math.sin(angleRad);
          const x2 = 200 + innerRadius * Math.cos(angleRad);
          const y2 = 200 + innerRadius * Math.sin(angleRad);

          return (
            <line
              key={marker.value}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              className="stroke-primary"
              strokeWidth="5"
              strokeLinecap="round"
            />
          );
        })}

        {/* Tick labels */}
        {markers.map((marker) => {
          const angleRad = ((marker.angle - 90) * Math.PI) / 180;
          const labelRadius = 95;
          const x = 200 + labelRadius * Math.cos(angleRad);
          const y = 200 + labelRadius * Math.sin(angleRad);

          return (
            <text
              key={`label-${marker.value}`}
              x={x}
              y={y}
              className="fill-muted-foreground font-sans text-sm font-medium"
              textAnchor="middle"
              dominantBaseline="middle"
            >
              {marker.value}
            </text>
          );
        })}

        {/* Needle */}
        <g
          style={{
            transform: `rotate(${rotation}deg)`,
            transformOrigin: "200px 200px",
            transition: "transform 1s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        >
          <path
            d="M 200 200 L 196 197 L 200 120 L 204 196 Z"
            className="fill-primary"
          />
        </g>

        {/* Needle center */}
        <circle cx="200" cy="200" r="8" className="fill-primary" />
      </svg>

      {/* Digital readout */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-center">
        <div className="text-2xl font-bold text-foreground tabular-nums tracking-wider">
          <div className="flex flex-col gap-2 items-center">
            {animatedValue.toFixed(2)}
            <div className="flex items-center gap-2">
              <Download className="text-primary" />
              <span className="text-xs text-muted-foreground">Mbps</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
