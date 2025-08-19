"use client";
import { authClient } from "@/lib/auth-client";

export default function Home() {
  return (
    <main className="min-h-dvh grid place-items-center bg-[url('/window.svg')] bg-no-repeat bg-center">
      <section className="flex flex-col items-center gap-6 p-6">
        <div className="flex flex-col items-center gap-2 text-center">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
            Træningsklar
          </h1>
          <p className="text-muted-foreground max-w-[42ch]">
            Planlæg og del træningspas, øvelser og hold på én platform.
          </p>
        </div>
        <button
          className="h-11 px-6 rounded-md text-base font-semibold bg-primary text-primary-foreground shadow-xs hover:brightness-95 transition"
          onClick={() => {
            authClient.signIn.social({ provider: "google" });
          }}
        >
          Begynd med Google
        </button>
      </section>
    </main>
  );
}
