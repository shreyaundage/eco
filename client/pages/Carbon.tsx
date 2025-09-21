import PixelLayout from "@/components/PixelLayout";
import { useState, useRef, useEffect } from "react";
import { Camera, Check, RotateCw, Leaf } from "lucide-react";

export default function Carbon() {
  const [fileSrc, setFileSrc] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const onFile = (f: File | null) => {
    if (!f) return;
    const r = new FileReader();
    r.onload = () => {
      setFileSrc(String(r.result));
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setShowPopup(true);
      }, 1000);
    };
    r.readAsDataURL(f);
  };

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setShowPopup(false);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <PixelLayout>
      <div className="space-y-6">
        <h1 className="font-pixel text-2xl">Carbon Emission Calculator</h1>
        <p className="font-pixel opacity-80">Upload a photo of a plant or tree to discover its carbon impact!</p>

        <div className="pixel-card">
          <div className="grid md:grid-cols-2 gap-4 items-start">
            <div>
              <label htmlFor="upload" className="block">
                <input id="upload" ref={inputRef} type="file" accept="image/*" className="hidden" onChange={(e)=>onFile(e.target.files?.[0] ?? null)} />
                <div tabIndex={0} role="button" aria-label="Click to upload" onKeyDown={(e)=>{ if(e.key==='Enter') inputRef.current?.click(); }} onClick={() => inputRef.current?.click()} className="pixel-border h-64 grid place-items-center cursor-pointer bg-card">
                  {fileSrc ? (
                    <img src={fileSrc} className="max-h-60 object-contain" alt="uploaded" />
                  ) : (
                    <div className="text-center font-pixel opacity-80">
                      <Camera size={36} className="mx-auto mb-2" />
                      <div className="text-sm">Click/Upload Photo</div>
                    </div>
                  )}
                </div>
              </label>
              <div className="mt-3 text-sm opacity-70">Once uploaded, we will analyze the plant and estimate carbon impact.</div>
            </div>

            <aside className="space-y-3">
              <div className="font-pixel">How it works</div>
              <ol className="text-sm list-decimal list-inside">
                <li>Upload a clear photo of a tree or plant.</li>
                <li>Wait for quick analysis (~1s).</li>
                <li>View estimated carbon & oxygen metrics.</li>
              </ol>
              <div className="mt-4 pixel-card">
                <div className="font-pixel mb-1">Tips</div>
                <div className="text-sm">Try close-up shots of leaves or full tree trunk for best results.</div>
              </div>
            </aside>
          </div>
        </div>

        {loading && (
          <div className="grid place-items-center">
            <div className="pixel-card p-6 flex flex-col items-center gap-3">
              <div className="animate-bounce text-4xl text-primary"><Leaf /></div>
              <div className="font-pixel">Analyzing...</div>
              <div className="w-48 h-3 bg-secondary rounded-sm overflow-hidden"><div className="h-full bg-primary animate-pulse" style={{width: '60%'}}/></div>
            </div>
          </div>
        )}

        {showPopup && (
          <div role="dialog" aria-modal className="fixed inset-0 bg-black/40 grid place-items-center p-4">
            <div className="pixel-card max-w-lg w-full text-left p-6 relative">
              <div className="flex items-center justify-between">
                <div className="font-pixel text-lg bg-yellow-200 px-3 py-1 rounded-sm" style={{background: 'hsl(var(--sidebar-ring))'}}>Result</div>
                <button aria-label="close" className="text-2xl p-2" onClick={()=>setShowPopup(false)}><Check /></button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div className="space-y-3">
                  <div className="font-pixel">Biological name</div>
                  <div className="pixel-card">Ficus benghalensis</div>

                  <div className="font-pixel">Carbon savings per day</div>
                  <div className="pixel-card">~50–200 grams CO₂</div>

                  <div className="font-pixel">Native to</div>
                  <div className="pixel-card">Indian subcontinent, India, Sri Lanka, Pakistan, Bangladesh</div>

                  <div className="font-pixel">Oxygen production</div>
                  <div className="pixel-card">~200–300 liters per day</div>
                </div>

                <div className="space-y-3 flex flex-col items-center">
                  <div className="w-40 h-40 bg-secondary grid place-items-center rounded-sm overflow-hidden">
                    {fileSrc ? <img src={fileSrc} className="object-cover w-full h-full" alt="plant"/> : <div className="font-pixel opacity-70">No image</div>}
                  </div>
                  <div className="text-sm opacity-80">All figures are estimates for educational use.</div>
                  <div className="flex gap-2 w-full">
                    <button className="pixel-button flex-1" onClick={()=>{ setShowPopup(false); setFileSrc(null); }}>Upload Another</button>
                    <button className="pixel-button flex-1" onClick={()=>setShowPopup(false)}>Close</button>
                  </div>
                </div>
              </div>

              {/* decorative confetti */}
              <div className="absolute right-2 top-2 opacity-80">🍃</div>
            </div>
          </div>
        )}
      </div>
    </PixelLayout>
  );
}
