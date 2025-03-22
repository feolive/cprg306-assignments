"use client";

import { useUserAuth } from "../_utils/auth-context";
import { PROVIDER } from "../_utils/enums";

export default function SignIn() {

    const { firebaseSignIn } = useUserAuth();

    const handleSignIn = async (provider) => {
      try {
        await firebaseSignIn(provider);
      } catch (error) {
        console.error(error);
      }
    };
  

  return (
    <main className="mt-10 flex flex-col items-center justify-center gap-4">
          <header className="text-2xl font-bold text-green-400 italic">Sign In</header>
          <button className="bg-black text-white font-bold p-2 rounded-lg" onClick={() => handleSignIn(PROVIDER.GITHUB)}>GitHub</button>
          <button className="bg-blue-400 font-bold bg-clip-text text-transparent border border-blue-400 p-2 rounded-lg" onClick={() => handleSignIn(PROVIDER.GOOGLE)}>Google</button>
    </main>
  );
}