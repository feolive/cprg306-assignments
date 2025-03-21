"use client";

import { useUserAuth } from "./auth-context";

export default function SignIn() {

    const { gitHubSignIn } = useUserAuth();

    const handleSignIn = async () => {
      try {
        await gitHubSignIn();
      } catch (error) {
        console.error(error);
      }
    };
  

  return (
    <main className="mt-10 flex flex-col items-center justify-center gap-4">
          <header className="text-2xl font-bold text-green-400 italic">Shopping List App</header>
          <button className="bg-black text-white p-2 rounded-lg" onClick={handleSignIn}>Sign In with GitHub</button>
    </main>
  );
}