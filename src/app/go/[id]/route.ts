import { after } from "next/server";
import { links } from "@/data/profile";
import { getMongoClient } from "@/lib/mongodb";

// MongoDB의 clicks 컬렉션에 저장되는 문서 모양 (링크 하나당 문서 하나)
type ClickDoc = {
  _id: string; // 링크 id (예: "github")
  count: number; // 누적 클릭 수
  lastClickedAt: Date; // 마지막으로 클릭된 시각
};

// 링크 카드를 누르면 이 주소(/go/링크id)를 먼저 거칩니다.
// 1) 방문자를 진짜 주소로 바로 보내고  2) 그 뒤에 MongoDB에 클릭 수를 1 올립니다.
export async function GET(_request: Request, ctx: RouteContext<"/go/[id]">) {
  const { id } = await ctx.params;
  const link = links.find((item) => item.id === id);

  // 목록에 없는 id는 거절합니다. (아무 사이트로나 보내는 데 악용되지 않도록)
  if (!link) {
    return new Response("존재하지 않는 링크입니다.", { status: 404 });
  }

  // 응답을 보낸 뒤에 기록하므로, 방문자는 DB 저장을 기다리지 않습니다.
  after(async () => {
    try {
      const client = await getMongoClient();
      await client
        .db("linknamu")
        .collection<ClickDoc>("clicks")
        .updateOne(
          { _id: link.id },
          { $inc: { count: 1 }, $set: { lastClickedAt: new Date() } },
          { upsert: true }, // 처음 눌린 링크면 문서를 새로 만듭니다.
        );
    } catch (error) {
      // 기록에 실패해도 방문자는 이미 이동했으므로, 서버 로그만 남깁니다.
      console.error("클릭 수 기록 실패:", error);
    }
  });

  return new Response(null, {
    status: 307,
    headers: {
      Location: link.url,
      // 브라우저가 이동 결과를 기억해 두면 다음 클릭이 서버를 거치지 않으므로 막아 둡니다.
      "Cache-Control": "no-store",
    },
  });
}
