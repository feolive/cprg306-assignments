import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="mt-8">
        <div>
          <h1 className="text-2xl font-bold">CPRG 306: Web Development 2 - Assignments</h1>
        </div>
        <div className="mt-10 flex flex-col items-start gap-2 ">
          <Link className="text-blue-500 italic hover:underline underline-offset-1" href="/week-2">Week 2 Assignment</Link>
          <Link className="text-blue-500 italic hover:underline underline-offset-1" href="/week-3">Week 3 Assignment</Link>
          <Link className="text-blue-500 italic hover:underline underline-offset-1" href="/week-4">Week 4 Assignment</Link>
          <Link className="text-blue-500 italic hover:underline underline-offset-1" href="/week-5">Week 5 Assignment</Link>
          <Link className="text-blue-500 italic hover:underline underline-offset-1" href="/week-6">Week 6 Assignment</Link>
          <Link className="text-blue-500 italic hover:underline underline-offset-1" href="/week-7">Week 7 Assignment</Link>
          <Link className="text-blue-500 italic hover:underline underline-offset-1" href="/week-8">Week 8 Assignment</Link>
          <Link className="text-blue-500 italic hover:underline underline-offset-1" href="/week-9">Week 9 Assignment</Link>
        </div>
      </div>
    </>
  );
}
