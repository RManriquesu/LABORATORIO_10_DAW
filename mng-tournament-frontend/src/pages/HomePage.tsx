export function HomePage() {
  return (
    <div className="home-page">
      <h1>Sistema de Gestion de Torneos</h1>
      <p>Escuela Profesional de Ingenieria de Sistemas EPIS</p>
      <div className="home-grid">
        <div className="home-card">
          <h2>Torneos</h2>
          <p>Gestiona los torneos de videojuegos creados por los organizadores.</p>
        </div>
        <div className="home-card">
          <h2>Organizadores</h2>
          <p>Administra las organizaciones que crean torneos.</p>
        </div>
        <div className="home-card">
          <h2>Equipos</h2>
          <p>Visualiza y administra los equipos participantes.</p>
        </div>
        <div className="home-card">
          <h2>Jugadores</h2>
          <p>Gestiona los jugadores registrados en cada equipo.</p>
        </div>
        <div className="home-card">
          <h2>Inscripciones</h2>
          <p>Controla las inscripciones de jugadores en torneos.</p>
        </div>
      </div>
    </div>
  )
}
