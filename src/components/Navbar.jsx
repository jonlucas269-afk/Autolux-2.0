import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="nav">
      <div className="nav-brand">
        <span className="nav-kicker">Stand online</span>
        <h2>AutoLux</h2>
      </div>

      <nav className="nav-links" aria-label="Navegacao principal">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/catalogo">Catalogo</NavLink>
        <NavLink to="/favoritos">Favoritos</NavLink>
      </nav>
    </header>
  );
}
