import { useEffect, useState } from 'react';
import { getCursoById } from '../../http/api';
import EstudianteCard from '../ui/EstudianteCard';
import { useSearchParams } from 'react-router';

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

function EstudiantesScreen() {
  const [searchParams] = useSearchParams();
  const cursoId = searchParams.get('curso');
  const [curso, setCurso] = useState<Curso | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Este useEffect busca el curso por id
  useEffect(() => {
    if (!cursoId) {
      setError('No se seleccionó ningún curso.');
      return;
    }

    getCursoById(cursoId)
      .then(setCurso)
      .catch(() => setError('Error al cargar el curso.'));
  }, [cursoId]);

  if (error) return <p>{error}</p>;
  if (!curso) return <p>Cargando estudiantes...</p>;

  return (
    <div>
      <h1>Estudiantes de {curso.nombre}</h1>

      {/* Lista de estudiantes */}
      <div>
        {curso.estudiantes.map(est => (
          <EstudianteCard 
            key={est.id} 
            nombre={est.nombre} 
            edad={est.edad} />
        ))}
      </div>
    </div>
  );
}

export default EstudiantesScreen;
