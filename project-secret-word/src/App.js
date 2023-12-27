import './App.css';

import { useCallback, useEffect, useState } from 'react';

import { wordsList } from './data/Words.jsx';

import StartScreen from './components/StartScreen/StartScreen';
import Game from './components/Game/Game';
import GameOver from './components/GameOver/GameOver';

const stages = [
  {
    id: 1,
    name: "start"
  },
  {
    id: 2,
    name: "game"
  },
  {
    id: 3,
    name: "end"
  }
];

function App() {

  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList);

  const [pickedWords, setPickWords] = useState("");
  const [pickedCategory, setPickedCategory] = useState("");
  const [letter, setLetter] = useState([]);
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [guesses, setGuesses] = useState(3);
  const [score, setScore] = useState(0);



  const pickWordAndCategory = () => {

    //random category.
    const categories = Object.keys(words);
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)];
    console.log(category);

    //random word.
    const word = words[category][Math.floor(Math.random() * words[category].length)];
    console.log(word);

    return {word, category};
  };

  //start game
  const startGame = () => {
    const {word, category} = pickWordAndCategory();

    //create array of letter
    let wordLetters = word.split("");
    wordLetters = wordLetters.map((lower) => lower.toLowerCase());
    //console.log(wordLetters);

    //states
    setPickWords(word);
    setPickedCategory(category);
    setLetter(wordLetters);

    setGameStage(stages[1].name);
  };

  //process letter input
  const verifyLetter = (word) => {
    console.log(word)
  };

  const retryGame = () => {
    setGameStage(stages[0].name);
  }

  return (
    <div className="App">
      {gameStage === "start" && <StartScreen startGame={startGame} />}
      {gameStage === "game" && <Game verifyLetter={verifyLetter} 
        pickedWords={pickedWords} 
        pickedCategory={pickedCategory} 
        letter={letter}
        guessedLetters={guessedLetters}
        wrongLetters={wrongLetters}
        guesses={guesses}
        score={score} />}
      {gameStage === "end" && <GameOver retry={retryGame} />}
    </div>  
  );
}

export default App;
