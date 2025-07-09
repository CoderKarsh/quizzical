import { useRef } from "react";
import { nanoid } from "nanoid";
import { decode } from "html-entities";
import "./Question.css";

export default function Questions({ question, corrAns, incorrAns, quesNo }) {
  const allOptions = useRef(
    [...incorrAns, corrAns].sort(() => 0.5 - Math.random())
  );
  return (
    <>
      <h2 className="question">{decode(question)}</h2>

      <section className="options">
        {allOptions.current.map((option, index) => (
          <div className="options-container" key={nanoid()}>
            <input
              type="radio"
              name={`${question}`}
              id={`q${quesNo + 1}o${index + 1}`}
              value={option}
              required
            />
            <label className={"label"} htmlFor={`q${quesNo + 1}o${index + 1}`}>
              {decode(option)}
            </label>
          </div>
        ))}
      </section>

      <hr />
    </>
  );
}
