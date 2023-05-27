import Card from "../components/Card";

export default function Jeu() {
  const deck = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow flex-row min-w-screen px-5">
        <div className="flex">
          <div className="w-1/3 p-4 flex items-center justify-center">
            <div className="flex flex-col gap-2">
              <Card empty={false} value={2} />
              <Card empty={false} value={25} />
            </div>
          </div>
          <div className="flex flex-col gap-4 w-1/3 p-4 items-center justify-center">
            {/* Contenu de la première partie */}
            <div className="flex flex-row gap-2">
              <Card empty={true} />
              <Card empty={true} />
              <Card empty={true} />
              <Card empty={true} />
              <Card empty={true} />
              <Card empty={false} />
            </div>
            <div className="flex flex-row gap-2">
              <Card empty={true} />
              <Card empty={true} />
              <Card empty={true} />
              <Card empty={true} />
              <Card empty={true} />
              <Card empty={false} />
            </div>
            <div className="flex flex-row gap-2">
              <Card empty={true} />
              <Card empty={true} />
              <Card empty={true} />
              <Card empty={true} />
              <Card empty={true} />
              <Card empty={false} />
            </div>
            <div className="flex flex-row gap-2">
              <Card empty={true} />
              <Card empty={true} />
              <Card empty={true} />
              <Card empty={true} />
              <Card empty={true} />
              <Card empty={false} />
            </div>
          </div>
          <div className="flex flex-col gap-4 w-1/3 p-4 items-center justify-center">
            <div className="grid grid-cols-2 grid-rows-2 gap-4 bg-accent">
              <div className="bg-gray-200 p-4">Nom 1</div>
              <div className="bg-gray-200 p-4">Nom 2</div>
              <div className="bg-gray-200 p-4">Score 1</div>
              <div className="bg-gray-200 p-4">Score 2</div>
            </div>
          </div>
        </div>
      </div>
      <footer className="bg-gray-200 py-6">
        {/* Contenu de votre footer */}
        <div className="flex flex-row justify-center gap-10">
          {/*deck de cartes */}
          {deck.map((card) => (
            <div className="rounded-xl">
              <Card value={card} empty={false} />
            </div>
          ))}
        </div>
      </footer>
    </div>
  );
}
