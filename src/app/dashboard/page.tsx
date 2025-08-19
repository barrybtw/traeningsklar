import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import CreateTeamForm from "@/app/dashboard/CreateTeamForm";

export default async function DashboardPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/");
  }

  return (
    <main className="mx-auto max-w-4xl px-4 py-10 space-y-8">
      <header className="space-y-1">
        <h1 className="text-3xl font-bold">
          Hej {session.user.name?.split(" ")[0] ?? "træner"}
        </h1>
        <p className="text-muted-foreground">
          Overblik over dine hold, øvelser og træningspas
        </p>
      </header>

      {/* Tomtilstand: ingen hold */}
      <section className="rounded-lg border p-6 grid gap-4">
        <div>
          <h2 className="text-xl font-semibold">Dine hold</h2>
          <p className="text-muted-foreground">Du har ingen hold endnu.</p>
        </div>

        <CreateTeamForm />
      </section>

      <section className="grid md:grid-cols-2 gap-6">
        <div className="rounded-lg border p-6">
          <h2 className="text-lg font-semibold mb-2">Øvelser</h2>
          <p className="text-muted-foreground">Kommer snart.</p>
        </div>
        <div className="rounded-lg border p-6">
          <h2 className="text-lg font-semibold mb-2">Træningspas</h2>
          <p className="text-muted-foreground">Kommer snart.</p>
        </div>
      </section>
    </main>
  );
}
