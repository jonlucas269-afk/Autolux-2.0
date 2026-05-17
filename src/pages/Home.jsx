import data from "../data/vehicles.json";
import VehicleCard from "../components/VehicleCard";

export default function Home() {
  const destaques = data.slice(0, 3);
  const precoMedio = Math.round(
    data.reduce((total, vehicle) => total + vehicle.preco, 0) / data.length
  );
  const precoMedioFormatado = new Intl.NumberFormat("pt-PT").format(precoMedio);

  return (
    <main className="page-shell">
      <section className="hero-banner">
        <img
          className="hero-banner-image"
          src="https://uploads.turbologo.com/uploads/design/preview_image/90770512/watermark_preview_image20260412-1-1xvb7jx.png"
          alt="AutoLux Logo"
        />
      </section>

      <section className="hero-copy">
        <p className="section-kicker">Viaturas selecionadas</p>
        <h1>Bem-vindo a AutoLux</h1>
        <p className="section-lead">
          Solucoes simples para encontrar viaturas premium, desportivas e
          familiares num unico catalogo.
        </p>
      </section>

      <section className="stats-grid">
        <article className="stat-card">
          <strong>{data.length}</strong>
          <span>Viaturas disponiveis</span>
        </article>
        <article className="stat-card">
          <strong>{precoMedioFormatado} EUR</strong>
          <span>Preco medio</span>
        </article>
        <article className="stat-card">
          <strong>Contacto direto</strong>
          <span>Resposta por WhatsApp</span>
        </article>
      </section>

      <section className="section-heading">
        <div>
          <p className="section-kicker">Destaques</p>
          <h2>Modelos em evidência</h2>
        </div>
      </section>

      <section className="vehicle-grid">
        {destaques.map((car) => (
          <VehicleCard key={car.id} vehicle={car} />
        ))}
      </section>
    </main>
  );
}
