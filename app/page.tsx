import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Activity, Gauge, Globe, Shield, Zap } from "lucide-react";
import Link from "next/link";

const features = [
  {
    icon: Globe,
    title: "BDIX Links",
    description:
      "Access local network resources and websites with optimized routing",
    href: "/servers",
  },

  {
    icon: Gauge,
    title: "Speed Test",
    description:
      "Test your internet connection speed, ping, and network diagnostics",
    href: "/speedtest",
  },
];

const stats = [
  { label: "Network Latency", value: "< 5ms", icon: Zap },
  { label: "Uptime", value: "99.9%", icon: Shield },
  { label: "Active Connections", value: "24/7", icon: Activity },
];

export default function HomePage() {
  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 ">
          {"Personal Network"}
          <br />
          <span className="text-primary">Command Center</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
          {
            "Your centralized hub for BDIX resources, IPTV streaming, and network diagnostics. Built for power users who demand performance."
          }
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href={"/speedtest"}>
            <Button size="lg" className="glow-cyan cursor-pointer">
              <Gauge className="w-5 h-5 mr-2" />
              Test Speed Now
            </Button>
          </Link>
          <Link href={"/servers"}>
            <Button className="cursor-pointer" variant="outline" size="lg">
              <Globe className="w-5  h-5 mr-2" />
              Browse BDIX
            </Button>
          </Link>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card
              key={index}
              className="text-center border-border/50 bg-card/50 backdrop-blur-sm"
            >
              <CardContent className="pt-6">
                <Icon className="w-8 h-8 mx-auto mb-3 text-primary" />
                <div className="text-2xl font-bold text-primary mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <Card
              key={index}
              className="group hover:glow-cyan transition-all duration-300 border-border/50 bg-card/50 backdrop-blur-sm"
            >
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link href={feature.href}>
                  <Button className="w-full cursor-pointer group-hover:glow-cyan transition-all duration-300">
                    {"Access"} {feature.title}
                  </Button>
                </Link>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Footer */}
      <footer className="mt-24 pt-12 border-t border-border/50 text-center">
        <p className="text-muted-foreground">
          {"Built for personal use • Network utilities at your fingertips"}
        </p>
      </footer>
    </main>
  );
}
