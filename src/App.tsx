import Accueil from "./pages/Accueil";
import { Routes, Route } from "react-router-dom";
import Jeu from "./pages/Jeu";

function App() {

  return (
    <Routes>
      <Route path="/" element={<Accueil />} />
      <Route path="/jeu" element={<Jeu />} />
      <Route path="*" element={<div>404</div>} />
    </Routes>
  );
}

export default App;
