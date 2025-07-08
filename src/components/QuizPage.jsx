/*
1. The form will get its value as formData via form action, we will match the answers to display the score.
2. Each question component will get the correct answer and the incorrect answers
  a. It will make a combined array and the correct answers' insert position will be randomized.
  b. 

*/

import Question from "./Question";

export default function QuizPage({ data }) {
  function handleSubmit() {}

  return (
    <form action={handleSubmit}>
      {data.map((questionObj, index) => (
        <Question
          key={questionObj.question}
          quesNo={ index }
          question={questionObj.question}
          corrAns={questionObj.correct_answer}
          incorrAns={questionObj.incorrect_answers}
        />
      ))}
      <button type="submit">Check answers</button>
    </form>
  );
}
