/*
1. The form will get its value as formData via form action, we will match the answers to display the score.
2. Each question component will get the correct answer and the incorrect answers
  a. It will make a combined array and the correct answers' insert position will be randomized.
  b. 

*/
import { useState, useRef } from "react";
import { nanoid } from "nanoid";
import Question from "./Question";
import "./QuizPage.css";

export default function QuizPage({ data }) {
  let score = useRef(0);
  const [formSubmitted, setFormSubmitted] = useState(false);
  function checkAnswers(formData) {
    const correctAnswers = data.map((item) => item.correct_answer);
    console.log(correctAnswers);
    let i = 0;
    for (const answer of formData.values()) {
      answer === correctAnswers[i] && score.current++;
      i++;
    }
    console.log(score);
    setFormSubmitted(true);
  }

  return (
    <form action={checkAnswers}>
      {data.map((questionObj, index) => (
        <Question
          key={nanoid()}
          quesNo={index}
          formSubmitted={formSubmitted}
          question={questionObj.question}
          corrAns={questionObj.correct_answer}
          incorrAns={questionObj.incorrect_answers}
        />
      ))}
      <section className="bottom-section">
        {formSubmitted && <span>You scored {score.current} / 5 answers</span>}
        <button type="submit">
          {formSubmitted ? "Play again" : "Check answers"}
        </button>
      </section>
    </form>
  );
}
