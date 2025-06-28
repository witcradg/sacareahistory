import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";

export default async function ManagerRequestsPage() {
	const supabase = await createClient();

	// Fetch users with approved: false
	const { data: users, error } = await supabase
		.from("profiles")
		.select("id, email, full_name")
		.eq("approved", false);

	async function approveUser(formData: FormData) {
		"use server";
		const userId = formData.get("userId");
		const supabase = await createClient();
		await supabase
			.from("profiles")
			.update({ approved: true, role: "editor" })
			.eq("id", userId);
		revalidatePath("/protected/manager/requests");
	}

	return (
		<div className="flex flex-col items-center justify-center min-h-[50vh]">
			<div className="text-lg font-semibold mb-4">Pending User Approvals</div>
			{error && <div className="text-red-500">Error loading users.</div>}
			{!users || users.length === 0 ? (
				<div className="text-muted-foreground">No pending users.</div>
			) : (
				<ul className="w-full max-w-md space-y-4">
					{users.map((user: any) => (
						<li
							key={user.id}
							className="flex items-center justify-between bg-muted p-3 rounded"
						>
							<div>
								<div className="font-medium">{user.full_name || user.email}</div>
								<div className="text-xs text-muted-foreground">
									{user.email}
								</div>
							</div>
							<form action={approveUser}>
								<input type="hidden" name="userId" value={user.id} />
								<button
									type="submit"
									className="px-3 py-1 bg-primary text-white rounded hover:bg-primary/80 text-sm"
								>
									Approve
								</button>
							</form>
						</li>
					))}
				</ul>
			)}
		</div>
	);
}
