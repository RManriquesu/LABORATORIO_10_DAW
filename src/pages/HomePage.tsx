import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export function HomePage() {
  const [cui, setCui] = useState('')
  const navigate = useNavigate()

  function handleSubmit() {
    if (cui.trim()) {
      navigate('/constancia/' + cui.trim())
    }
  }

  return (
    <div className="home-container">
      <div className="home-card">
        <h1>Sistema de Constancia de Matricula</h1>
        <p>Escuela Profesional de Ingenieria de Sistemas EPIS</p>
        <div className="search-box">
          <input
            type="text"
            placeholder="Ingrese su C.U.I."
            value={cui}
            onChange={(e) => setCui(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
          />
          <button onClick={handleSubmit}>Consultar</button>
        </div>
      </div>
    </div>
  )
}
