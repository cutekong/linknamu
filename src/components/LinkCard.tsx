import type { LinkItem } from "@/data/profile";

// 링크 하나를 카드 모양으로 보여 줍니다. 카드 전체가 클릭 영역입니다.
// index는 카드가 순서대로 하나씩 나타나게 하는 데 씁니다.
export default function LinkCard({ link, index }: { link: LinkItem; index: number }) {
  return (
    <a
      // 우리 서버(/go/링크id)를 거쳐 클릭 수를 기록한 뒤 진짜 주소로 이동합니다.
      href={`/go/${link.id}`}
      target="_blank"
      rel="noopener noreferrer"
      style={{ animationDelay: `${200 + index * 90}ms` }}
      className="group relative flex animate-fade-up items-center gap-4 overflow-hidden rounded-2xl border border-white/10 bg-white/5 px-4 py-3.5 backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:border-lime-300/50 hover:bg-white/10 hover:shadow-[0_8px_30px_-8px_rgba(163,230,53,0.45)] active:scale-[0.98]"
    >
      {/* 마우스를 올리면 카드 위로 한 줄기 빛이 지나갑니다. */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/2 -skew-x-12 bg-linear-to-r from-transparent via-white/15 to-transparent opacity-0 transition-all duration-700 group-hover:left-full group-hover:opacity-100"
      />

      <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-2xl transition duration-300 group-hover:-rotate-6 group-hover:scale-110">
        {link.emoji ?? "🔗"}
      </span>

      <span className="flex-1 text-center text-base font-medium text-white">
        {link.label}
      </span>

      <span
        aria-hidden
        className="flex size-11 shrink-0 items-center justify-center text-lg text-slate-400 transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-lime-300"
      >
        ↗
      </span>
    </a>
  );
}
