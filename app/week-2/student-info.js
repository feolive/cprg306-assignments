import Link from "next/link";
import GithubIcon from "@/app/components/GithubIcon";

export default function StudentInfo() {
  return (
    <>
      <div className="mt-10">
        <h1 className="text-2xl font-bold">Xiang Wang</h1>
        <Link href="https://github.com/feolive/cprg306-assignments" alt="github">
          {/* <Image className="w-12 h-12" src={githubMark} alt="github" /> */}
          <GithubIcon color="var(--foreground)" />
        </Link>
      </div>
    </>
  );
}
