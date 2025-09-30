import LatestSpeedTest from "@/components/speed-test/latest-test";
import SpeedTestSection from "@/components/speed-test/speed-test-section";

export default function Page() {
  return (
    <main className="min-h-screen">
      <div className="py-16 ">
        <SpeedTestSection />
      </div>
      <LatestSpeedTest />
    </main>
  );
}
