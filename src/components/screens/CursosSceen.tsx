import { useEffect, useState } from 'react';
import { getCursos } from '../../http/api';
import CursoCard from '../ui/CursoCard';

// Tipado
type Estudiante = { 
    id: number; 
    nombre: string; 
    edad: number 
};

type Curso = { 
    id: number; 
    nombre: string; 
    estudiantes: Estudiante[] 
};

function CursosScreen() {
  const [cursos, setCursos] = useState<Curso[]>([]);

  // Con este useEffect se cargan los cursos al montar el componente
  useEffect(() => {
    getCursos().then(setCursos).catch(console.error);
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
      <h1>Cursos</h1>
      {/* Aca se renderiza una tarjeta por cada curso */}
      <div>
        {cursos.map(curso => (
          <CursoCard
            key={curso.id}
            id={curso.id}
            nombre={curso.nombre}
            cantidadAlumnos={curso.estudiantes.length}
          />
        ))}
      </div>
    </div>
  );
}

export default CursosScreen;
