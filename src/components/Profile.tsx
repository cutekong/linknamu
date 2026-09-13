import Image from "next/image";
import { profile } from "@/data/profile";

// 사진 테두리에 쓰는 무지개색 (라임 → 하늘 → 파랑)
const ringGradient =
  "bg-[conic-gradient(from_0deg,#a3e635,#22d3ee,#3b82f6,#a3e635)]";

// 화면 위쪽의 프로필 영역 (사진, 이름, 한 줄 소개)
export default function Profile() {
  // 소개 글을 "|" 기준으로 나눠 작은 태그 여러 개로 보여줍니다.
  const bioParts = profile.bio
    .split("|")
    .map((part) => part.trim())
    .filter(Boolean);

  return (
    <header className="flex animate-fade-up flex-col items-center text-center">
      <div className="relative size-36">
        {/* 사진 뒤에서 은은하게 번지는 빛 */}
        <div aria-hidden className={`absolute -inset-2 animate-spin-slow rounded-full opacity-60 blur-xl ${ringGradient}`} />
        {/* 천천히 도는 무지개 테두리 */}
        <div aria-hidden className={`absolute inset-0 animate-spin-slow rounded-full ${ringGradient}`} />

        <div className="absolute inset-1 overflow-hidden rounded-full border-4 border-background bg-slate-800">
          {profile.imageUrl ? (
            <Image
              src={profile.imageUrl}
              alt={`${profile.name} 프로필 사진`}
              fill
              sizes="144px"
              preload
              className="object-cover"
            />
          ) : (
            // 사진이 없을 때는 이름 첫 글자를 대신 보여줍니다.
            <span className="flex size-full items-center justify-center font-display text-5xl">
              {profile.name.slice(0, 1)}
            </span>
          )}
        </div>
      </div>

      <p className="mt-7 text-sm font-medium tracking-wide text-lime-300">
        안녕하세요{" "}
        <span className="inline-block origin-[70%_70%] animate-wave">👋</span>
      </p>

      {/* Black Han Sans는 글꼴 자체가 아주 굵어서 굵기를 따로 더하지 않습니다. */}
      <h1 className="mt-1 bg-linear-to-r from-white via-cyan-100 to-lime-200 bg-clip-text pb-1 font-display text-5xl font-normal leading-tight text-transparent">
        {profile.name}
      </h1>

      <ul className="mt-4 flex flex-wrap justify-center gap-2">
        {bioParts.map((part) => (
          <li
            key={part}
            className="rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-sm text-slate-200 backdrop-blur-md"
          >
            {part}
          </li>
        ))}
      </ul>
    </header>
  );
}
