import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../components/Card";
import SweetToast from "../components/SweetToast.ts";
import PlayerCards from "./PlayerCards.tsx";
import { CardStack, Player, PlayerCard } from "./interfaces.ts";

export default function Jeu() {
  const [cardStacks, setCardStacks] = useState<CardStack[]>([]);
  const [players, setPlayers] = useState<Player[]>([]);
  const [playerCards, setPlayerCards] = useState<PlayerCard[]>([]);

  const client = axios.create({ baseURL: "http://localhost:8080/api/game" });

  useEffect(() => {
    client.post("/start").then((response) => {
      setCardStacks(JSON.parse(response.data?.cardStacksJson));
      setPlayers(JSON.parse(response.data?.scoreBoardJson));
      setPlayerCards(JSON.parse(response.data?.playerCardsJson));
    }).catch((error) => {
      SweetToast.fire({ icon: "error", title: error?.message });
      console.error(error)
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // const cardStacks: CardStack[] = JSON.parse("[{\"cards\":[89],\"stackId\":0,\"topValue\":89},{\"cards\":[29],\"stackId\":1,\"topValue\":29},{\"cards\":[51],\"stackId\":2,\"topValue\":51},{\"cards\":[47],\"stackId\":3,\"topValue\":47}]");
  // const players: Player[] = JSON.parse("[{\"name\": \"A Very Long Name\", \"score\": 0},{\"name\": \"Someone Else\", \"score\": 0}]");
  // const playerCards: PlayerCard[] = JSON.parse("[{\"heads\":5,\"value\":11},{\"heads\":1,\"value\":42},{\"heads\":1,\"value\":49},{\"heads\":3,\"value\":60},{\"heads\":1,\"value\":72},{\"heads\":2,\"value\":75},{\"heads\":1,\"value\":81},{\"heads\":1,\"value\":96},{\"heads\":1,\"value\":97},{\"heads\":1,\"value\":101}]");

  return (
    cardStacks?.length > 0 ? (
      <div className="flex flex-col h-screen w-screen">
        <div className="flex-grow flex bg-wood">
          <div className="w-1/5 p-4 flex items-center justify-center">
            <div className="flex flex-col gap-2">
              <Card value={2} />
              <Card value={25} />
            </div>
          </div>
          <div className="flex flex-col gap-4 w-3/5 p-4 items-center justify-center">
            {/* Contenu de la première partie */}
            {cardStacks.map((cardStack: CardStack) => (
              <div className="flex gap-2" key={cardStack.stackId}>
                {cardStack.cards.map((value: number, index: number) => (
                  <Card key={index} value={value} />
                ))}
                {[...Array(5 - cardStack.cards.length)].map((_, index: number) => (
                  <Card key={index} />
                ))}
                <Card head />
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-4 w-1/5 p-4 items-center justify-center">
            {players.map((player: Player, index: number) => (
              <div className="bg-gray-200 p-2 lg:p-4 text-center" key={index}>
                <p>{player.playerName}</p>
                <p>Score: {player.playerScore}</p>
              </div>
            ))}
          </div>
        </div>
        <PlayerCards playerCards={playerCards} />
      </div>
    ) : "Loading..."
  );
}
