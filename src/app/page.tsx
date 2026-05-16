import Link from "next/link";

export default function Home() {
  const subjects = [
    "Maths",
    "Biology",
    "Chemistry",
    "Physics",
    "English",
    "Computer Science",
  ];

  return (
    <main className="min-h-screen bg-zinc-950 text-white p-10">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-6xl font-bold mb-4">
          GCSE Revision Hub
        </h1>

        <p className="text-zinc-400 text-xl mb-10">
          Free AI-powered GCSE revision.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {subjects.map((subject) => (
            <Link
              key={subject}
              href={`/${subject.toLowerCase().replace(/ /g, "-")}`}
              className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl hover:border-blue-500 transition"
            >
              <h2 className="text-2xl font-semibold mb-2">
                {subject}
              </h2>

              <p className="text-zinc-400">
                Start revising {subject}.
              </p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
