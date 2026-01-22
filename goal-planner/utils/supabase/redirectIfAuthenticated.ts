import { createClient } from "./server";
import { redirect } from "next/navigation";

export async function redirectIfAuthenticated(
    path: string = "/calendar",
): Promise<void> {
    const supabase = await createClient();
    const { data } = await supabase.auth.getUser();

    if (data?.user) {
        redirect(path);
    }
}
