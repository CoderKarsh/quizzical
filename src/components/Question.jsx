import { useState } from "react";
import clsx from "clsx";
import { decode } from "html-entities";
import "./Question.css";

export default function Question({ data, isFormSubmitted }) {
  const [chosenValue, setChosenValue] = useState(null);
  return (
    <>
      <h2 className="question">{decode(data.question)}</h2>

      <section className="options">
        {data.options.map((option) => (
          <div className="options-container" key={option}>
            <input
              disabled={isFormSubmitted}
              type="radio"
              name={`${data.question}`}
              id={option}
              value={option}
              checked={option === chosenValue}
              onChange={(e) => setChosenValue(e.target.value)}
              required
            />
            <label
              disabled={isFormSubmitted}
              style={{
                backgroundColor: clsx({
                  "#94d7a2": isFormSubmitted && option === data.correct_ans,
                  "#f8bcbc":
                    isFormSubmitted &&
                    option !== data.correct_ans &&
                    chosenValue === option,
                }),
                outline: chosenValue === option ? "none" : undefined,
              }}
              htmlFor={option}
            >
              {decode(option)}
            </label>
          </div>
        ))}
      </section>

      <hr />
    </>
  );
}
