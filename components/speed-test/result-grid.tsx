import { Activity, Download, Upload } from "lucide-react";
import { Card } from "../ui/card";

interface SectionProps {
  speedData: {
    download?: number;
    upload?: number;
    ping?: number;
  };
}

export default function SpeedTestResultGrid({ speedData }: SectionProps) {
  const formatValue = (val?: number) => {
    if (val == null || isNaN(val)) return "-";
    return Number(val.toFixed(1)).toString();
  };
  const items = [
    {
      label: "Download",
      value: formatValue(speedData.download),
      unit: "Mbps",
      icon: Download,
      iconColor: "text-chart-1",
      bgColor: "bg-chart-1/10",
    },
    {
      label: "Upload",
      value: formatValue(speedData.upload),
      unit: "Mbps",
      icon: Upload,
      iconColor: "text-chart-2",
      bgColor: "bg-chart-2/10",
    },
    {
      label: "Ping",
      value: formatValue(speedData.ping),
      unit: "ms",
      icon: Activity,
      iconColor: "text-chart-3",
      bgColor: "bg-chart-3/10",
    },
  ];

  return (
    <div className="w-full">
      {/* Responsive grid: 1 col on mobile, 3 cols on larger screens */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-1.5 sm:gap-3">
        {items.map(({ label, value, unit, icon: Icon, iconColor, bgColor }) => (
          <>
            <div key={label}>
              <Card
                key={label}
                className="p-4 border-border/50 sm:flex hidden bg-card/50 backdrop-blur"
              >
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-md ${bgColor}`}>
                    <Icon className={`h-5 w-5 ${iconColor}`} />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-muted-foreground">{label}</div>
                    <div className="text-lg font-bold font-mono tabular-nums">
                      {value}
                      <span className="text-sm text-muted-foreground ml-1">
                        {unit}
                      </span>
                    </div>
                  </div>
                </div>
              </Card>

              <div className="flex justify-between w-full items-center sm:hidden">
                <div className="flex w-full items-center  ">
                  <span>
                    <Icon className={`h-5 w-5 ${iconColor}`} />
                  </span>
                  <span className="text-lg ml-3">{label}</span>
                  <span className="text-sm text-muted-foreground ml-1.5">
                    {unit}
                  </span>
                </div>
                <div>
                  <span className="text-lg font-bold font-mono tabular-nums">
                    {value}
                  </span>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}
