import Image from "next/image";
import { profile } from "@/data/profile";

// 화면 위쪽의 프로필 영역 (사진, 이름, 한 줄 소개)
export default function Profile() {
  return (
    <header className="flex flex-col items-center gap-3">
      <div className="relative size-24 overflow-hidden rounded-full bg-black/10 dark:bg-white/15">
        {profile.imageUrl ? (
          <Image
            src={profile.imageUrl}
            alt={`${profile.name} 프로필 사진`}
            fill
            sizes="96px"
            className="object-cover"
          />
        ) : (
          // 사진이 없을 때는 이름 첫 글자를 대신 보여줍니다.
          <span className="flex size-full items-center justify-center text-3xl font-semibold">
            {profile.name.slice(0, 1)}
          </span>
        )}
      </div>

      <h1 className="text-xl font-bold">{profile.name}</h1>
      <p className="text-sm opacity-70">{profile.bio}</p>
    </header>
  );
}
