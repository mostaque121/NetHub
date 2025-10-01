import { redirect } from "next/navigation";
import { verifySession } from "./auth/session";

export async function checkAccess() {
  try {
    const session = await verifySession();
    if (!session.isAuth) {
      redirect("/admin-login");
    } else {
      return session.username;
    }
  } catch (error) {
    console.error("Error while checking admin status:", error);
    redirect("/admin-login");
  }
}
