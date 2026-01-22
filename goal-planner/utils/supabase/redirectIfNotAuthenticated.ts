import { createClient } from "./server";
import { redirect } from "next/navigation";

export async function redirectIfNotAuthenticated(
    path: string = "/landing",
): Promise<void> {
    const supabase = await createClient();
    const { data } = await supabase.auth.getUser();

    if (!data?.user) {
        redirect(path);
    }
}
