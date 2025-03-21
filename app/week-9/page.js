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
        <main>
          <h1 className="text-2xl font-bold">Welcome {user?.displayName}, ({user?.email})</h1>
          <button className="bg-red-500 text-white p-2 rounded-md" onClick={handleSignOut}>Sign Out</button>
          <Link href="/week-9/shopping-list">Go to Shopping List</Link>
        </main>
      ) : (
        <div>
          <button className="bg-green-400 text-white p-2 rounded-md" onClick={handleSignIn}>Sign In</button>
        </div>
      )}
    </Layout>
  );
}
