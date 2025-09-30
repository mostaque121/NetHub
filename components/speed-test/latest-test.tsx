import { getLatestTest } from "@/app/actions/speed-test";
import { format } from "date-fns";
import { Clock, Zap } from "lucide-react";

export default async function LatestSpeedTest() {
  const LatestSpeedTest = await getLatestTest();

  const getSpeedColor = (speed: number) => {
    if (speed >= 50) return "text-primary";
    if (speed >= 25) return "text-yellow-400";
    return "text-red-400";
  };

  return (
    <div className="border-border/50 px-4 md:px-8 py-12 bg-card/50 backdrop-blur-sm">
      <div className="pb-6">
        <h2 className="flex items-center space-x-2">
          <Clock className="w-5 h-5 text-primary" />
          <span>Recent Speed Tests</span>
        </h2>
        <p>latest connection speed test results</p>
      </div>
      <div>
        {LatestSpeedTest.length === 0 ? (
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
            {LatestSpeedTest.slice(0, 6).map((result, index) => (
              <div
                key={index}
                className="p-4 bg-secondary/30 rounded-lg border border-border/30 hover:bg-secondary/50 transition-colors"
              >
                <div className="grid grid-cols-4 gap-2 sm:gap-4 text-center items-center">
                  {/* Time */}
                  <div className="text-sm text-left text-muted-foreground">
                    {format(new Date(result.createdAt), "dd/MM/yyyy h:mm a")}
                  </div>

                  {/* ISP */}
                  <div className="text-sm text-muted-foreground">
                    {result.isp}
                  </div>

                  {/* City, Country */}
                  <div className="text-sm text-muted-foreground">
                    {result.city}, {result.country}
                  </div>

                  {/* Download Speed */}
                  <div className="text-lg flex flex-col sm:flex-row items-center gap-1.5 justify-end font-bold text-center">
                    <span className={getSpeedColor(result.download)}>
                      {result.download.toFixed(1)}
                    </span>{" "}
                    <span className="text-sm">↓ Mbps</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
