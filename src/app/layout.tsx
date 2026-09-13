import type { Metadata } from "next";
import { Black_Han_Sans, IBM_Plex_Sans_KR } from "next/font/google";
import "./globals.css";

// 본문 글꼴: 개발자 느낌이 나는 깔끔한 한글 글꼴
const plexKr = IBM_Plex_Sans_KR({
  variable: "--font-plex-kr",
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

// 제목(이름) 글꼴: 두껍고 힘 있는 한글 글꼴
const blackHan = Black_Han_Sans({
  variable: "--font-black-han",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "링크나무",
  description: "내 모든 링크를 한 페이지에. 하나의 URL로 공유하세요.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ko"
      className={`${plexKr.variable} ${blackHan.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
