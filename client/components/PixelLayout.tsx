import {
  Home,
  Leaf,
  Atom,
  CalendarDays,
  Gift,
  Gamepad2,
  Images,
  Camera,
} from "lucide-react";
import { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";

const LEFT = [
  { to: "/", label: "Home", icon: Home },
  { to: "/eco", label: "EcoActivity", icon: Leaf },
  { to: "/dna", label: "DNA", icon: Atom },
];
const RIGHT = [
  { to: "/challenges", label: "Challenges", icon: CalendarDays },
  { to: "/feed", label: "Feed", icon: Images },
  { to: "/rewards", label: "Rewards", icon: Gift },
  { to: "/games", label: "Games", icon: Gamepad2 },
  { to: "/admin", label: "Admin", icon: Camera },
];

export default function PixelLayout({ children }: { children: ReactNode }) {
  const { pathname } = useLocation();
  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-20 bg-card/90 backdrop-blur pixel-border p-3">
        <div className="max-w-6xl mx-auto flex items-center gap-3">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F5bf6c489e64643709f1a564990245c30%2F1fe46d048b14445daf790caf92cc0d98?format=webp&width=160"
            alt="Eco Campus logo"
            className="w-8 h-8 pixel-icon"
          />
          <div>
            <div className="text-lg font-pixel leading-none">Eco Campus</div>
            <div className="text-xs opacity-80 -mt-1">Track. Play. Grow.</div>
          </div>
          <div className="ml-auto flex gap-2 items-center">
            <Link to="/auth" className="pixel-button text-xs px-3 py-2">
              Sign in
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1 max-w-6xl w-full mx-auto p-3 sm:p-6">
        {children}
      </main>
      <nav className="sticky bottom-0 z-20 bg-card/90 backdrop-blur">
        <div className="max-w-6xl mx-auto grid grid-cols-9 gap-1 p-2 items-center">
          {/* left 3 */}
          {LEFT.map(({ to, label, icon: Icon }) => {
            const active = pathname === to;
            return (
              <Link
                key={to}
                to={to}
                aria-label={label}
                className={`pixel-border rounded-md px-2 py-1 flex flex-col items-center gap-1 ${active ? "bg-secondary" : "bg-card"}`}
              >
                <Icon size={18} />
                <span className="text-[10px] leading-none">{label}</span>
              </Link>
            );
          })}

          {/* center carbon button */}
          <Link to="/ai-carbon" aria-label="AI Carbon" className="flex items-center justify-center">
            <div className="carbon-button carbon-glow" title="AI Based Carbon Saving Calculator">
              <Camera size={18} />
            </div>
          </Link>

          {/* right 3 */}
          {RIGHT.map(({ to, label, icon: Icon }) => {
            const active = pathname === to;
            return (
              <Link
                key={to}
                to={to}
                aria-label={label}
                className={`pixel-border rounded-md px-2 py-1 flex flex-col items-center gap-1 ${active ? "bg-secondary" : "bg-card"}`}
              >
                <Icon size={18} />
                <span className="text-[10px] leading-none">{label}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
