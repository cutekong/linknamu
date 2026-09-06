// 프로필과 링크 목록을 한곳에 모아 둔 파일입니다.
// 내용을 바꾸고 싶으면 아래 값만 수정하면 화면에 바로 반영됩니다.

export type LinkItem = {
  id: string;   // 링크를 구분하는 고유 값 (클릭 수 집계에 사용할 예정)
  label: string; // 카드에 보이는 글자
  url: string;   // 이동할 주소
};

export const profile = {
  name: "김클로",
  bio: "세계최강 바이브코더",
  // 프로필 사진 주소. 비워 두면 이름 첫 글자가 원 안에 표시됩니다.
  imageUrl: "",
};

export const links: LinkItem[] = [
  { id: "github", label: "GitHub", url: "https://github.com" },
  { id: "blog", label: "블로그", url: "https://example.com" },
  { id: "instagram", label: "Instagram", url: "https://instagram.com" },
];
