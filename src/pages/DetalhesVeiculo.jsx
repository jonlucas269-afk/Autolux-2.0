import { Link, useParams } from "react-router-dom";
import data from "../data/vehicles.json";
import { useFavorites } from "../hooks/useFavorites";

export default function DetalhesVeiculo() {
  const { id } = useParams();
  const { favorites, toggleFavorite } = useFavorites();

  const vehicle = data.find((item) => item.id === Number(id));

  if (!vehicle) {
    return (
      <main className="page-shell">
        <section className="empty-state">
          <h2>Viatura nao encontrada</h2>
          <p>O carro que procurou nao existe ou foi removido do catalogo.</p>
          <Link className="btn detail-back" to="/catalogo">
            Voltar ao Catalogo
          </Link>
        </section>
      </main>
    );
  }

  const isFav = favorites.some((item) => item.id === vehicle.id);
  const precoFormatado = new Intl.NumberFormat("pt-PT").format(vehicle.preco);
  const kmFormatado = new Intl.NumberFormat("pt-PT").format(vehicle.km);

  return (
    <main className="page-shell">
      <section className="detail-header">
        <Link className="detail-back-link" to="/catalogo">
          Voltar ao Catalogo
        </Link>
        <p className="section-kicker">Detalhes da viatura</p>
        <h1>
          {vehicle.marca} {vehicle.modelo}
        </h1>
      </section>

      <section className="detail-layout">
        <div className="detail-image-panel">
          <img
            className="detail-image"
            src={vehicle.imagem}
            alt={`${vehicle.marca} ${vehicle.modelo}`}
          />
        </div>

        <div className="detail-content">
          <div className="detail-price-card">
            <span className="detail-price-label">Preco</span>
            <strong className="detail-price">{precoFormatado} EUR</strong>
            <p className="detail-summary">
              Viatura selecionada, pronta para entrega e com informacao completa
              para consulta.
            </p>
          </div>

          <div className="detail-specs">
            <article className="detail-spec">
              <span>Ano</span>
              <strong>{vehicle.ano}</strong>
            </article>
            <article className="detail-spec">
              <span>Combustivel</span>
              <strong>{vehicle.combustivel}</strong>
            </article>
            <article className="detail-spec">
              <span>Quilometragem</span>
              <strong>{kmFormatado} km</strong>
            </article>
            <article className="detail-spec">
              <span>Potencia</span>
              <strong>{vehicle.potencia}</strong>
            </article>
            <article className="detail-spec">
              <span>Caixa</span>
              <strong>{vehicle.caixa}</strong>
            </article>
            <article className="detail-spec">
              <span>Cor</span>
              <strong>{vehicle.cor}</strong>
            </article>
          </div>

          <section className="detail-description">
            <h2>Descricao</h2>
            <p>{vehicle.descricao}</p>
          </section>

          <div className="detail-actions">
            <a
              className="btn-whatsapp"
              href={`https://wa.me/351914145645?text=Estou interessado no ${vehicle.marca} ${vehicle.modelo}`}
              target="_blank"
              rel="noreferrer"
            >
              Contactar no WhatsApp
            </a>
            <button
              className="btn-fav"
              type="button"
              onClick={() => toggleFavorite(vehicle)}
            >
              {isFav ? "Remover Favorito" : "Adicionar aos Favoritos"}
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
