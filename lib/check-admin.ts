import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { auth } from "./auth";

export async function checkAccess() {
  try {
    const session = await auth.api.getSession({
      headers: await headers(),
    });
    if (!session || session.user.role !== "admin") {
      redirect("/admin-login");
    } else {
      return session.user.name;
    }
  } catch (error) {
    console.error("Error while checking admin status:", error);
    redirect("/admin-login");
  }
}
