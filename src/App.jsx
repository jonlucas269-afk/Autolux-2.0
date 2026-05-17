import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Catalogo from "./pages/Catalogo";
import Favoritos from "./pages/Favoritos";
import DetalhesVeiculo from "./pages/DetalhesVeiculo";
import Navbar from "./components/Navbar";
import { FavoritesProvider } from "./context/FavoritesContext";
import "./App.css";

export default function App() {
  return (
    <FavoritesProvider>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalogo" element={<Catalogo />} />
          <Route path="/favoritos" element={<Favoritos />} />
          <Route path="/viaturas/:id" element={<DetalhesVeiculo />} />
        </Routes>
      </BrowserRouter>
    </FavoritesProvider>
  );
}
