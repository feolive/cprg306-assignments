"use client";

import Layout from "./layout";
import { useRouter } from "next/navigation";
import { useEffect } from "react";


export default function Page() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/week-9/shopping-list");
  }, [router]);

  return (
    <></>
  );
}
