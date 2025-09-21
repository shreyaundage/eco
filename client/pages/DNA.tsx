import PixelLayout from "@/components/PixelLayout";
import SpinWheel from "@/components/SpinWheel";

export default function DNA() {
  const stats = [
    { label: "Water Guardian", value: 72 },
    { label: "Energy Saver", value: 55 },
    { label: "Waste Warrior", value: 64 },
    { label: "Transport Hero", value: 48 },
  ];

  const rewards = [
    { id: "dna1", label: "+10 EcoCoins", color: "#F4A261" },
    { id: "dna2", label: "+Badge", color: "#6B705C" },
    { id: "dna3", label: "+5 EcoCoins", color: "#E27D60" },
    { id: "dna4", label: "Rare", color: "#145956" },
    { id: "dna5", label: "+15", color: "#b2916f" },
    { id: "dna6", label: "Swap", color: "#F4A261" },
    { id: "dna7", label: "Spin", color: "#E27D60" },
    { id: "dna8", label: "Boost", color: "#6B705C" },
  ];

  return (
    <PixelLayout>
      <div className="space-y-4">
        <h1 className="font-pixel text-xl">Sustainability DNA & Profile</h1>
        <div className="grid md:grid-cols-2 gap-4">
          <section className="pixel-card">
            <p className="mb-4">
              Explore your unique eco-identity and see your environmental impact
              bloom!
            </p>
            <div className="h-64 grid place-items-center">
              <div className="text-sm opacity-70">
                DNA visuals replaced with spin interactions and progress bars.
              </div>
            </div>
            <div className="space-y-3 mt-4">
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="flex justify-between text-sm">
                    <span>{s.label}</span>
                    <span>{s.value}%</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-sm overflow-hidden">
                    <div
                      className="h-full bg-primary"
                      style={{ width: `${s.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>

          <aside className="pixel-card space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 bg-secondary rounded-sm" />
              <div>
                <div className="font-semibold">Shreya</div>
                <div className="text-sm opacity-70">
                  “Plant 3 more trees to become a Forest Friend!”
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2 text-center">
              <div className="pixel-card">
                <div className="text-2xl">5</div>
                <div className="text-xs">Days streak</div>
              </div>
              <div className="pixel-card">
                <div className="text-2xl">124</div>
                <div className="text-xs">Total actions</div>
              </div>
              <div className="pixel-card">
                <div className="text-2xl">310</div>
                <div className="text-xs">Points this month</div>
              </div>
            </div>

            <div className="mt-4">
              <div className="font-pixel mb-2">Spin for DNA Boost</div>
              <div className="pixel-card p-4">
                <SpinWheel
                  rewards={rewards}
                  onResult={(r) => {
                    /* TODO: apply reward to profile */
                  }}
                />
              </div>
            </div>

            <div>
              <div className="font-pixel mb-2">Recent Achievements</div>
              <div className="flex gap-2 flex-wrap">
                {["Water Saver", "Tree Planter", "Clean Campus"].map((b) => (
                  <div key={b} className="pixel-card">
                    {b}
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </PixelLayout>
  );
}
