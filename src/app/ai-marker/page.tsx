"use client";

import { useState } from "react";

export default function AIMarkerPage() {
  const [answer, setAnswer] = useState("");
  const [feedback, setFeedback] = useState("");
  const [loading, setLoading] = useState(false);

  async function markAnswer() {
    setLoading(true);

    const res = await fetch("/api/mark", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        question: "Explain photosynthesis.",
        markScheme:
          "Award marks for mentioning sunlight, chlorophyll, glucose and carbon dioxide.",
        answer,
      }),
    });

    const data = await res.json();

    setFeedback(data.response);
    setLoading(false);
  }

  return (
    <main className="min-h-screen bg-zinc-950 text-white p-10">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-5xl font-bold mb-6">
          AI Paper Marker
        </h1>

        <textarea
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          placeholder="Write your answer here..."
          className="w-full h-64 bg-zinc-900 border border-zinc-800 rounded-2xl p-4"
        />

        <button
          onClick={markAnswer}
          className="mt-4 bg-blue-600 px-6 py-3 rounded-xl"
        >
          {loading ? "Marking..." : "Mark Answer"}
        </button>

        {feedback && (
          <div className="mt-8 bg-zinc-900 p-6 rounded-2xl whitespace-pre-wrap">
            {feedback}
          </div>
        )}
      </div>
    </main>
  );
}
