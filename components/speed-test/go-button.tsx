import { Download } from "lucide-react";

export default function GoButton({
  downloadSpeed,
}: {
  downloadSpeed?: number;
}) {
  return (
    <div className="flex cursor-pointer items-center justify-center w-[250px] h-[250px]">
      <div className="relative flex items-center justify-center w-full h-full rounded-full bg-card">
        <div className="border-primary/60 shadow-[0_0_20px_15px_rgba(94,234,212,0.6)] border-8 rounded-full">
          <div className="flex items-center  justify-center w-48 h-48 rounded-full border-8 border-primary ">
            {downloadSpeed ? (
              <div className="flex flex-col items-center text-card-foreground">
                <Download className="w-5 h-5 text-primary" />
                <span className="text-lg font-semibold mt-1">
                  {downloadSpeed.toFixed(1)}
                </span>
                <span className="text-xs">Mbps</span>
                <span className="mt-1.5 text-3xl font-semibold text-primary">
                  Again
                </span>
              </div>
            ) : (
              <span className="text-3xl font-semibold text-primary">GO</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
