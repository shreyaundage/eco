import PixelLayout from "@/components/PixelLayout";

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
            <div className="pixel-card h-40 grid place-items-center">
              Click/Upload Photo
            </div>
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
              This tool moved to a dedicated Carbon Emission Calculator —{" "}
              <a href="/carbon" className="underline">
                Open Carbon Calculator
              </a>
            </p>
          </section>
        </div>
      </div>
    </PixelLayout>
  );
}
