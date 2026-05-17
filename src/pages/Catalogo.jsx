import { useState } from "react";
import data from "../data/vehicles.json";
import VehicleCard from "../components/VehicleCard";

export default function Catalogo() {
  const [filtro, setFiltro] = useState("");

  const filtrados = data.filter(
    (car) =>
      car.marca.toLowerCase().includes(filtro.toLowerCase()) ||
      car.modelo.toLowerCase().includes(filtro.toLowerCase())
  );

  return (
    <main className="page-shell">
      <section className="page-header">
        <p className="section-kicker">Catalogo</p>
        <h1>Encontre a viatura certa</h1>
        <p className="section-lead">
          Pesquise por marca ou modelo e consulte as principais opcoes
          disponiveis.
        </p>
      </section>

      <section className="catalog-toolbar">
        <input
          type="text"
          placeholder="Pesquisar marca ou modelo"
          value={filtro}
          onChange={(e) => setFiltro(e.target.value)}
        />
        <p className="results-count">
          {filtrados.length} {filtrados.length === 1 ? "resultado" : "resultados"}
        </p>
      </section>

      <section className="vehicle-grid">
        {filtrados.map((car) => (
          <VehicleCard key={car.id} vehicle={car} />
        ))}
      </section>

      {filtrados.length === 0 && (
        <section className="empty-state">
          <h2>Sem resultados</h2>
          <p>Tente pesquisar por outra marca ou modelo.</p>
        </section>
      )}
    </main>
  );
}
