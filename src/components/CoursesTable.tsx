import type { EnrollmentResult } from '../types/enrollment'
import { SectionHeader } from './SectionHeader'

interface CoursesTableProps {
  enrollments: EnrollmentResult[]
  total: number
}

export function CoursesTable({ enrollments, total }: CoursesTableProps) {
  return (
    <section className="courses-section">
      <SectionHeader title="ASIGNATURAS MATRICULADAS" />
      <table className="courses-table">
        <thead>
          <tr>
            <th>N</th>
            <th>Codigo</th>
            <th>Curso</th>
            <th>Ano</th>
            <th>Grupo</th>
            <th>Laboratorio</th>
            <th>Docente</th>
          </tr>
        </thead>
        <tbody>
          {enrollments.map((e, index) => (
            <tr key={e.id}>
              <td>{index + 1}</td>
              <td>{e.workload.course.code}</td>
              <td>{e.workload.course.name} ({e.workload.course.acronym})</td>
              <td>{e.workload.course.year_display}</td>
              <td>{e.workload.group}</td>
              <td>{e.workload.laboratory}</td>
              <td>{e.workload.teacher.full_name}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="total-courses">Total de cursos matriculados: {total}</p>
    </section>
  )
}