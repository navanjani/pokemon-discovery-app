import { NavLink, Route, Routes } from "react-router-dom";
import "./App.css";
import PokemonDetailsPage from "./pages/PokemonDetailsPage";
import PokemonListPage from "./pages/PokemonListPage";

function App() {
  return (
    <div className="App">
      <NavLink to="/">Home</NavLink>
      <Routes>
        <Route path="/" element={<PokemonListPage />} />
        <Route path="/details/:pokemon_name" element={<PokemonDetailsPage />} />
      </Routes>
    </div>
  );
}

export default App;
