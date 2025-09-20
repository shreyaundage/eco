import PixelLayout from "@/components/PixelLayout";

const slides = [
  { title: "Eco-DNA", text: "Discover your traits" },
  { title: "Rewards System", text: "Spin & redeem" },
  { title: "Activity Logging", text: "Earn EcoCoins" },
  { title: "Talking Trees", text: "Chat eco tips" },
  { title: "Scavenger Hunts", text: "Fix the campus" },
];

export default function Auth() {
  return (
    <PixelLayout>
      <div className="space-y-6 max-w-2xl mx-auto">
        <h1 className="font-pixel text-xl text-center">Sign Up · Log In</h1>
        <div className="overflow-x-auto">
          <div className="flex gap-3 min-w-max">
            {slides.map((s, i) => (
              <div key={i} className="pixel-card w-64 shrink-0">
                <div className="h-28 bg-secondary mb-2"/>
                <div className="font-semibold">{s.title}</div>
                <div className="text-sm opacity-70">{s.text}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="grid sm:grid-cols-2 gap-3">
          <button className="pixel-button w-full bg-foreground text-background">Continue with Google</button>
          <button className="pixel-button w-full bg-foreground text-background">Continue with Facebook</button>
        </div>
        <div className="text-center opacity-70">Track. Play. Grow.</div>
      </div>
    </PixelLayout>
  );
}
