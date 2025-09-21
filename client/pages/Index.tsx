import PixelLayout from "@/components/PixelLayout";
import { useState, useEffect } from "react";
import { Leaf, Gift, Zap, Trophy, BotIcon, Camera } from "lucide-react";
import { Link } from "react-router-dom";

export default function Index() {
  const [ecoPoints] = useState(43);
  const [showJoinSuccess, setShowJoinSuccess] = useState(false);
  const [tipIdx, setTipIdx] = useState(0);
  const tips = [
    "Refill your bottle instead of buying plastic.",
    "Take the stairs to save elevator energy!",
    "Turn off the lights when leaving a room.",
    "Bring a reusable bag for campus shopping.",
  ];
  const leaderboard = [
    { name: "Aarav", pts: 320 },
    { name: "Mia", pts: 289 },
    { name: "Noah", pts: 270 },
    { name: "Zara", pts: 244 },
  ];

  useEffect(() => {
    const t = setInterval(() => setTipIdx((i) => (i + 1) % tips.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <PixelLayout>
      <div className="grid md:grid-cols-3 gap-4">
        <section className="md:col-span-2 pixel-card">
          <div className="flex items-center gap-3">
            <div className="pixel-card flex items-center gap-2 p-2">
              <Trophy className="text-foreground" size={18} />
              <span className="font-pixel text-sm">ECO POINTS</span>
            </div>
            <div className="ml-auto flex items-center gap-3">
              <div className="pixel-card px-3 py-2 text-xl font-bold">
                {ecoPoints}
              </div>
              <div>
                Good afternoon, Shreya
                <br />
                <span className="opacity-70">Grow your Eco-DNA today!</span>
              </div>
            </div>
          </div>
        </section>
        <aside className="pixel-card space-y-2">
          <div className="font-pixel">Highlights</div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-sm">
            <Link to="/dna" className="pixel-card flex items-center gap-2">
              <Leaf size={16} />
              Eco-DNA
            </Link>
            <Link to="/rewards" className="pixel-card flex items-center gap-2">
              <Gift size={16} />
              Rewards
            </Link>
            <Link to="/eco" className="pixel-card flex items-center gap-2">
              <Zap size={16} />
              Log Activity
            </Link>
            <Link
              to="/challenges"
              className="pixel-card flex items-center gap-2"
            >
              <Trophy size={16} />
              Leaderboards
            </Link>
            <Link to="/admin" className="pixel-card flex items-center gap-2">
              <Camera size={16} />
              Admin
            </Link>
          </div>
        </aside>
        <section className="md:col-span-2 pixel-card">
          <div className="font-pixel mb-2">Talking Tree</div>
          <div className="flex gap-3 items-center">
            <div className="w-12 h-12 rounded-full bg-primary grid place-items-center">
              🌳
            </div>
            <div className="flex-1 pixel-border bg-card px-3 py-2 relative">
              <div className="font-pixel animate-pulse">{tips[tipIdx]}</div>
              <div className="absolute right-2 bottom-2 opacity-40 text-xs">
                Tip
              </div>
            </div>
            <BotIcon />
          </div>
        </section>
        <aside className="pixel-card">
          <div className="font-pixel mb-2">Leaderboard</div>
          <ol className="space-y-2">
            {leaderboard.map((p, i) => (
              <li key={p.name} className="flex items-center gap-2">
                <span className="pixel-card w-6 h-6 grid place-items-center text-xs">
                  {i + 1}
                </span>
                <div className="flex-1">
                  <div className="flex justify-between text-sm">
                    <span>{p.name}</span>
                    <span>{p.pts} pts</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-sm overflow-hidden">
                    <div
                      className="h-full bg-primary"
                      style={{ width: `${(p.pts / 320) * 100}%` }}
                    />
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </aside>
        <section className="md:col-span-2 pixel-card">
          <div className="font-pixel mb-2">Quick Actions</div>
          <div className="grid grid-cols-3 gap-3">
            <Link to="/dna" className="pixel-button text-center">
              DNA
            </Link>
            <Link to="/eco" className="pixel-button text-center">
              Log
            </Link>
            <Link to="/rewards" className="pixel-button text-center">
              Rewards
            </Link>
          </div>
        </section>
        <section className="pixel-card flex items-center justify-between gap-3">
          <div>
            <div className="font-pixel mb-1">Today's Challenge</div>
            <div className="flex items-center gap-2">
              <span>Bike or walk 3km</span>
              <span className="text-xs opacity-70">Time left: 06:08:47</span>
            </div>
          </div>
          <button
            onClick={() => setShowJoinSuccess(true)}
            className="pixel-button"
          >
            Join
          </button>
        </section>
        <section className="pixel-card md:col-span-3">
          <div className="font-pixel mb-2">Welcome</div>
          <div className="flex flex-wrap gap-2 items-center">
            <span>Sign in to sync your progress and compete with friends.</span>
            <a
              href="/auth"
              className="pixel-button bg-foreground text-background"
            >
              Google
            </a>
            <a
              href="/auth"
              className="pixel-button bg-foreground text-background"
            >
              Facebook
            </a>
          </div>
        </section>
      </div>

      {showJoinSuccess && (
        <div
          role="dialog"
          aria-modal
          className="fixed inset-0 bg-black/40 grid place-items-center p-4"
        >
          <div className="pixel-card max-w-md w-full text-center space-y-3">
            <div className="font-pixel text-lg">
              Success
              <br />
              use the color theme i am sending you and make sure no point is
              missed and everything works properly
            </div>
            <button
              className="pixel-button w-full"
              onClick={() => setShowJoinSuccess(false)}
            >
              Okay
            </button>
          </div>
        </div>
      )}
    </PixelLayout>
  );
}
