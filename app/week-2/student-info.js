import Link from "next/link";
import GithubIcon from "@/app/components/GithubIcon";

export default function StudentInfo() {
  return (
    <>
      <div className="mt-20 flex flex-col gap-2 items-start justify-center w-50 h-24 p-4 
      rounded-md shadow-md shadow-slate-500 transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-lg hover:shadow-blue-700">
        <h1 className="text-xl font-bold text-blue-700 drop-shadow-md">
          Xiang Wang
        </h1>
        <Link
          href="https://github.com/feolive/cprg306-assignments"
          alt="github"
        >
          <GithubIcon color="var(--foreground)" />
        </Link>
      </div>
    </>
  );
}
