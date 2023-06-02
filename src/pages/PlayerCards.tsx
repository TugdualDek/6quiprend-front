import Card from "../components/Card.tsx";

import {PlayerCard} from "./interfaces.ts";

interface PlayerCards {
  playerCards: PlayerCard[];
  handleClick: (card: PlayerCard) => void;
  clickable: boolean;
}

export default function PlayerCards({playerCards, handleClick, clickable}: PlayerCards) {

  return <footer className="bg-gray-200">
    <div className="flex p-2 md:p-4 justify-center gap-1 sm:gap-2 md:gap-4">
      {playerCards.map((card) => (
        <Card value={card.value} clickable={clickable} onClick={() => handleClick(card)}/>
      ))}
    </div>
  </footer>;
}