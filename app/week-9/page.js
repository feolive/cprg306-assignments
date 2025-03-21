"use client";

import { useUserAuth } from "./_utils/auth-context";
import Layout from "./layout";
import SignIn from "./_utils/sign-in";
import SignOut from "./_utils/sign-out";

export default function Page() {
  const { user } = useUserAuth();

  return (
    <Layout>
      {user ? (
        <SignOut />
      ) : (
        <SignIn />
      )}
    </Layout>
  );
}
