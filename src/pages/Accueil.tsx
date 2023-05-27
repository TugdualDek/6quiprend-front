import { Link} from "react-router-dom";

export default function Accueil() {
  return (
    <div className="h-full w-full">
      <div className="flex h-screen flex-col justify-center items-center gap-10">
        <div className="flex flex-col items-center justify-center">
          <label className="text-6xl font-bold">6 Qui Prend</label>
          <label className="text-4xl font-bold">Bienvenue</label>
        </div>

        <div className="flex flex-col items-center justify-center">
          <Link to="/jeu">
            <button className="btn btn-primary rounded-xl">
              Jouer contre l'ordinateur
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
