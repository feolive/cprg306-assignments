import { useUserAuth } from "./auth-context";
import Link from "next/link";

export default function SignOut() {
  const { user, firebaseSignOut } = useUserAuth();

  const handleSignOut = async () => {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main className="mt-10 flex flex-col items-start justify-center gap-4">
          <header className="text-2xl font-bold text-green-400 italic">Welcome to the Shopping List App</header>
          <h1 className="text-2xl font-bold text-foreground ">Welcome {user?.displayName}, ({user?.email})</h1>
          <button className="bg-red-500 text-white p-2 rounded-md" onClick={handleSignOut}>Sign Out</button>
          <Link className="text-blue-500 italic hover:underline underline-offset-1" href="/week-9/shopping-list">Go to Shopping List</Link>
    </main>
  );
}