// import { decode } from "html-entities";
import "./Question.css";

export default function Questions() {
  return (
    <>
      <h2 className="question">Which colour is your favourite?</h2>

      <input type="radio" name="ques1" id="option1" value="red" />
      <label htmlFor="option1">Red</label>

      <input type="radio" name="ques1" id="option2" value="green" />
      <label htmlFor="option2">Green</label>

      <input type="radio" name="ques1" id="option3" value="blue" />
      <label htmlFor="option3">Blue</label>

      <input type="radio" name="ques1" id="option4" value="yellow" />
      <label htmlFor="option4">Yellow</label>

      <hr />
    </>
  );
}
