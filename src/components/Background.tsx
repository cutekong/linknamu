// 화면 뒤에 깔리는 장식 배경 (떠다니는 빛 덩어리 + 점 무늬)
export default function Background() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute -left-20 -top-24 size-80 animate-blob rounded-full bg-cyan-500/30 blur-3xl" />
      <div className="absolute -right-24 top-1/3 size-96 animate-blob rounded-full bg-blue-600/30 blur-3xl [animation-delay:-7s]" />
      <div className="absolute -bottom-24 left-1/4 size-80 animate-blob rounded-full bg-lime-400/20 blur-3xl [animation-delay:-14s]" />

      {/* 가운데는 진하고 가장자리로 갈수록 사라지는 점 무늬 */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:22px_22px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
    </div>
  );
}
