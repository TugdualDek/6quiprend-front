import {useEffect, useState} from "react";
import Card from "../components/Card";
import SweetToast from "../components/SweetToast.ts";
import PlayerCards from "./PlayerCards.tsx";
import {CardStack, Player, PlayerCard} from "./interfaces.ts";
import client from "../api/axios.ts";

export default function Jeu() {
  const [cardStacks, setCardStacks] = useState<CardStack[]>([]);
  const [players, setPlayers] = useState<Player[]>([]);
  const [playerCards, setPlayerCards] = useState<PlayerCard[]>([]);
  const [selectedCards, setSelectedCards] = useState<PlayerCard[]>([]);
  const addCardToList = (newCard: PlayerCard) => {
    setSelectedCards((prevSelectedCards) => [...prevSelectedCards, newCard]);
  };
  const [clickable, setClickable] = useState<boolean>(true);


  useEffect(() => {
    client.post("/start").then((response) => {
      setCardStacks(JSON.parse(response.data?.cardStacksJson));
      setPlayers(JSON.parse(response.data?.scoreBoardJson));
      setPlayerCards(JSON.parse(response.data?.playerCardsJson));
    }).catch((error) => {
      SweetToast.fire({icon: "error", title: error?.message});
      console.error(error);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClick = async (card: PlayerCard) => {
    if (!clickable) return;
    console.log("card clicked");
    setPlayerCards((playerCards) => playerCards.filter((c) => c !== card));
    addCardToList(card);
    setClickable(false);

    await client.post('/selectCard', {cardId: card.value}).then(
      async (response) => {
        if (response.data?.message) {
          SweetToast.fire({icon: "error", title: response.data?.message});
          setClickable(true); // @TODO: remove this line
        } else {
          setClickable(true);
        }
        setCardStacks(JSON.parse(response.data?.cardStacksJson));
        setPlayers(JSON.parse(response.data?.scoreBoardJson));
        setPlayerCards(JSON.parse(response.data?.playerCardsJson));
        await new Promise(r => setTimeout(r, 1000));
        setSelectedCards([]);
      }
    ).catch((error) => {
        SweetToast.fire({icon: "error", title: error?.message});
        console.error(error);
      }
    );
  };


  return (
    cardStacks?.length > 0 ? (
      <div className="flex flex-col h-screen w-screen">
        <div className="flex-grow flex bg-wood">
          <div className="w-1/5 p-4 flex items-center justify-center">
            <div className="flex flex-col gap-2">
              {selectedCards && (
                selectedCards.map(({value}: PlayerCard, index: number) => (
                  <Card value={value} key={index}/>
                )))
              }
            </div>
          </div>
          <div className="flex flex-col gap-4 w-3/5 p-4 items-center justify-center">
            {/* Contenu de la première partie */}
            {cardStacks.map((cardStack: CardStack) => (
              <div className="flex gap-2" key={cardStack.stackId}>
                {cardStack.cards.map((value: number, index: number) => (
                  <Card key={index} value={value}/>
                ))}
                {[...Array(5 - cardStack.cards.length)].map((_, index: number) => (
                  <Card key={index}/>
                ))}
                <Card head/>
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
        <PlayerCards playerCards={playerCards} handleClick={handleClick} clickable={clickable}/>
      </div>
    ) : "Loading..."
  );
}
