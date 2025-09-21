import PixelLayout from "@/components/PixelLayout";
import { useState, useRef } from "react";

function UploadAssist() {
  const [file, setFile] = useState<string | null>(null);
  const [show, setShow] = useState(false);
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
            setShow(true);
          };
          r.readAsDataURL(f);
        }}
      />
      <div
        onClick={() => inputRef.current?.click()}
        role="button"
        tabIndex={0}
        className="pixel-card h-40 grid place-items-center cursor-pointer"
      >
        {file ? (
          <img src={file} className="h-full object-contain" />
        ) : (
          "Click/Upload Photo"
        )}
      </div>
      {show && (
        <div
          role="dialog"
          className="fixed inset-0 bg-black/30 grid place-items-center p-4"
        >
          <div className="pixel-card p-4 max-w-sm w-full text-center">
            <div className="font-pixel mb-2">Your waste is biodegradable.</div>
            <div className="mb-2 opacity-80 text-sm">
              We detected this item as compostable — thanks for checking!
            </div>
            <button
              className="pixel-button w-full"
              onClick={() => {
                setShow(false);
                setFile(null);
              }}
            >
              Okay
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default function Games() {
  return (
    <PixelLayout>
      <div className="space-y-4">
        <h1 className="font-pixel text-xl">Games & Tools</h1>
        <section className="pixel-card">
          <div className="font-pixel mb-2">AR mini games</div>
          <button className="pixel-button">Play Catch Plastic</button>
        </section>
        <div className="grid md:grid-cols-2 gap-4">
          <section className="pixel-card">
            <div className="font-pixel mb-2">Waste Segregation Assist</div>
            <UploadAssist />
            <p className="text-sm mt-2">
              Upload Picture of your waste and let us assist you where to
              dispose it
            </p>
          </section>
          <section className="pixel-card">
            <div className="font-pixel mb-2">Plant Scanner</div>
            <div className="pixel-card h-40 grid place-items-center">
              Click/Upload Photo
            </div>
            <p className="text-sm mt-2">
              This tool moved to a dedicated AI Based Carbon Saving Calculator —
              use the Camera button centered in the bottom navigation to access
              it.
            </p>
          </section>
        </div>
      </div>
    </PixelLayout>
  );
}
