import React, { useEffect, useState } from 'react'
import GameOver from './components/GameOver';
import GameBoard from './components/GameBoard';
import game from './game/game';

export default function MemoryGame() {

  const [gameOver, setGameOver] = useState(false);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    setCards(game.createCardsFromTechs());
  }, [])

  function restart() {
    game.clearCards();
    setCards(game.createCardsFromTechs());
    setGameOver(false);
  }

  function handleFlip(card) {
    if (game.setCard(card.id)) {
      if (game.secondCard) {
        if (game.checkMatch()) {
          game.clearCards();
          if (game.checkGameOver()) {
            //Game Over
            setGameOver(true);
          }
        } else {
          setTimeout(() => {
            //No match
            game.unflipCards();
            setCards([...game.cards])
          }, 1000)
        };
      }
    };
    setCards([...game.cards])
  }

  return (
    <div>
      <GameBoard handleFlip={handleFlip} cards={cards}></GameBoard>
      <GameOver shouldBeShow={gameOver} handleRestart={restart}></GameOver>
    </div>
  )
}
