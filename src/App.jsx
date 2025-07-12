import { useState, useEffect } from "react";
import WelcomePage from "./components/WelcomePage";
import QuizPage from "./components/QuizPage";
import blueBlob from "./assets/blueBlob.webp";
import yellowBlob from "./assets/yellowBlob.webp";
import questions from "./questions";
import "./App.css";

function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [questionsData, setQuestionsData] = useState([]);

  useEffect(() => {
    fetch(
      "https://opentdb.com/api.php?amount=5&category=22&difficulty=easy&type=multiple"
    )
      .then((res) => res.json())
      .then((data) => setQuestionsData(questions(data.results)));
  }, [gameStarted]);

  function handleStartGame() {
    setGameStarted(true);
  }

  return (
    <main>
      {gameStarted ? (
        <QuizPage data={questionsData} setGameStarted={setGameStarted} />
      ) : (
        <WelcomePage handleClick={handleStartGame} />
      )}
      <img src={blueBlob} alt="" className="blue-blob" />
      <img src={yellowBlob} alt="" className="yellow-blob" />
    </main>
  );
}

export default App;
