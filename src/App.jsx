import { useState } from "react";
import WelcomePage from "./components/WelcomePage";
import QuizPage from "./components/QuizPage";
import "./App.css";

function App() {
  const [gameStarted, setGameStarted] = useState(false);

  function handleStartGame() {
    setGameStarted(true);
  }

  return (
    <main>
      {gameStarted ? (
        <QuizPage />
      ) : (
        <WelcomePage handleClick={handleStartGame} />
      )}
    </main>
  );
}

export default App;
