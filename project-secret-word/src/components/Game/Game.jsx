import { useState, useRef } from "react";
import "./Game.css";

const Game = ({ verifyLetter, pickedWords, pickedCategory, letter, guessedLetters, wrongLetters, guesses, score }) => {
  
  const [word, setWord] = useState("");
  const wordInputref = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    verifyLetter(word);

    setWord("");
    
    wordInputref.current.focus();
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
        {letter.map((letter, i) => (
          guessedLetters.includes(letter) ? (
            <span key={i} className="letter">{letter}</span>
          ) : (
            <span key={i} className="blankSquare"></span>
            )
        ))}
      </div>

      <div className="letterContainer">
        <p>Tente adivinhar uma letra da palavra:</p>
        <form onSubmit={handleSubmit}>
          <input type="text" name="letter" maxLength="1" required onChange={(e) => setWord(e.target.value)} value={word} ref={wordInputref} />
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