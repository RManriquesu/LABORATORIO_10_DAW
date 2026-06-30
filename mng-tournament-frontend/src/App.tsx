import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { HomePage } from './pages/HomePage'
import { TournamentsPage } from './pages/TournamentsPage'
import { OrganizersPage } from './pages/OrganizersPage'
import { TeamsPage } from './pages/TeamsPage'
import { PlayersPage } from './pages/PlayersPage'
import { PlayerTournamentsPage } from './pages/PlayerTournamentsPage'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tournaments" element={<TournamentsPage />} />
          <Route path="/organizers" element={<OrganizersPage />} />
          <Route path="/teams" element={<TeamsPage />} />
          <Route path="/players" element={<PlayersPage />} />
          <Route path="/player-tournaments" element={<PlayerTournamentsPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
