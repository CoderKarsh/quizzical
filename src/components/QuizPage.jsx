/*
1. The form will get its value as formData via form action, we will match the answers to display the score.
2. Each question component will get the correct answer and the incorrect answers
  a. It will make a combined array and the correct answers' insert position will be randomized.
  b. 

*/
import { useState, useRef } from "react";
import Question from "./Question";
import "./QuizPage.css";

export default function QuizPage({ data, setGameStarted }) {
  let score = useRef(0);
  const [formSubmitted, setFormSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    let i = 0;
    for (const chosenValue of formData.values()) {
      chosenValue === data[i].correct_ans && score.current++;
      i++;
    }
    setFormSubmitted(true);
  }

  return (
    <form onSubmit={handleSubmit}>
      {data.map((questionObj) => (
        <Question
          key={questionObj.question}
          isFormSubmitted={formSubmitted}
          data={questionObj}
        />
      ))}
      <section className="bottom-section">
        {formSubmitted && (
          <span style={{ fontWeight: "bold", fontSize: "1.25rem" }}>
            You scored {score.current} / 5 answers
          </span>
        )}
        <button
          onClick={() => {
            formSubmitted ? setGameStarted(false) : undefined;
          }}
        >
          {formSubmitted ? "Play again" : "Check answers"}
        </button>
      </section>
    </form>
  );
}
