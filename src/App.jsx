import { useState, useEffect } from "react";
import WelcomePage from "./components/WelcomePage";
import QuizPage from "./components/QuizPage";
import blueBlob from "./assets/blueBlob.webp";
import yellowBlob from "./assets/yellowBlob.webp";
import "./App.css";

function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [questionsData, setQuestionsData] = useState([]);

  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=5&difficulty=easy&type=multiple")
      .then((res) => res.json())
      .then((data) => setQuestionsData(data.results));
  }, []);

  function handleStartGame() {
    setGameStarted(true);
  }

  // console.log(questionsData);
  return (
    <main>
      {gameStarted ? (
        <QuizPage data={questionsData} />
      ) : (
        <WelcomePage handleClick={handleStartGame} />
      )}
      <img src={blueBlob} alt="" className="blue-blob" />
      <img src={yellowBlob} alt="" className="yellow-blob" />
    </main>
  );
}

export default App;
