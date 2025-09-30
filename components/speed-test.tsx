"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Activity, Download, Upload, Wifi } from "lucide-react";
import { useState } from "react";

interface SpeedData {
  download: number;
  upload: number;
  ping: number;
}

interface HistoryPoint {
  time: number;
  speed: number;
}

export function SpeedTest() {
  const [isRunning, setIsRunning] = useState(false);
  const [currentSpeed, setCurrentSpeed] = useState(0);
  const [speedData, setSpeedData] = useState<SpeedData>({
    download: 0,
    upload: 0,
    ping: 0,
  });
  const [history, setHistory] = useState<HistoryPoint[]>([]);
  const [testPhase, setTestPhase] = useState<
    "idle" | "ping" | "download" | "upload" | "complete"
  >("idle");

  // Simulate speed test
  const runSpeedTest = async () => {
    setIsRunning(true);
    setHistory([]);
    setCurrentSpeed(0);

    // Ping test
    setTestPhase("ping");
    await new Promise((resolve) => setTimeout(resolve, 500));
    const pingValue = Math.floor(Math.random() * 30) + 10;
    setSpeedData((prev) => ({ ...prev, ping: pingValue }));

    // Download test
    setTestPhase("download");
    const downloadSpeed = await simulateSpeedTest("download");
    setSpeedData((prev) => ({ ...prev, download: downloadSpeed }));

    // Upload test
    setTestPhase("upload");
    const uploadSpeed = await simulateSpeedTest("upload");
    setSpeedData((prev) => ({ ...prev, upload: uploadSpeed }));

    setTestPhase("complete");
    setIsRunning(false);
    setCurrentSpeed(0);
  };

  const simulateSpeedTest = (type: "download" | "upload"): Promise<number> => {
    return new Promise((resolve) => {
      const maxSpeed = type === "download" ? 150 : 80;
      const duration = 3000;
      const interval = 50;
      const steps = duration / interval;
      let step = 0;
      const historyPoints: HistoryPoint[] = [];

      const timer = setInterval(() => {
        step++;
        const progress = step / steps;
        // Simulate realistic speed curve
        const speed =
          maxSpeed * Math.sin(progress * Math.PI) * (0.8 + Math.random() * 0.4);
        setCurrentSpeed(speed);
        historyPoints.push({ time: Date.now(), speed });
        setHistory([...historyPoints]);

        if (step >= steps) {
          clearInterval(timer);
          const finalSpeed = Math.floor(maxSpeed * 0.85);
          resolve(finalSpeed);
        }
      }, interval);
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 md:p-8">
      <div className="w-full max-w-4xl space-y-6">
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Speed Test
          </h1>
          <p className="text-muted-foreground text-lg">
            Measure your internet connection speed
          </p>
        </div>

        {/* Main Speedometer Card */}
        <Card className="p-8 md:p-12 border-border/50 bg-card/50 backdrop-blur">
          <div className="flex flex-col items-center space-y-8">
            {/* Circular Speedometer */}
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              {/* Background circles */}
              <svg
                className="absolute inset-0 w-full h-full -rotate-90"
                viewBox="0 0 200 200"
              >
                {/* Outer ring */}
                <circle
                  cx="100"
                  cy="100"
                  r="90"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-border"
                  opacity="0.3"
                />

                {/* Progress arc */}
                <circle
                  cx="100"
                  cy="100"
                  r="90"
                  fill="none"
                  stroke="url(#speedGradient)"
                  strokeWidth="8"
                  strokeLinecap="round"
                  strokeDasharray={`${(currentSpeed / 200) * 565} 565`}
                  className="transition-all duration-300 ease-out"
                  style={{
                    filter: isRunning
                      ? "drop-shadow(0 0 8px oklch(0.6 0.2 240))"
                      : "none",
                  }}
                />

                {/* Gradient definition */}
                <defs>
                  <linearGradient
                    id="speedGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="oklch(0.6 0.2 240)" />
                    <stop offset="50%" stopColor="oklch(0.65 0.18 200)" />
                    <stop offset="100%" stopColor="oklch(0.7 0.15 280)" />
                  </linearGradient>
                </defs>

                {/* Speed markers */}
                {[0, 50, 100, 150, 200].map((speed) => {
                  const angle = (speed / 200) * 180 - 90;
                  const x = 100 + 85 * Math.cos((angle * Math.PI) / 180);
                  const y = 100 + 85 * Math.sin((angle * Math.PI) / 180);
                  return (
                    <g key={speed}>
                      <line
                        x1={100 + 75 * Math.cos((angle * Math.PI) / 180)}
                        y1={100 + 75 * Math.sin((angle * Math.PI) / 180)}
                        x2={x}
                        y2={y}
                        stroke="currentColor"
                        strokeWidth="2"
                        className="text-muted-foreground"
                        opacity="0.5"
                      />
                    </g>
                  );
                })}
              </svg>

              {/* Center content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="text-center space-y-1">
                  <div className="text-5xl md:text-6xl font-bold font-mono tabular-nums">
                    {Math.floor(currentSpeed)}
                  </div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wider">
                    Mbps
                  </div>
                  {testPhase !== "idle" && testPhase !== "complete" && (
                    <div className="text-xs text-accent capitalize mt-2 animate-pulse">
                      Testing {testPhase}...
                    </div>
                  )}
                </div>
              </div>

              {/* Animated pulse effect when running */}
              {isRunning && (
                <div className="absolute inset-0 rounded-full border-2 border-accent animate-ping opacity-20" />
              )}
            </div>

            {/* Start Button */}
            <Button
              onClick={runSpeedTest}
              disabled={isRunning}
              size="lg"
              className="relative px-8 py-6 text-lg font-semibold bg-accent hover:bg-accent/90 text-accent-foreground transition-all duration-300 disabled:opacity-50"
            >
              {isRunning ? (
                <>
                  <Activity className="mr-2 h-5 w-5 animate-pulse" />
                  Testing...
                </>
              ) : (
                <>
                  <Wifi className="mr-2 h-5 w-5" />
                  Start Test
                </>
              )}
            </Button>
          </div>
        </Card>

        {/* Results Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="p-6 border-border/50 bg-card/50 backdrop-blur">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-chart-1/10">
                <Download className="h-6 w-6 text-chart-1" />
              </div>
              <div className="flex-1">
                <div className="text-sm text-muted-foreground">Download</div>
                <div className="text-2xl font-bold font-mono tabular-nums">
                  {speedData.download.toFixed(1)}
                  <span className="text-sm text-muted-foreground ml-1">
                    Mbps
                  </span>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-6 border-border/50 bg-card/50 backdrop-blur">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-chart-2/10">
                <Upload className="h-6 w-6 text-chart-2" />
              </div>
              <div className="flex-1">
                <div className="text-sm text-muted-foreground">Upload</div>
                <div className="text-2xl font-bold font-mono tabular-nums">
                  {speedData.upload.toFixed(1)}
                  <span className="text-sm text-muted-foreground ml-1">
                    Mbps
                  </span>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-6 border-border/50 bg-card/50 backdrop-blur">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-chart-3/10">
                <Activity className="h-6 w-6 text-chart-3" />
              </div>
              <div className="flex-1">
                <div className="text-sm text-muted-foreground">Ping</div>
                <div className="text-2xl font-bold font-mono tabular-nums">
                  {speedData.ping}
                  <span className="text-sm text-muted-foreground ml-1">ms</span>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Speed History Graph */}
        {history.length > 0 && (
          <Card className="p-6 border-border/50 bg-card/50 backdrop-blur">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">Speed Over Time</h3>
                <div className="text-sm text-muted-foreground">
                  Real-time fluctuation
                </div>
              </div>

              <div className="relative h-32 w-full">
                <svg
                  className="w-full h-full"
                  viewBox="0 0 600 120"
                  preserveAspectRatio="none"
                >
                  {/* Grid lines */}
                  {[0, 1, 2, 3, 4].map((i) => (
                    <line
                      key={i}
                      x1="0"
                      y1={i * 30}
                      x2="600"
                      y2={i * 30}
                      stroke="currentColor"
                      strokeWidth="1"
                      className="text-border"
                      opacity="0.2"
                    />
                  ))}

                  {/* Speed line */}
                  <polyline
                    points={history
                      .map((point, i) => {
                        const x = (i / (history.length - 1)) * 600;
                        const y = 120 - (point.speed / 200) * 120;
                        return `${x},${y}`;
                      })
                      .join(" ")}
                    fill="none"
                    stroke="url(#lineGradient)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="transition-all duration-100"
                  />

                  {/* Gradient for line */}
                  <defs>
                    <linearGradient
                      id="lineGradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop offset="0%" stopColor="oklch(0.6 0.2 240)" />
                      <stop offset="100%" stopColor="oklch(0.7 0.15 280)" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
}
