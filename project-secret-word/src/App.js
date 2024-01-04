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

const guessesNumber = 3;

function App() {

  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList);

  const [pickedWords, setPickWords] = useState("");
  const [pickedCategory, setPickedCategory] = useState("");
  const [letters, setLetters] = useState([]);
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [guesses, setGuesses] = useState(guessesNumber);
  const [score, setScore] = useState(0);

  const pickWordAndCategory = useCallback(() => {

    //random category.
    const categories = Object.keys(words);
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)];
    
    //console.log(category);

    //random word.
    const word = words[category][Math.floor(Math.random() * words[category].length)];
    
    //console.log(word);

    return {word, category};
  }, [words]);

  //start game
  const startGame = useCallback(() => {

    //clear all letters
    clearLetterStates();

    const {word, category} = pickWordAndCategory();

    //create array of letter
    let wordLetters = word.split("");
    wordLetters = wordLetters.map((lower) => lower.toLowerCase());
    //console.log(wordLetters);

    //states
    setPickWords(word);
    setPickedCategory(category);
    setLetters(wordLetters);

    setGameStage(stages[1].name);
  }, [pickWordAndCategory]);

  //process letter input
  const verifyLetter = (letter) => {
    
    const normalizedLetter = letter.toLowerCase();

    //check if letter has already been utilized
    if(guessedLetters.includes(normalizedLetter) || wrongLetters.includes(normalizedLetter)){
      return;
    }
    
    //push guessed letter or remove a guess
    if(letters.includes(normalizedLetter)){
      setGuessedLetters((actualGuessedLetters) => [
        ...actualGuessedLetters,
        normalizedLetter
      ]);
    }else{
      setWrongLetters((actualWrongLetters) => [
        ...actualWrongLetters,
        normalizedLetter
      ]);

      setGuesses((actualGuesses) => actualGuesses - 1);
    }
  };

  const clearLetterStates = () => {
    setGuessedLetters([]);
    setWrongLetters([]);
  }

  useEffect(() => {
    if(guesses <= 0){
      //reset all states
      clearLetterStates();
      setGameStage(stages[2].name)
    }
  }, [guesses])

  //check win conditions
  useEffect(() => {
    const uniqueLetters = [...new Set(letters)];

    //win conditions
    if(guessedLetters.length === uniqueLetters.length && gameStage === stages[1].name){
      //add score
      setScore((actualScore) => actualScore += 100);

      //restart game with new word
      startGame();
    }

  }, [guessedLetters, letters, startGame]);

  //restart game
  const retryGame = () => {
    setScore(0);
    setGuesses(guessesNumber);
    setGameStage(stages[0].name);
  }

  return (
    <div className="App">
      {gameStage === "start" && <StartScreen startGame={startGame} />}
      {gameStage === "game" && (
        <Game
          verifyLetter={verifyLetter} 
          pickedWords={pickedWords} 
          pickedCategory={pickedCategory} 
          letters={letters}
          guessedLetters={guessedLetters}
          wrongLetters={wrongLetters}
          guesses={guesses}
          score={score}
        />
      )}
      {gameStage === "end" && <GameOver retry={retryGame} score={score} />}
    </div>  
  );
}

export default App;
