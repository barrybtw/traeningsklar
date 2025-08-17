"use client";
import { authClient, useSession } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div>
      <button
        onClick={() => {
          authClient.signIn.social({ provider: "google" });
        }}
      >
        Login med Google
      </button>
      <button onClick={() => authClient.signOut()}>Log ud</button>
    </div>
  );
}
