import Background from "@/components/Background";
import Profile from "@/components/Profile";
import LinkCard from "@/components/LinkCard";
import { links } from "@/data/profile";

export default function Home() {
  return (
    <>
      <Background />

      {/* 모바일 우선: 가운데 한 줄로 쌓고, 넓은 화면에서도 폭을 제한합니다. */}
      <main className="relative mx-auto flex w-full max-w-md flex-1 flex-col gap-10 px-5 py-14">
        <Profile />

        <nav aria-label="링크 목록" className="flex flex-col gap-3.5">
          {links.map((link, index) => (
            <LinkCard key={link.id} link={link} index={index} />
          ))}
        </nav>

        <footer className="mt-auto pt-6 text-center text-xs text-slate-500">
          Made with 🌳 링크나무
        </footer>
      </main>
    </>
  );
}
