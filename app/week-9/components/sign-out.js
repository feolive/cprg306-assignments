"use client";

import { useUserAuth } from "../_utils/auth-context";
import { useRouter } from "next/navigation";

export default function SignOut() {
  const { firebaseSignOut } = useUserAuth();
  const router = useRouter();

  const handleSignOut = async () => {
    try {
      await firebaseSignOut();
      router.replace("/week-9");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <button
        className="bg-red-500 text-white p-2 rounded-lg"
        onClick={handleSignOut}
      >
        Sign Out
      </button>
  )}