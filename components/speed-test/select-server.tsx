"use client";
interface SectionProps {
  selectedServer: string;
  setSelectedServer: (value: string) => void;
}
export default function SelectServer({
  selectedServer,
  setSelectedServer,
}: SectionProps) {
  const servers = [
    { id: "local", name: "My Server (BD)", url: "/test-files/test20MB.bin" },
    {
      id: "hetzner-ash",
      name: "Hetzner (USA - Ashburn)",
      url: "https://ash-speed.hetzner.com/100MB.bin",
    },
    {
      id: "hetzner-fsn",
      name: "Hetzner (Germany - Falkenstein)",
      url: "https://fsn1-speed.hetzner.com/100MB.bin",
    },
    {
      id: "hetzner-sin",
      name: "Hetzner (Singapore)",
      url: "https://sin-speed.hetzner.com/100MB.bin",
    },
  ];

  return (
    <div>
      <select
        value={selectedServer}
        onChange={(e) => setSelectedServer(e.target.value)}
        className="border px-3 py-2 rounded"
      >
        {servers.map((server) => (
          <option key={server.id} value={server.id}>
            {server.name}
          </option>
        ))}
      </select>
    </div>
  );
}
