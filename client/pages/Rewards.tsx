import PixelLayout from "@/components/PixelLayout";
import { useState } from "react";

const items = [
  { name: "Canteen Coupon", cost: 10 },
  { name: "Wi‑Fi Boost", cost: 12 },
  { name: "Library Pass", cost: 8 },
  { name: "Eco Bottle", cost: 18 },
];

export default function Rewards() {
  const [coins, setCoins] = useState(10);
  const [history, setHistory] = useState<string[]>([]);

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
                      <div className="h-28 bg-secondary mb-2"/>
                      <div className="mb-1">{it.name}</div>
                      <div className="text-sm opacity-70 mb-2">{it.cost} EcoCoins</div>
                      <button className="pixel-button w-full" onClick={() => buy(it.name, it.cost)}>Buy</button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <div className="font-pixel mb-2">Spinning Wheel</div>
              <div className="pixel-card h-40 grid place-items-center">Spin-to-win coming alive ✨</div>
              <button className="pixel-button mt-2">Spin</button>
            </div>
          </section>
          <aside className="pixel-card space-y-3">
            <div className="grid grid-cols-2 gap-2 text-center">
              <div className="pixel-card"><div className="text-2xl">{coins}</div><div className="text-xs">EcoCoins</div></div>
              <div className="pixel-card"><div className="text-2xl">1</div><div className="text-xs">Daily free spins left</div></div>
            </div>
            <div>
              <div className="font-pixel mb-2">Redeem History</div>
              <div className="pixel-card max-h-64 overflow-auto space-y-2 text-sm">
                {history.length ? history.map((h,i)=>(<div key={i}>{h}</div>)) : <div className="opacity-70">No redemptions yet</div>}
              </div>
            </div>
            <div>
              <div className="font-pixel mb-2">Buy Perks</div>
              <div className="grid grid-cols-2 gap-2">
                {["Printer Credits","Gym Pass","Bike Parking","Focus Room"].map((p)=>(
                  <button key={p} className="pixel-card text-left p-3 hover:bg-secondary">{p}<div className="text-xs opacity-70">EcoCoins</div></button>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </PixelLayout>
  );
}
