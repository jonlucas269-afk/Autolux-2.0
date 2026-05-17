import { useFavorites } from "../hooks/useFavorites";
import VehicleCard from "../components/VehicleCard";

export default function Favoritos() {
  const { favorites } = useFavorites();

  return (
    <main className="page-shell">
      <section className="page-header page-header-left">
        <p className="section-kicker">Favoritos</p>
        <h1>As suas viaturas guardadas</h1>
        <p className="section-lead">
          Reuna aqui os modelos que pretende rever antes de entrar em contacto.
        </p>
      </section>

      {favorites.length === 0 && (
        <section className="empty-state">
          <h2>Ainda nao existem favoritos</h2>
          <p>Adicione viaturas aos favoritos para as consultar mais tarde.</p>
        </section>
      )}

      <section className="vehicle-grid">
        {favorites.map((v) => (
          <VehicleCard key={v.id} vehicle={v} />
        ))}
      </section>
    </main>
  );
}
