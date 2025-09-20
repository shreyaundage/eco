import PixelLayout from "@/components/PixelLayout";

export default function DNA() {
  const stats = [
    { label: "Water Guardian", value: 72 },
    { label: "Energy Saver", value: 55 },
    { label: "Waste Warrior", value: 64 },
    { label: "Transport Hero", value: 48 },
  ];

  return (
    <PixelLayout>
      <div className="space-y-4">
        <h1 className="font-pixel text-xl">Sustainability DNA & Profile</h1>
        <div className="grid md:grid-cols-2 gap-4">
          <section className="pixel-card">
            <p className="mb-4">Explore your unique eco-identity and see your environmental impact bloom!</p>
            <div className="relative grid place-items-center h-64">
              {[...Array(12)].map((_,i)=> (
                <div key={i} className="absolute rounded-full border-2 border-primary/40" style={{width: `${20+i*20}%`, height: `${20+i*20}%`}} />
              ))}
            </div>
            <div className="space-y-3 mt-4">
              {stats.map(s=> (
                <div key={s.label}>
                  <div className="flex justify-between text-sm"><span>{s.label}</span><span>{s.value}%</span></div>
                  <div className="h-2 bg-secondary rounded-sm overflow-hidden"><div className="h-full bg-primary" style={{width: `${s.value}%`}}/></div>
                </div>
              ))}
            </div>
          </section>
          <aside className="pixel-card space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 bg-secondary rounded-sm"/>
              <div>
                <div className="font-semibold">Shreya</div>
                <div className="text-sm opacity-70">“Plant 3 more trees to become a Forest Friend!”</div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2 text-center">
              <div className="pixel-card"><div className="text-2xl">5</div><div className="text-xs">Days streak</div></div>
              <div className="pixel-card"><div className="text-2xl">124</div><div className="text-xs">Total actions</div></div>
              <div className="pixel-card"><div className="text-2xl">310</div><div className="text-xs">Points this month</div></div>
            </div>
            <div>
              <div className="font-pixel mb-2">Recent Achievements</div>
              <div className="flex gap-2 flex-wrap">
                {['Water Saver','Tree Planter','Clean Campus'].map(b=> (
                  <div key={b} className="pixel-card">{b}</div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </PixelLayout>
  );
}
