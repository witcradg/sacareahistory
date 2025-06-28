import { createClient } from "@/utils/supabase/server";
import { InfoIcon } from "lucide-react";
import { redirect } from "next/navigation";

export default async function ProtectedPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();
  console.log("Protected page user:", user);
  if (!user) {
    return redirect("/sign-in");
  }

  return (
    <div className="container flex-1 w-full flex flex-col gap-12 min-h-[50vh] items-center justify-center">
      <div className="w-full">
        <div className="bg-accent text-sm p-3 px-5 rounded-md text-foreground flex gap-3 items-center">
          <InfoIcon size="16" strokeWidth={2} />
          Thank you for signing in! Admins have been notified. If you need immediate access, please contact Dr. .
        </div>
      </div>
      <pre>
        {JSON.stringify(user, null, 2)}
      </pre>
    </div>
  );
}
