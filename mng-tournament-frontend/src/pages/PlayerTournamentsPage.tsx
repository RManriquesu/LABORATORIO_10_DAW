import { useState } from 'react'
import type { PlayerTournament } from '../types/tournament'
import {
  useCreateResource,
  useDeleteResource,
  useResourceList,
  useUpdateResource,
} from '../hooks/useResource'

const RESOURCE = 'player-tournaments'

const emptyForm = {
  score: 0,
  finalPosition: 0,
  status: true,
  player: 0,
  tournament: 0,
}

export function PlayerTournamentsPage() {
  const { data, isLoading, isError } = useResourceList<PlayerTournament>(RESOURCE)
  const createMutation = useCreateResource<PlayerTournament>(RESOURCE)
  const updateMutation = useUpdateResource<PlayerTournament>(RESOURCE)
  const deleteMutation = useDeleteResource(RESOURCE)

  const [form, setForm] = useState(emptyForm)
  const [editingId, setEditingId] = useState<number | null>(null)

  function handleChange(field: string, value: number | boolean) {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  function handleSubmit() {
    if (editingId) {
      updateMutation.mutate({ id: editingId, data: form })
    } else {
      createMutation.mutate(form)
    }
    setForm(emptyForm)
    setEditingId(null)
  }

  function handleEdit(pt: PlayerTournament) {
    setEditingId(pt.id)
    setForm({
      score: pt.score,
      finalPosition: pt.finalPosition,
      status: pt.status,
      player: pt.player,
      tournament: pt.tournament,
    })
  }

  function handleCancel() {
    setForm(emptyForm)
    setEditingId(null)
  }

  function handleDelete(id: number) {
    if (confirm('Esta seguro de eliminar esta inscripcion?')) {
      deleteMutation.mutate(id)
    }
  }

  if (isLoading) return <div className="status-message">Cargando inscripciones...</div>
  if (isError) return <div className="status-message error">Error al cargar inscripciones</div>

  return (
    <div className="page-container">
      <h1>Inscripciones (Player Tournament)</h1>

      <div className="form-card">
        <h2>{editingId ? 'Editar Inscripcion' : 'Nueva Inscripcion'}</h2>
        <div className="form-grid">
          <input
            type="number"
            placeholder="ID del jugador"
            value={form.player}
            onChange={(e) => handleChange('player', Number(e.target.value))}
          />
          <input
            type="number"
            placeholder="ID del torneo"
            value={form.tournament}
            onChange={(e) => handleChange('tournament', Number(e.target.value))}
          />
          <input
            type="number"
            placeholder="Puntaje"
            value={form.score}
            onChange={(e) => handleChange('score', Number(e.target.value))}
          />
          <input
            type="number"
            placeholder="Posicion final"
            value={form.finalPosition}
            onChange={(e) => handleChange('finalPosition', Number(e.target.value))}
          />
          <label className="checkbox-label">
            <input
              type="checkbox"
              checked={form.status}
              onChange={(e) => handleChange('status', e.target.checked)}
            />
            Activo
          </label>
        </div>
        <div className="form-actions">
          <button onClick={handleSubmit}>{editingId ? 'Actualizar' : 'Crear'}</button>
          {editingId && <button onClick={handleCancel} className="secondary">Cancelar</button>}
        </div>
      </div>

      <table className="data-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Jugador</th>
            <th>Torneo</th>
            <th>Puntaje</th>
            <th>Posicion</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((pt) => (
            <tr key={pt.id}>
              <td>{pt.id}</td>
              <td>{pt.player}</td>
              <td>{pt.tournament}</td>
              <td>{pt.score}</td>
              <td>{pt.finalPosition}</td>
              <td>{pt.status ? 'Activo' : 'Inactivo'}</td>
              <td>
                <button onClick={() => handleEdit(pt)}>Editar</button>
                <button onClick={() => handleDelete(pt.id)} className="danger">Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
