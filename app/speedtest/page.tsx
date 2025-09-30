/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Clock,
  Download,
  Globe,
  MapPin,
  RefreshCw,
  Router,
  Upload,
  Wifi,
  Zap,
} from "lucide-react";
import { useEffect, useState } from "react";

interface SpeedTestResult {
  download: number;
  upload: number;
  ping: number;
  jitter: number;
  isp: string;
  ip: string;
  server: string;
  timestamp: Date;
}

interface TestState {
  isRunning: boolean;
  currentTest: "ping" | "download" | "upload" | "complete" | null;
  progress: number;
}

interface NetworkInfo {
  ip: string;
  isp: string;
  location: string;
  city: string;
  country: string;
  timezone: string;
  connectionType: string;
  userAgent: string;
}

export default function SpeedTestPage() {
  const [testState, setTestState] = useState<TestState>({
    isRunning: false,
    currentTest: null,
    progress: 0,
  });

  const [currentResult, setCurrentResult] = useState<Partial<SpeedTestResult>>(
    {}
  );
  const [testHistory, setTestHistory] = useState<SpeedTestResult[]>([]);
  const [networkInfo, setNetworkInfo] = useState<NetworkInfo>({
    ip: "Loading...",
    isp: "Loading...",
    location: "Loading...",
    city: "Loading...",
    country: "Loading...",
    timezone: "Loading...",
    connectionType: "Unknown",
    userAgent: "",
  });
  const [isLoadingNetworkInfo, setIsLoadingNetworkInfo] = useState(true);

  const fetchNetworkInfo = async () => {
    try {
      setIsLoadingNetworkInfo(true);

      // Get IP and location info from ipapi.co
      const ipResponse = await fetch("http://ip-api.com/json");
      const ipData = await ipResponse.json();

      console.log(ipData);

      // Get additional connection info
      const connection =
        (navigator as any).connection ||
        (navigator as any).mozConnection ||
        (navigator as any).webkitConnection;
      const connectionType = connection
        ? connection.effectiveType || connection.type || "Unknown"
        : "Unknown";

      setNetworkInfo({
        ip: ipData.query || "Unknown",
        isp: ipData.org || "Unknown ISP",
        location: `${ipData.city || "Unknown"}, ${ipData.country || "Unknown"}`,
        city: ipData.city || "Unknown",
        country: ipData.country || "Unknown",
        timezone: ipData.timezone || "Unknown",
        connectionType: connectionType,
        userAgent: navigator.userAgent.split(" ")[0] || "Unknown Browser",
      });
    } catch (error) {
      console.error("Failed to fetch network info:", error);
      setNetworkInfo((prev) => ({
        ...prev,
        ip: "Failed to load",
        isp: "Failed to load",
        location: "Failed to load",
      }));
    } finally {
      setIsLoadingNetworkInfo(false);
    }
  };

  useEffect(() => {
    fetchNetworkInfo();
  }, []);

  const runSpeedTest = async () => {
    setTestState({ isRunning: true, currentTest: "ping", progress: 0 });
    setCurrentResult({});

    // Ping test
    await simulateTest("ping", 1500, (progress) => {
      setTestState((prev) => ({ ...prev, progress }));
    });

    const pingResult = Math.floor(Math.random() * 50) + 5;
    setCurrentResult((prev) => ({
      ...prev,
      ping: pingResult,
      jitter: Math.floor(Math.random() * 10) + 1,
    }));

    // Download test
    setTestState({ isRunning: true, currentTest: "download", progress: 0 });
    await simulateTest("download", 4000, (progress) => {
      setTestState((prev) => ({ ...prev, progress }));
      const currentSpeed = (Math.random() * 100 + 50) * (progress / 100);
      setCurrentResult((prev) => ({ ...prev, download: currentSpeed }));
    });

    const finalDownload = Math.floor(Math.random() * 100) + 50;
    setCurrentResult((prev) => ({ ...prev, download: finalDownload }));

    // Upload test
    setTestState({ isRunning: true, currentTest: "upload", progress: 0 });
    await simulateTest("upload", 3000, (progress) => {
      setTestState((prev) => ({ ...prev, progress }));
      const currentSpeed = (Math.random() * 50 + 20) * (progress / 100);
      setCurrentResult((prev) => ({ ...prev, upload: currentSpeed }));
    });

    const finalUpload = Math.floor(Math.random() * 50) + 20;
    const finalResult: SpeedTestResult = {
      download: finalDownload,
      upload: finalUpload,
      ping: pingResult,
      jitter: Math.floor(Math.random() * 10) + 1,
      isp: networkInfo.isp,
      ip: networkInfo.ip,
      server: "Auto-Selected Server",
      timestamp: new Date(),
    };

    setCurrentResult(finalResult);
    setTestHistory((prev) => [finalResult, ...prev.slice(0, 9)]);
    setTestState({ isRunning: false, currentTest: "complete", progress: 100 });
  };

  const simulateTest = (
    testType: string,
    duration: number,
    onProgress: (progress: number) => void
  ) => {
    return new Promise<void>((resolve) => {
      let progress = 0;
      const interval = setInterval(() => {
        progress += Math.random() * 8 + 3;
        if (progress >= 100) {
          progress = 100;
          clearInterval(interval);
          resolve();
        }
        onProgress(progress);
      }, duration / 25);
    });
  };

  const getSpeedColor = (speed: number, type: "download" | "upload") => {
    const threshold = type === "download" ? 25 : 10;
    if (speed >= threshold * 2) return "text-green-400";
    if (speed >= threshold) return "text-yellow-400";
    return "text-red-400";
  };

  const getPingColor = (ping: number) => {
    if (ping <= 20) return "text-green-400";
    if (ping <= 50) return "text-yellow-400";
    return "text-red-400";
  };

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <div className="relative w-64 h-64 mx-auto mb-6">
                {/* Circular Progress Ring */}
                <svg
                  className="w-64 h-64 transform -rotate-90"
                  viewBox="0 0 256 256"
                >
                  <circle
                    cx="128"
                    cy="128"
                    r="112"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="8"
                    className="text-muted-foreground/20"
                  />
                  {testState.isRunning && (
                    <circle
                      cx="128"
                      cy="128"
                      r="112"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="8"
                      strokeLinecap="round"
                      strokeDasharray={`${2 * Math.PI * 112}`}
                      strokeDashoffset={`${
                        2 * Math.PI * 112 * (1 - testState.progress / 100)
                      }`}
                      className="text-primary transition-all duration-300 glow-cyan"
                    />
                  )}
                </svg>

                {/* Center Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  {testState.isRunning ? (
                    <>
                      <div className="text-3xl font-bold text-primary mb-2">
                        {Math.round(testState.progress)}%
                      </div>
                      <div className="text-sm text-muted-foreground capitalize">
                        Testing {testState.currentTest}
                      </div>
                    </>
                  ) : testState.currentTest === "complete" ? (
                    <>
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                        <Zap className="w-8 h-8 text-primary" />
                      </div>
                      <div
                        onClick={runSpeedTest}
                        className="text-lg text-muted-foreground"
                      >
                        Test Again
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                        <Zap className="w-8 h-8 text-primary" />
                      </div>
                      <div
                        onClick={runSpeedTest}
                        className="text-lg text-muted-foreground"
                      >
                        Ready to test
                      </div>
                    </>
                  )}
                </div>
              </div>

              {/* Control Buttons */}
              {/*               <div className="flex justify-center space-x-4 mb-8">
                {!testState.isRunning ? (
                  <Button
                    onClick={runSpeedTest}
                    size="lg"
                    className="glow-cyan px-8 py-3 text-lg"
                  >
                    <Play className="w-6 h-6 mr-2" />
                    Start Speed Test
                  </Button>
                ) : (
                  <Button
                    onClick={stopTest}
                    variant="destructive"
                    size="lg"
                    className="px-8 py-3 text-lg"
                  >
                    <Pause className="w-6 h-6 mr-2" />
                    Stop Test
                  </Button>
                )}
              </div> */}

              {/* Speed Results Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-secondary/30 rounded-xl p-6 border border-border/50">
                  <div className="flex items-center justify-center mb-4">
                    <div className="w-12 h-12 bg-yellow-500/10 rounded-full flex items-center justify-center">
                      <Zap className="w-6 h-6 text-yellow-400" />
                    </div>
                  </div>
                  <div
                    className={`text-3xl font-bold text-center mb-2 ${getPingColor(
                      currentResult.ping || 0
                    )}`}
                  >
                    {currentResult.ping?.toFixed(0) || "--"}
                  </div>
                  <div className="text-center text-muted-foreground">
                    Ping (ms)
                  </div>
                  {currentResult.jitter && (
                    <div className="text-center text-xs text-muted-foreground mt-1">
                      Jitter: {currentResult.jitter}ms
                    </div>
                  )}
                </div>

                <div className="bg-secondary/30 rounded-xl p-6 border border-border/50">
                  <div className="flex items-center justify-center mb-4">
                    <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center">
                      <Download className="w-6 h-6 text-green-400" />
                    </div>
                  </div>
                  <div
                    className={`text-3xl font-bold text-center mb-2 ${getSpeedColor(
                      currentResult.download || 0,
                      "download"
                    )}`}
                  >
                    {currentResult.download?.toFixed(1) || "--"}
                  </div>
                  <div className="text-center text-muted-foreground">
                    Download (Mbps)
                  </div>
                </div>

                <div className="bg-secondary/30 rounded-xl p-6 border border-border/50">
                  <div className="flex items-center justify-center mb-4">
                    <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center">
                      <Upload className="w-6 h-6 text-blue-400" />
                    </div>
                  </div>
                  <div
                    className={`text-3xl font-bold text-center mb-2 ${getSpeedColor(
                      currentResult.upload || 0,
                      "upload"
                    )}`}
                  >
                    {currentResult.upload?.toFixed(1) || "--"}
                  </div>
                  <div className="text-center text-muted-foreground">
                    Upload (Mbps)
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Router className="w-5 h-5 text-primary" />
              <span>Network Information</span>
              <Button
                variant="ghost"
                size="sm"
                onClick={fetchNetworkInfo}
                disabled={isLoadingNetworkInfo}
              >
                <RefreshCw
                  className={`w-4 h-4 ${
                    isLoadingNetworkInfo ? "animate-spin" : ""
                  }`}
                />
              </Button>
            </CardTitle>
            <CardDescription>
              Real-time network and connection details
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 gap-4">
              <div className="flex items-center justify-between p-3 bg-secondary/30 rounded-lg">
                <div className="flex items-center space-x-3">
                  <Globe className="w-5 h-5 text-primary" />
                  <span className="text-muted-foreground">Public IP</span>
                </div>
                <span className="font-mono text-sm">{networkInfo.ip}</span>
              </div>

              <div className="flex items-center justify-between p-3 bg-secondary/30 rounded-lg">
                <div className="flex items-center space-x-3">
                  <Wifi className="w-5 h-5 text-primary" />
                  <span className="text-muted-foreground">ISP Provider</span>
                </div>
                <span className="text-sm">{networkInfo.isp}</span>
              </div>

              <div className="flex items-center justify-between p-3 bg-secondary/30 rounded-lg">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span className="text-muted-foreground">Location</span>
                </div>
                <span className="text-sm">{networkInfo.location}</span>
              </div>

              <div className="flex items-center justify-between p-3 bg-secondary/30 rounded-lg">
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-primary" />
                  <span className="text-muted-foreground">Timezone</span>
                </div>
                <span className="text-sm">{networkInfo.timezone}</span>
              </div>

              <div className="flex items-center justify-between p-3 bg-secondary/30 rounded-lg">
                <div className="flex items-center space-x-3">
                  <Router className="w-5 h-5 text-primary" />
                  <span className="text-muted-foreground">Connection</span>
                </div>
                <Badge variant="outline" className="capitalize">
                  {networkInfo.connectionType}
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Clock className="w-5 h-5 text-primary" />
              <span>Recent Speed Tests</span>
            </CardTitle>
            <CardDescription>
              Your latest connection speed test results
            </CardDescription>
          </CardHeader>
          <CardContent>
            {testHistory.length === 0 ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-muted/50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-muted-foreground" />
                </div>
                <p className="text-muted-foreground">No test history yet</p>
                <p className="text-sm text-muted-foreground">
                  Run a speed test to see results here
                </p>
              </div>
            ) : (
              <div className="space-y-3">
                {testHistory.slice(0, 6).map((result, index) => (
                  <div
                    key={index}
                    className="p-4 bg-secondary/30 rounded-lg border border-border/30 hover:bg-secondary/50 transition-colors"
                  >
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-sm text-muted-foreground">
                        {result.timestamp.toLocaleDateString()}{" "}
                        {result.timestamp.toLocaleTimeString()}
                      </span>
                      <Badge variant="outline" className="text-xs">
                        {result.server}
                      </Badge>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="text-center">
                        <div
                          className={`text-lg font-bold ${getSpeedColor(
                            result.download,
                            "download"
                          )}`}
                        >
                          {result.download.toFixed(1)}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          ↓ Mbps
                        </div>
                      </div>
                      <div className="text-center">
                        <div
                          className={`text-lg font-bold ${getSpeedColor(
                            result.upload,
                            "upload"
                          )}`}
                        >
                          {result.upload.toFixed(1)}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          ↑ Mbps
                        </div>
                      </div>
                      <div className="text-center">
                        <div
                          className={`text-lg font-bold ${getPingColor(
                            result.ping
                          )}`}
                        >
                          {result.ping}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          ms ping
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
