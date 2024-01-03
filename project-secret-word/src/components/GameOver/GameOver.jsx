import "./GameOver.css";

const GameOver = ({ retry, score }) => {
  return (
    <div className="game_over">
        <h1>Game Over</h1>
        <h3>A sua pontuação foi: {score} </h3>
        <button onClick={retry}>Resetar Jogo</button>
    </div>
  )
}

export default GameOver