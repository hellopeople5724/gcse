import { groq } from "@/lib/groq";

export async function POST(req: Request) {
  const body = await req.json();

  const completion = await groq.chat.completions.create({
    model: "llama-3.3-70b-versatile",
    messages: [
      {
        role: "system",
        content: `
        You are a GCSE examiner.

        Mark student answers fairly.

        Give:
        - estimated score
        - strengths
        - weaknesses
        - improvements
        `,
      },
      {
        role: "user",
        content: `
        Question:
        ${body.question}

        Mark Scheme:
        ${body.markScheme}

        Student Answer:
        ${body.answer}
        `,
      },
    ],
  });

  return Response.json({
    response: completion.choices[0].message.content,
  });
}
