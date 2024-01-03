import { useState, useRef } from "react";
import "./Game.css";

const Game = ({ verifyLetter, pickedWords, pickedCategory, letters, guessedLetters, wrongLetters, guesses, score }) => {
  
  const [letter, setLetter] = useState("");
  const letterInputref = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    verifyLetter(letter);

    setLetter("");
    
    letterInputref.current.focus();
  }

  return (
    <div className="game">
      <p className="points">
        <span>Pontuação: {score}</span>
      </p>

      <h1>Adivinhe a palavra:</h1>

      <h3 className="top">
        Dica sobre a palavra: <span>{pickedCategory}</span>
      </h3>
      <p className="tip">Você ainda tem {guesses} tentativas</p>

      <div className="wordContainer">
        {letters.map((letters, i) => (
          guessedLetters.includes(letters) ? (
            <span key={i} className="letter">{letters}</span>
          ) : (
            <span key={i} className="blankSquare"></span>
            )
        ))}
      </div>

      <div className="letterContainer">
        <p>Tente adivinhar uma letra da palavra:</p>
        <form onSubmit={handleSubmit}>
          <input type="text" name="letter" maxLength="1" required onChange={(e) => setLetter(e.target.value)} value={letter} ref={letterInputref} />
          <button>Jogar!</button>
        </form>
      </div>

      <div className="wrongLetterContainer">
        <p>Letras já utilizadas:</p>
        {wrongLetters.map((letter, i ) => (
          <span key={i}>{letter}, </span>
        ))}    
      </div>

    </div>
  )
}

export default Game