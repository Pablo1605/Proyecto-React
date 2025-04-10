
// URL de la api
const BASE_URL = 'http://localhost:3000';

// Funcion que trae todos los cursos con sus estudiantes
export async function getCursos() {
  const res = await fetch(`${BASE_URL}/cursos`);
  if (!res.ok) throw new Error('Error al obtener cursos');
  return res.json();
}

// Funcion que trae un curso por id
export async function getCursoById(id: string) {
  const res = await fetch(`${BASE_URL}/cursos/${id}`);
  if (!res.ok) throw new Error('Curso no encontrado');
  return res.json();
}
