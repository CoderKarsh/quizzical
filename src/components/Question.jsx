import { useRef } from "react";
import { decode } from "html-entities";
import "./Question.css";

export default function Questions({ question, corrAns, incorrAns, quesNo }) {
  const allOptions = useRef(
    [...incorrAns, corrAns].sort(() => 0.5 - Math.random())
  );
  console.log(typeof allOptions);
  return (
    <>
      <h2 className="question">{decode(question)}</h2>

      {allOptions.current.map((option, index) => (
        <>
          <input
            key={option}
            type="radio"
            name={`question${quesNo}`}
            id={`option${index}`}
            value={option}
          />
          <label htmlFor={`option${index}`}>{decode(option)}</label>
        </>
      ))}
      <hr />
    </>
  );
}
