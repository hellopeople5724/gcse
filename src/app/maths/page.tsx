export default function MathsPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white p-10">
      <h1 className="text-5xl font-bold mb-6">
        GCSE Maths
      </h1>

      <div className="space-y-4">
        <div className="bg-zinc-900 p-6 rounded-2xl">
          <h2 className="text-2xl font-semibold mb-2">
            Algebra
          </h2>

          <p className="text-zinc-400">
            Learn equations, graphs and functions.
          </p>
        </div>

        <div className="bg-zinc-900 p-6 rounded-2xl">
          <h2 className="text-2xl font-semibold mb-2">
            Geometry
          </h2>

          <p className="text-zinc-400">
            Angles, shapes and measurements.
          </p>
        </div>
      </div>
    </main>
  );
}
