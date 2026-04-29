import { useFavorites } from "../hooks/useFavorites";

export default function VehicleCard({ vehicle }) {
  const { favorites, toggleFavorite } = useFavorites();

  const isFav = favorites.some((f) => f.id === vehicle.id);
  const precoFormatado = new Intl.NumberFormat("pt-PT").format(vehicle.preco);
  const kmFormatado = new Intl.NumberFormat("pt-PT").format(vehicle.km);

  return (
    <div className="card">
      <div className="car-image-wrap">
        <img
          className="car-image"
          src={vehicle.imagem}
          alt={vehicle.modelo}
        />
      </div>

      <div className="info">
        <h3>
          {vehicle.marca} {vehicle.modelo}
        </h3>

        <p className="vehicle-description">{vehicle.descricao}</p>

        <div className="vehicle-meta">
          <span>{vehicle.ano}</span>
          <span>{vehicle.combustivel}</span>
          <span>{kmFormatado} km</span>
        </div>

        <p className="price">{precoFormatado} EUR</p>

        <div className="card-actions">
          <button className="btn" type="button">
            Ver Detalhes
          </button>

          <a
            className="btn-whatsapp"
            href={`https://wa.me/351914145645?text=Estou interessado no ${vehicle.marca} ${vehicle.modelo}`}
            target="_blank"
            rel="noreferrer"
          >
            Contactar
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
    </div>
  );
}
