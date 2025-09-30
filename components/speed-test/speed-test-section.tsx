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
    const fetchNetworkInfo = async () => {
      try {
        // Step 1: Get client IP from ipify
        const ipRes = await fetch("https://api.ipify.org/?format=json");
        const ipData = await ipRes.json();

        // Step 2: Fetch ISP info via server action
        const info = await getNetworkInfo(ipData.ip);
        setNetworkInfo(info);
      } catch (err) {
        console.error(err);
        setNetworkInfo({
          ip: "Failed to load",
          isp: "Failed to load",
          city: "Failed to load",
          country: "Failed to load",
          timezone: "Failed to load",
        });
      }
    };

    fetchNetworkInfo();
  }, []);

  // ------------------- DOWNLOAD TEST -------------------
  const runDownloadTest = async () => {
    const fileUrl = "/test-files/test20MB.bin"; // replace with real test file URL
    const targetSec = 8; // test duration in seconds
    let totalBytes = 0;
    const startTime = performance.now();
    let lastUpdate = 0;

    const controller = new AbortController();
    const signal = controller.signal;

    // Automatically stop fetching after targetSec
    const timeoutId = setTimeout(() => controller.abort(), targetSec * 1000);

    try {
      const res = await fetch(fileUrl, { cache: "no-store", signal });
      if (!res.body) throw new Error("No response body available");

      const reader = res.body.getReader();

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        totalBytes += value?.length || 0;

        const elapsedSec = (performance.now() - startTime) / 1000;
        const now = performance.now();

        // Update live speed every 300ms
        if (now - lastUpdate > 300) {
          const speedMbps = ((totalBytes / 1024 / 1024) * 8) / elapsedSec;
          setLiveData(speedMbps); // your live update function
          lastUpdate = now;
        }
      }
    } catch (err: unknown) {
      if (err instanceof DOMException && err.name === "AbortError") {
        // Fetch was aborted due to timeout — expected behavior
      } else {
        // Unexpected error
        console.error("Download test error:", err);
        throw err;
      }
    } finally {
      clearTimeout(timeoutId);
    }

    const elapsedSec = (performance.now() - startTime) / 1000;
    const finalSpeed = ((totalBytes / 1024 / 1024) * 8) / elapsedSec;

    // Final updates
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
