"use client";

import { useState } from "react";
import questions from "@/data/maths.json";

export default function QuizPage() {
  const [score, setScore] = useState(0);
  const [current, setCurrent] = useState(0);

  const question = questions[current];

  function handleAnswer(option: string) {
    if (option === question.answer) {
      setScore(score + 1);
    }

    setCurrent(current + 1);
  }

  if (current >= questions.length) {
    return (
      <main className="min-h-screen bg-zinc-950 text-white flex items-center justify-center">
        <div>
          <h1 className="text-5xl font-bold mb-4">
            Quiz Finished
          </h1>

          <p className="text-2xl">
            Score: {score}/{questions.length}
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-zinc-950 text-white p-10">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">
          {question.question}
        </h1>

        <div className="space-y-4">
          {question.options.map((option) => (
            <button
              key={option}
              onClick={() => handleAnswer(option)}
              className="w-full bg-zinc-900 p-4 rounded-xl hover:bg-zinc-800"
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </main>
  );
}
