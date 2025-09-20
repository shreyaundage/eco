import PixelLayout from "@/components/PixelLayout";

export default function Challenges() {
  const teams = [
    { name: "Team Evergreen", pts: 1200 },
    { name: "Solar Squad", pts: 980 },
    { name: "Recycle Rangers", pts: 870 },
  ];
  return (
    <PixelLayout>
      <div className="space-y-4">
        <h1 className="font-pixel text-xl">Challenges & Events</h1>
        <div className="grid md:grid-cols-2 gap-4">
          <section className="pixel-card space-y-3">
            <div className="font-pixel">Challenge calendar</div>
            <div className="grid grid-cols-7 gap-2">
              {Array.from({length:30}).map((_,i)=> (
                <div key={i} className="h-12 grid place-items-center pixel-border bg-card">{i+1}</div>
              ))}
            </div>
            <div className="space-y-2">
              {["Zero Waste Week","Tree Plantation","Energy Conservation"].map((e)=> (
                <div key={e} className="pixel-card flex items-center justify-between">
                  <div>{e}<div className="text-xs opacity-70">Join to compete</div></div>
                  <button className="pixel-button">Join</button>
                </div>
              ))}
            </div>
          </section>
          <aside className="pixel-card space-y-3">
            <div className="font-pixel">Reverse Scavenger Hunt</div>
            <div className="overflow-x-auto">
              <div className="flex gap-3 min-w-max">
                {["Find 5 pieces of litter","Spot energy waste"].map((m)=> (
                  <div key={m} className="pixel-card w-56">
                    <div>{m}</div>
                    <button className="pixel-button mt-2">Open</button>
                  </div>
                ))}
              </div>
            </div>
            <div className="font-pixel">Leaderboard</div>
            <ol className="space-y-2">
              {teams.map((t,i)=> (
                <li key={t.name} className="flex items-center gap-2">
                  <span className="pixel-card w-6 h-6 grid place-items-center text-xs">{i+1}</span>
                  <div className="flex-1">
                    <div className="flex justify-between text-sm"><span>{t.name}</span><span>{t.pts}</span></div>
                    <div className="h-2 bg-secondary rounded-sm overflow-hidden"><div className="h-full bg-primary" style={{width: `${(t.pts/1200)*100}%`}}/></div>
                  </div>
                </li>
              ))}
            </ol>
          </aside>
        </div>
      </div>
    </PixelLayout>
  );
}
