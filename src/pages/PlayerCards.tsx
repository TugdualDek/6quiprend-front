import Card from "../components/Card.tsx";

import {PlayerCard} from "./interfaces.ts";

interface PlayerCards {
  playerCards: PlayerCard[];
}

export default function PlayerCards({playerCards}: PlayerCards) {
  return <footer className="bg-gray-200">
    <div className="flex p-2 md:p-4 justify-center gap-1 sm:gap-2 md:gap-4 overflow-x-scroll">
      {playerCards.map((card) => (
        <Card value={card.value} onClick={() => {
          console.log("card clicked");

        }}/>
      ))}
    </div>
  </footer>;
}