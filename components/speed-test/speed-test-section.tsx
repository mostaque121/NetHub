"use client";
import { getNetworkInfo, saveSpeedTest } from "@/app/actions/speed-test";
import { useEffect, useState } from "react";
import NetworkInfo from "./network-info";
import SpeedTestComponent from "./speed-test";

interface NetworkInfo {
  ip: string;
  isp: string;
  city: string;
  country: string;
  timezone: string;
}

export default function SpeedTestSection() {
  const [start, setStart] = useState(false);
  const [liveData, setLiveData] = useState<number | undefined>(undefined);
  const [speedData, setSpeedData] = useState<number | undefined>(undefined);
  const [networkInfo, setNetworkInfo] = useState<NetworkInfo>({
    ip: "Loading...",
    isp: "Loading...",
    city: "Loading...",
    country: "Loading...",
    timezone: "Loading...",
  });

  // ------------------- Fetch Network Info -------------------

  useEffect(() => {
    // Call server action
    getNetworkInfo().then(setNetworkInfo);
  }, []);

  // ------------------- DOWNLOAD TEST -------------------
  const runDownloadTest = async () => {
    const fileUrl = "/test-files/test20MB.bin";
    const targetSec = 8;
    let totalBytes = 0;
    const startTime = performance.now();
    let lastUpdate = 0;

    const fetchFileChunk = async () => {
      const res = await fetch(fileUrl);
      const reader = res.body?.getReader();
      if (!reader) return 0;

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        totalBytes += value?.length || 0;

        const elapsedSec = (performance.now() - startTime) / 1000;
        const now = performance.now();
        if (now - lastUpdate > 300) {
          const speedMbps = ((totalBytes / 1024 / 1024) * 8) / elapsedSec;
          setLiveData(speedMbps);
          lastUpdate = now;
        }
        if (elapsedSec >= targetSec) break;
      }
    };

    while ((performance.now() - startTime) / 1000 < targetSec) {
      await fetchFileChunk();
    }

    const elapsedSec = (performance.now() - startTime) / 1000;
    const finalSpeed = ((totalBytes / 1024 / 1024) * 8) / elapsedSec;

    setSpeedData(finalSpeed);
    setLiveData(finalSpeed);
    await saveSpeedTest({
      isp: networkInfo.isp,
      city: networkInfo.city,
      country: networkInfo.country,
      download: finalSpeed,
    });
  };

  // ------------------- HANDLE START -------------------
  const handleStart = async () => {
    setStart(true);
    setLiveData(undefined);

    // Wait 500ms before starting the download test
    await new Promise((resolve) => setTimeout(resolve, 1000));

    await runDownloadTest();
    setStart(false);
  };

  return (
    <div className="flex w-full px-4 md:px-8 items-center flex-col space-y-8 justify-center">
      <SpeedTestComponent
        speedData={speedData}
        liveData={liveData}
        start={start}
        handleStart={handleStart}
      />
      <NetworkInfo networkInfo={networkInfo} />
    </div>
  );
}
