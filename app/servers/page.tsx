import ServerList from "@/components/servers/server-list";
import { getAllServers } from "../actions/server";

export default async function Page() {
  const servers = await getAllServers();
  return (
    <div>
      <ServerList servers={servers} />
    </div>
  );
}
