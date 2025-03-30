"use client";

import { useUserAuth } from "../_utils/auth-context";
import Link from "next/link";
import Layout from "../layout";

export default function Profile() {
  const { user } = useUserAuth();

  return (
    <Layout>
      <main className="mt-10 flex flex-col items-start justify-center gap-4">
        <header className="text-2xl font-bold text-green-400 italic">
          Profile Page
        </header>
        <h1 className="text-2xl font-bold text-foreground ">
          Welcome {user?.displayName}, ({user?.email})
        </h1>
        <Link
          className="text-blue-500 italic hover:underline underline-offset-1"
          href="/week-10/shopping-list"
        >
          Go to Shopping List
        </Link>
      </main>
    </Layout>
  );
}
