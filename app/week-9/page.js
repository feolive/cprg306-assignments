"use client";

import Link from "next/link";
import { useUserAuth } from "./_utils/auth-context";
import Layout from "./layout";

export default function Landing() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  const handleSignIn = async () => {
    try {
      let res = await gitHubSignIn();
    } catch (error) {
      console.error(error);
    }
  };

  const handleSignOut = async () => {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Layout>
      {user ? (
        <main className="mt-10 flex flex-col items-start justify-center gap-4">
          <header className="text-2xl font-bold text-green-400 italic">Welcome to the Shopping List App</header>
          <h1 className="text-2xl font-bold text-foreground ">Welcome {user?.displayName}, ({user?.email})</h1>
          <button className="bg-red-500 text-white p-2 rounded-md" onClick={handleSignOut}>Sign Out</button>
          <Link className="text-blue-500 italic hover:underline underline-offset-1" href="/week-9/shopping-list">Go to Shopping List</Link>
        </main>
      ) : (
        <main className="mt-10 flex flex-col items-center justify-center gap-4">
          <header className="text-2xl font-bold text-green-400 italic">Shopping List App</header>
          <button className="bg-black text-white p-2 rounded-lg" onClick={handleSignIn}>Sign In with GitHub</button>
        </main>
      )}
    </Layout>
  );
}
