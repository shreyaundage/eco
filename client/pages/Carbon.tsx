import { useState, useRef } from "react";
import PixelLayout from "@/components/PixelLayout";

function CameraAssist() {
  const [file, setFile] = useState<string | null>(null);
  const [result, setResult] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  return (
    <div>
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(e) => {
          const f = e.target.files?.[0];
          if (!f) return;
          const r = new FileReader();
          r.onload = () => {
            setFile(String(r.result));
            // mock AI processing delay and produce a small summary
            setTimeout(() => {
              setResult("Estimated annual saving: ~12 kg CO₂e (approx.)");
            }, 700);
          };
          r.readAsDataURL(f);
        }}
      />

      <div
        onClick={() => inputRef.current?.click()}
        role="button"
        tabIndex={0}
        className="pixel-card h-56 grid place-items-center cursor-pointer"
      >
        {file ? (
          <img src={file} className="h-full object-contain" />
        ) : (
          <div className="text-center">
            <div className="font-pixel mb-2">Use Camera / Upload</div>
            <div className="text-sm opacity-70">Snap a photo of an activity or product</div>
          </div>
        )}
      </div>

      {result && (
        <div className="pixel-card mt-3 p-3">
          <div className="font-pixel">AI Estimate</div>
          <div className="mt-2 text-sm opacity-80">{result}</div>
        </div>
      )}
    </div>
  );
}

export default function Carbon() {
  return (
    <PixelLayout>
      <div className="space-y-4">
        <h1 className="font-pixel text-xl">AI Based Carbon Saving Calculator</h1>
        <section className="pixel-card">
          <p className="mb-3 text-sm opacity-80">Use the camera to analyze items or activities and get an estimated carbon saving and disposal guidance.</p>
          <CameraAssist />
        </section>

        <section className="pixel-card">
          <div className="font-pixel mb-2">Tips & Guidance</div>
          <ul className="text-sm opacity-80 list-inside">
            <li>Try photographing packaging, appliances, or receipts for best results.</li>
            <li>The AI provides an estimate only — use it as a guide to make greener choices.</li>
          </ul>
        </section>
      </div>
    </PixelLayout>
  );
}
