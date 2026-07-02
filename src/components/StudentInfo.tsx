import type { Student } from '../types/enrollment'
import { SectionHeader } from './SectionHeader'

interface StudentInfoProps {
  student: Student
}

export function StudentInfo({ student }: StudentInfoProps) {
  return (
    <section className="student-info">
      <SectionHeader title="DATOS DEL ALUMNO" />
      <div className="info-grid">
        <span className="info-label">C.U.I.:</span>
        <span>{student.cui}</span>
        <span className="info-label">Nombre completo:</span>
        <span>{student.full_name}</span>
        <span className="info-label">Email:</span>
        <span>{student.email}</span>
      </div>
    </section>
  )
}