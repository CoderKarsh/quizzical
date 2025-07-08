/*
1. The form will get its value as formData via form action, we will match the answers to display the score.
2. Each question component will get the correct answer and the incorrect answers
  a. It will make a combined array and the correct answers' insert position will be randomized.
  b. 

*/

import Question from "./Question";

export default function QuizPage() {
  function handleSubmit() {}

  return (
    <form action={handleSubmit}>
      {/* {data.map((question) => (
        <p>{decode(question.question)}</p>
      ))} */}
      <Question />
      <Question />
      <Question />
      <Question />
      <Question />
      <button type="submit">Check answers</button>
    </form>
  );
}
