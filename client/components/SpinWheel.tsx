import { useRef, useState } from "react";

export type Reward = { id: string; label: string; color?: string };

export default function SpinWheel({
  rewards = [],
  onResult,
  size = 240,
}: {
  rewards?: Reward[];
  onResult?: (r: Reward) => void;
  size?: number;
}) {
  const [spinning, setSpinning] = useState(false);
  const wheelRef = useRef<HTMLDivElement | null>(null);

  const segments = rewards.length || 8;

  function spin() {
    if (spinning) return;
    setSpinning(true);
    const winnerIndex = Math.floor(Math.random() * segments);
    const rounds = 6; // full rotations
    const segment = 360 / segments;
    const finalDeg = rounds * 360 + winnerIndex * segment + segment / 2;
    if (wheelRef.current) {
      wheelRef.current.style.transition =
        "transform 5s cubic-bezier(.2,.7,.2,1)";
      wheelRef.current.style.transform = `rotate(${finalDeg}deg)`;
    }
    setTimeout(() => {
      setSpinning(false);
      const r = rewards[winnerIndex] || {
        id: String(winnerIndex),
        label: `Prize ${winnerIndex + 1}`,
      };
      onResult?.(r);
      // reset a bit so future spins look nice
      if (wheelRef.current) {
        wheelRef.current.style.transition = "none";
        wheelRef.current.style.transform = `rotate(${winnerIndex * (360 / segments)}deg)`;
      }
    }, 5200);
  }

  const segAngle = 360 / segments;

  return (
    <div className="flex flex-col items-center">
      <div className="relative" style={{ width: size, height: size }}>
        <div
          ref={wheelRef}
          className="rounded-full overflow-hidden"
          style={{ width: size, height: size }}
        >
          <svg
            width={size}
            height={size}
            viewBox={`0 0 ${size} ${size}`}
            xmlns="http://www.w3.org/2000/svg"
          >
            <g transform={`translate(${size / 2},${size / 2})`}>
              {Array.from({ length: segments }).map((_, i) => {
                const start = i * segAngle - 90;
                const end = start + segAngle;
                const large = segAngle > 180 ? 1 : 0;
                const r = size / 2;
                const x1 = r * Math.cos((start * Math.PI) / 180);
                const y1 = r * Math.sin((start * Math.PI) / 180);
                const x2 = r * Math.cos((end * Math.PI) / 180);
                const y2 = r * Math.sin((end * Math.PI) / 180);
                const d = `M 0 0 L ${x1} ${y1} A ${r} ${r} 0 ${large} 1 ${x2} ${y2} Z`;
                const color =
                  rewards[i]?.color || (i % 2 ? "#F4A261" : "#E27D60");
                return (
                  <path
                    key={i}
                    d={d}
                    fill={color}
                    stroke="#145956"
                    strokeWidth={2}
                  />
                );
              })}
            </g>
          </svg>
        </div>
        <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-2 text-2xl">
          ▲
        </div>
      </div>
      <button
        disabled={spinning}
        onClick={spin}
        className={`pixel-button mt-3 ${spinning ? "opacity-60 cursor-not-allowed" : ""}`}
      >
        Spin
      </button>
    </div>
  );
}
