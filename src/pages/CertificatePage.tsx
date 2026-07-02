import { useParams, useNavigate } from 'react-router-dom'
import { useEnrollmentCertificate } from '../hooks/useEnrollmentCertificate'
import { CertificateView } from '../components/CertificateView'

export function CertificatePage() {
  const params = useParams()
  const cui = params.cui ?? ''
  const navigate = useNavigate()
  const { data, isLoading, isError } = useEnrollmentCertificate(cui)

  if (isLoading) {
    return <div className="status-message">Cargando constancia...</div>
  }

  if (isError) {
    return (
      <div className="status-message error">
        <p>Error al obtener la constancia. Verifique el C.U.I. ingresado.</p>
        <button onClick={() => navigate('/')}>Volver</button>
      </div>
    )
  }

  return (
    <div className="page-container">
      <button className="back-button" onClick={() => navigate('/')}>
        Volver
      </button>
      {data && <CertificateView data={data} />}
    </div>
  )
}