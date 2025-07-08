import "./WelcomePage.css";

export default function WelcomePage({ handleClick }) {
  return (
    <>
      <h1 className="display-heading">Quizzical</h1>
      <p className="game-description">
        A trivia quiz platform, powered by OTDB API
      </p>
      <button className="start-game-btn" onClick={handleClick}>
        Start quiz
      </button>

      
    </>
  );
}
