import Image from "next/image";

const PHOTOS = [
  {
    src: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=400&h=400&fit=crop&auto=format&q=80",
    top: "2%",
    left: "8%",
    size: 150,
    rotateZ: -8,
    rotateY: 14,
    translateZ: 30,
    z: 3,
  },
  {
    src: "https://images.unsplash.com/photo-1660314002642-77bbfe3e9b48?w=400&h=400&fit=crop&auto=format&q=80",
    top: "34%",
    left: "44%",
    size: 170,
    rotateZ: 6,
    rotateY: -10,
    translateZ: 60,
    z: 2,
  },
  {
    src: "https://images.unsplash.com/photo-1763896081109-ed6bf56ae955?w=400&h=400&fit=crop&auto=format&q=80",
    top: "58%",
    left: "4%",
    size: 140,
    rotateZ: -4,
    rotateY: 8,
    translateZ: 10,
    z: 1,
  },
];

const MOBILE_ROTATIONS = [-6, 4, -3];

export default function HeroPhotos() {
  return (
    <>
      {/* Desktop: absolutely-positioned 3D collage */}
      <div
        className="relative hidden h-[420px] w-full max-w-md lg:block"
        style={{ perspective: "1400px" }}
        aria-hidden="true"
      >
        {PHOTOS.map((p, i) => (
          <div
            key={i}
            className="absolute"
            style={{
              top: p.top,
              left: p.left,
              width: p.size,
              height: p.size,
              zIndex: p.z,
              transform: `rotateY(${p.rotateY}deg) rotateZ(${p.rotateZ}deg) translateZ(${p.translateZ}px)`,
            }}
          >
            <div className="tape-corner relative h-full w-full overflow-hidden rounded-2xl shadow-2xl ring-4 ring-paper">
              <Image src={p.src} alt="" fill sizes="170px" className="object-cover" />
            </div>
          </div>
        ))}
      </div>

      {/* Mobile/tablet: simple overlapping row, no 3D */}
      <div className="flex w-full justify-center gap-3 py-2 lg:hidden" aria-hidden="true">
        {PHOTOS.map((p, i) => (
          <div
            key={i}
            className="tape-corner relative h-24 w-24 shrink-0 overflow-hidden rounded-xl shadow-lg ring-2 ring-paper sm:h-28 sm:w-28"
            style={{ transform: `rotate(${MOBILE_ROTATIONS[i]}deg)` }}
          >
            <Image src={p.src} alt="" fill sizes="112px" className="object-cover" />
          </div>
        ))}
      </div>
    </>
  );
}
