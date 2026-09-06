import type { LinkItem } from "@/data/profile";

// 링크 하나를 카드 모양으로 보여 줍니다. 카드 전체가 클릭 영역입니다.
export default function LinkCard({ link }: { link: LinkItem }) {
  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block rounded-2xl border border-black/15 px-5 py-4 text-center font-medium transition hover:bg-black/5 active:scale-[0.99] dark:border-white/20 dark:hover:bg-white/10"
    >
      {link.label}
    </a>
  );
}
