import PixelLayout from "@/components/PixelLayout";
import { useState } from "react";
import { Recycle, Droplets, Bolt, Trash2, Bike, Plus, Camera } from "lucide-react";

const categories = [
  { key: "recycling", label: "Recycling", icon: Recycle },
  { key: "water", label: "Water Saving", icon: Droplets },
  { key: "energy", label: "Energy Conservation", icon: Bolt },
  { key: "cleanup", label: "Clean-up", icon: Trash2 },
  { key: "bike", label: "Bike/Walk", icon: Bike },
  { key: "custom", label: "Custom", icon: Plus },
];

export default function EcoActivity() {
  const [active, setActive] = useState("recycling");
  const [photo, setPhoto] = useState<string | null>(null);
  const [desc, setDesc] = useState("");
  const [showSpin, setShowSpin] = useState(false);

  return (
    <PixelLayout>
      <div className="space-y-4">
        <h1 className="font-pixel text-xl">Eco Activity Logging</h1>

        <div className="overflow-x-auto">
          <div className="flex gap-2 min-w-max">
            {categories.map((c) => (
              <button
                key={c.key}
                onClick={() => setActive(c.key)}
                className={`pixel-card flex items-center gap-2 px-4 py-2 ${active===c.key?"bg-secondary":""}`}
              >
                <c.icon size={18} /> {c.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <section className="pixel-card space-y-3">
            <div className="font-pixel">Upload your activity!</div>
            <label className="block border-dashed border-4 rounded-md h-56 grid place-items-center cursor-pointer pixel-border bg-card">
              <input type="file" accept="image/*" className="hidden" onChange={(e)=>{
                const f=e.target.files?.[0];
                if(!f) return; const r=new FileReader(); r.onload=()=>setPhoto(String(r.result)); r.readAsDataURL(f);
              }}/>
              {photo ? (
                <img src={photo} alt="upload" className="max-h-52 object-contain"/>
              ) : (
                <div className="opacity-70 flex flex-col items-center gap-2"><Camera/><span>No photo yet!</span></div>
              )}
            </label>
            <textarea
              value={desc}
              onChange={(e)=>setDesc(e.target.value)}
              placeholder="Describe your activity (optional)"
              className="w-full pixel-border bg-card p-3 rounded-md min-h-20"
            />
            <button onClick={()=>setShowSpin(true)} className="pixel-button w-full">Submit</button>
            <p className="text-xs opacity-70">AI verification will confirm photo</p>
          </section>

          <section className="pixel-card space-y-3">
            <div className="font-pixel">Suggested Challenges</div>
            <div className="overflow-x-auto">
              <div className="flex gap-3 min-w-max">
                {["Zero-plastic day","Cycle to class","Plant a sapling"].map((t)=> (
                  <div key={t} className="pixel-card w-56 flex flex-col gap-2">
                    <div>{t}</div>
                    <button className="pixel-button">Accept</button>
                  </div>
                ))}
              </div>
            </div>
            <div className="font-pixel">Eco DNA Progress</div>
            <div className="h-3 bg-secondary rounded-sm overflow-hidden"><div className="h-full bg-primary w-1/3"/></div>
          </section>
        </div>

        {showSpin && (
          <div role="dialog" aria-modal className="fixed inset-0 bg-black/40 grid place-items-center p-4">
            <div className="pixel-card max-w-md w-full text-center space-y-4">
              <div className="font-pixel">Spin the Wheel!</div>
              <div className="aspect-square w-64 mx-auto rounded-full border-[6px] border-foreground grid place-items-center relative overflow-hidden">
                <div className="absolute w-full h-full animate-spin [animation-duration:3s]" style={{background: `conic-gradient(hsl(var(--accent)), hsl(var(--secondary)), hsl(var(--primary)), hsl(var(--accent)))`}}/>
                <div className="relative z-10 pixel-card">Good luck!</div>
              </div>
              <button className="pixel-button w-full" onClick={()=>setShowSpin(false)}>Close</button>
            </div>
          </div>
        )}
      </div>
    </PixelLayout>
  );
}
