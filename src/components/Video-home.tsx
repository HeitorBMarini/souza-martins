export default function VideoSection() {
  return (
    <section className="w-full bg-zinc-50 py-12">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl  font-bold text-zinc-800 mb-8">
          Fabricação e colocação de tampa de esgoto com pintura
        </h2>

        <div className="relative w-full overflow-hidden rounded-lg shadow-md">
          <video
            className="w-full h-96 rounded-lg"
            src="/video/video-home.mp4"
            controls
            preload="metadata"
          />
        </div>
      </div>
    </section>
  );
}
