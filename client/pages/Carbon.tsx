import { useState, useRef } from "react";
import PixelLayout from "@/components/PixelLayout";

function CameraAssist() {
  const [file, setFile] = useState<string | null>(null);
  const [details, setDetails] = useState<null | {
    bioName: string;
    carbon: string;
    native: string;
    oxygen: string;
  }>(null);
  const [showPopup, setShowPopup] = useState(false);
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
            // mock AI processing delay and produce the requested structured details
            setTimeout(() => {
              setDetails({
                bioName: "Ficus benghalensis",
                carbon: "~50–200 grams CO₂ per day",
                native:
                  "Indian subcontinent — India, Sri Lanka, Pakistan, Bangladesh",
                oxygen: "~200–300 liters per day",
              });
              setShowPopup(true);
            }, 700);
          };
          r.readAsDataURL(f);
        }}
      />

      <div
        onClick={() => inputRef.current?.click()}
        role="button"
        tabIndex={0}
        className="pixel-card h-56 grid place-items-center cursor-pointer relative"
      >
        {file ? (
          <img src={file} className="max-h-full max-w-full object-contain" />
        ) : (
          <div className="text-center">
            <div className="font-pixel mb-2">Use Camera / Upload</div>
            <div className="text-sm opacity-70">
              Snap a photo of an activity or product
            </div>
          </div>
        )}

        {/* popup rendered inside the same box */}
        {showPopup && details && (
          <div className="absolute inset-0 bg-black/40 grid place-items-center p-2">
            <div className="pixel-card max-w-xs w-full p-3 text-left">
              <div className="font-pixel text-sm mb-2">Biological name</div>
              <div className="mb-3 font-bold">{details.bioName}</div>

              <div className="font-pixel text-sm">Carbon savings per day</div>
              <div className="mb-3">{details.carbon}</div>

              <div className="font-pixel text-sm">Native to</div>
              <div className="mb-3 text-sm opacity-80">{details.native}</div>

              <div className="font-pixel text-sm">Oxygen production</div>
              <div className="mb-3">{details.oxygen}</div>

              <div className="flex gap-2">
                <button
                  className="pixel-button flex-1"
                  onClick={(ev) => {
                    ev.stopPropagation();
                    setShowPopup(false);
                  }}
                >
                  Close
                </button>
                <button
                  className="pixel-button flex-1 bg-secondary"
                  onClick={(ev) => {
                    ev.stopPropagation();
                    // keep popup open but clear image
                    setFile(null);
                    setShowPopup(false);
                    setDetails(null);
                  }}
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {details && !showPopup && (
        <div className="pixel-card mt-3 p-3">
          <div className="font-pixel">AI Estimate</div>
          <div className="mt-2 text-sm opacity-80">
            Estimated annual saving: ~12 kg CO₂e (approx.)
          </div>
        </div>
      )}
    </div>
  );
}

export default function Carbon() {
  return (
    <PixelLayout>
      <div className="space-y-4">
        <h1 className="font-pixel text-xl">
          AI Based Carbon Saving Calculator
        </h1>
        <section className="pixel-card">
          <p className="mb-3 text-sm opacity-80">
            Use the camera to analyze items or activities and get an estimated
            carbon saving and disposal guidance.
          </p>
          <CameraAssist />
        </section>

        <section className="pixel-card">
          <div className="font-pixel mb-2">Tips & Guidance</div>
          <ul className="text-sm opacity-80 list-inside">
            <li>
              Try photographing packaging, appliances, or receipts for best
              results.
            </li>
            <li>
              The AI provides an estimate only — use it as a guide to make
              greener choices.
            </li>
          </ul>
        </section>
      </div>
    </PixelLayout>
  );
}
