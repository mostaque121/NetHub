"use client";
import { Globe, Wifi } from "lucide-react";

interface NetworkInfo {
  networkInfo: {
    ip: string;
    isp: string;
    city: string;
    country: string;
    timezone: string;
  };
}

export default function NetworkInfo({ networkInfo }: NetworkInfo) {
  return (
    <div className="flex flex-row justify-center gap-6 p-4">
      {/* ISP & IP */}
      <div className="flex flex-col sm:flex-row-reverse w-[150px] sm:w-[300px] gap-2 sm:gap-4 items-center border border-border rounded-md p-3 bg-card text-card-foreground shadow-sm">
        <Wifi className="sm:w-8 sm:h-8 w-5 h-5 text-primary" />
        <div className="flex flex-col sm:items-end items-center">
          <span className="text-sm sm:text-base">{networkInfo.isp}</span>
          <span className="text-sm sm:text-base">{networkInfo.ip}</span>
        </div>
      </div>

      {/* City & Country */}
      <div className="flex flex-col sm:flex-row w-[150px] sm:w-[300px] gap-2 sm:gap-4 items-center border border-border rounded-md p-3 bg-card text-card-foreground shadow-sm">
        <Globe className="sm:w-8 sm:h-8 w-5 h-5 text-primary" />
        <div className="flex flex-col sm:items-start items-center">
          <span className="text-sm sm:text-base">{networkInfo.city}</span>
          <span className="text-sm sm:text-base">{networkInfo.country}</span>
        </div>
      </div>
    </div>
  );
}
