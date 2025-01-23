import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="mt-8">
        <div>
          <h1 className="text-2xl font-bold">CPRG 306: Web Development 2 - Assignments</h1>
        </div>
        <div className="mt-10">
          <Link className="text-blue-500 italic hover:underline underline-offset-1" href="/week-2">Week 2 Assignment</Link>
        </div>
      </div>
    </>
  );
}
