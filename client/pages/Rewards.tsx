import PixelLayout from "@/components/PixelLayout";
import { useState } from "react";
import SpinWheel from "@/components/SpinWheel";

const items = [
  { name: "Canteen Coupon", cost: 10 },
  { name: "Wi‑Fi Boost", cost: 12 },
  { name: "Library Pass", cost: 8 },
  { name: "Eco Bottle", cost: 18 },
];

export default function Rewards() {
  const [coins, setCoins] = useState(10);
  const [history, setHistory] = useState<string[]>([]);
  const [spinResult, setSpinResult] = useState<string | null>(null);
  const rewards = [
    { id: "coins", label: "10 EcoCoins", color: "#F4A261" },
    { id: "badge", label: "Badge", color: "#E27D60" },
    { id: "perk", label: "Canteen Coupon", color: "#6B705C" },
    { id: "discount", label: "Wi‑Fi Boost", color: "#145956" },
    { id: "bottle", label: "Eco Bottle", color: "#b2916f" },
    { id: "pass", label: "Library Pass", color: "#F4A261" },
    { id: "spin", label: "Free Spin", color: "#E27D60" },
    { id: "rare", label: "Rare Item", color: "#6B705C" },
  ];

  const buy = (name: string, cost: number) => {
    if (coins < cost) return;
    setCoins((c) => c - cost);
    setHistory((h) => [`Bought ${name} (−${cost})`, ...h]);
  };

  return (
    <PixelLayout>
      <div className="space-y-4">
        <h1 className="font-pixel text-xl">Rewards Center</h1>
        <div className="grid lg:grid-cols-4 gap-4">
          <section className="lg:col-span-3 pixel-card space-y-4">
            <div>
              <div className="font-pixel mb-2">Prize Cabinet</div>
              <div className="overflow-x-auto">
                <div className="flex gap-3 min-w-max">
                  {items.map((it) => (
                    <div key={it.name} className="pixel-card w-56 text-center">
                      <div className="h-28 bg-secondary mb-2" />
                      <div className="mb-1">{it.name}</div>
                      <div className="text-sm opacity-70 mb-2">
                        {it.cost} EcoCoins
                      </div>
                      <button
                        className="pixel-button w-full"
                        onClick={() => buy(it.name, it.cost)}
                      >
                        Buy
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <div className="font-pixel mb-2">Spinning Wheel</div>
              <div className="pixel-card p-4">
                <SpinWheel
                  rewards={rewards}
                  onResult={(r) => {
                    setHistory((h) => [`Won ${r.label}`, ...h]);
                    if (r.id === "coins") setCoins((c) => c + 10);
                    setSpinResult(r.label);
                  }}
                />
              </div>
            </div>
          </section>

          {spinResult && (
            <div
              role="dialog"
              aria-modal
              className="fixed inset-0 bg-black/40 grid place-items-center p-4"
            >
              <div className="pixel-card p-4 max-w-sm w-full text-center space-y-3">
                <div className="font-pixel">You won: {spinResult}</div>
                <div className="text-sm opacity-80">
                  Congrats! Your reward has been added.
                </div>
                <button
                  className="pixel-button"
                  onClick={() => setSpinResult(null)}
                >
                  Close
                </button>
              </div>
            </div>
          )}
          <aside className="pixel-card space-y-3">
            <div className="grid grid-cols-2 gap-2 text-center">
              <div className="pixel-card">
                <div className="text-2xl">{coins}</div>
                <div className="text-xs">EcoCoins</div>
              </div>
              <div className="pixel-card">
                <div className="text-2xl">1</div>
                <div className="text-xs">Daily free spins left</div>
              </div>
            </div>
            <div>
              <div className="font-pixel mb-2">Redeem History</div>
              <div className="pixel-card max-h-64 overflow-auto space-y-2 text-sm">
                {history.length ? (
                  history.map((h, i) => <div key={i}>{h}</div>)
                ) : (
                  <div className="opacity-70">No redemptions yet</div>
                )}
              </div>
            </div>
            <div>
              <div className="font-pixel mb-2">Buy Perks</div>
              <div className="grid grid-cols-2 gap-2">
                {[
                  "Printer Credits",
                  "Gym Pass",
                  "Bike Parking",
                  "Focus Room",
                ].map((p) => (
                  <button
                    key={p}
                    className="pixel-card text-left p-3 hover:bg-secondary"
                  >
                    {p}
                    <div className="text-xs opacity-70">EcoCoins</div>
                  </button>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </PixelLayout>
  );
}
