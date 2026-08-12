import Image from "next/image";

const PHOTOS = [
  { seed: "hero-collage-1", top: "0%", left: "8%", size: 150, blob: "var(--blob-purple)", rotate: "-6deg" },
  { seed: "hero-collage-2", top: "22%", left: "58%", size: 130, blob: "var(--blob-pink)", rotate: "4deg" },
  { seed: "hero-collage-3", top: "58%", left: "18%", size: 120, blob: "var(--blob-yellow)", rotate: "3deg" },
];

export default function HeroCollage() {
  return (
    <div className="relative hidden h-[420px] w-full max-w-sm lg:block" aria-hidden="true">
      {PHOTOS.map((p) => (
        <div
          key={p.seed}
          className="absolute overflow-hidden rounded-[2rem] shadow-lg"
          style={{
            top: p.top,
            left: p.left,
            width: p.size,
            height: p.size,
            transform: `rotate(${p.rotate})`,
            backgroundColor: p.blob,
          }}
        >
          <div className="absolute -inset-4 -z-10 rounded-[2.5rem] blur-2xl" style={{ backgroundColor: p.blob }} />
          <Image
            src={`https://picsum.photos/seed/${p.seed}/300/300`}
            alt=""
            fill
            sizes="150px"
            className="object-cover"
          />
        </div>
      ))}
    </div>
  );
}
