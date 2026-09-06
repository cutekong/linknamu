import Profile from "@/components/Profile";
import LinkCard from "@/components/LinkCard";
import { links } from "@/data/profile";

export default function Home() {
  return (
    // 모바일 우선: 가운데 한 줄로 쌓고, 넓은 화면에서도 폭을 제한합니다.
    <main className="mx-auto flex w-full max-w-md flex-1 flex-col gap-8 px-5 py-12">
      <Profile />

      <nav className="flex flex-col gap-3">
        {links.map((link) => (
          <LinkCard key={link.id} link={link} />
        ))}
      </nav>
    </main>
  );
}
