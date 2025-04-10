import { useEffect, useState } from 'react';
import { getCursos } from '../../http/api';
import CursoCard from '../ui/CursoCard';

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

  useEffect(() => {
    getCursos().then(setCursos).catch(console.error);
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
      <h1>Cursos</h1>
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
