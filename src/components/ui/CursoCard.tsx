import { Link } from "react-router";

type CursoCardProps = {
  id: number;
  nombre: string;
  cantidadAlumnos: number;
};

function CursoCard({ id, nombre, cantidadAlumnos }: CursoCardProps) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', border: '1px solid black', padding: '10px', margin: '10px' }}>
      <h2>{nombre}</h2>
      <p>Alumnos: {cantidadAlumnos}</p>
      <Link to={`/estudiantes?curso=${id}`}>
        Ver estudiantes
      </Link>
    </div>
  );
}

export default CursoCard;
