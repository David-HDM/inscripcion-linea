// Para actualizar los desplegables y guardar en el contexto

import { useEffect, useState, useContext } from 'react';
import { InscripcionContext } from '../../../context/InscripcionContext';

function DatosCurso () {

  const [areas, setAreas] = useState([]);
  const [cursos, setCursos] = useState([]);
  const [areaSeleccionada, setAreaSeleccionada] = useState('');
  const { setDatosCurso, setDatosPago } = useContext(InscripcionContext);

  useEffect(() => {
    async function fetchData() {
      const resAreas = await fetch('http://localhost:3000/api/areas-artisticas');
      const resCursos = await fetch('http://localhost:3000/api/cursos-ofertados');
      const dataAreas = await resAreas.json();
      const dataCursos = await resCursos.json();
      setAreas(dataAreas);
      setCursos(dataCursos);
    }
    fetchData();
  }, []);

  const handleChange = (e) => {
  const { name, value } = e.target;

  // Actualiza el ID seleccionado (solo para filtrar cursos)
  setDatosCurso(prev => ({ ...prev, [name]: value }));

  // Área: guarda solo el nombre
  if (name === 'areaArtistica') {
    setAreaSeleccionada(value); // para filtrar cursos
    const area = areas.find(a => a.idArea === parseInt(value));
    if (area) {
      setDatosCurso(prev => ({
        ...prev,
        nombreArea: area.nombre // ← solo el nombre
      }));
    }
  }

  // Curso: guarda solo el nombre en DatosCurso y el monto en DatosPago
  if (name === 'cursoSeleccionado') {
    const curso = cursos.find(c => c.idCurso === parseInt(value));
    if (curso) {
      setDatosCurso(prev => ({
        ...prev,
        nombreCurso: curso.nombre // ← solo el nombre
      }));
      setDatosPago(prev => ({
        ...prev,
        monto: curso.costo // ← monto sí va en DatosPago
      }));
    }
  }
};

  const cursosFiltrados = cursos.filter(curso => curso.idArea === parseInt(areaSeleccionada));

  return (
    <section className="bg-white rounded-lg shadow-md p-6 max-w-2xl mx-auto border border-gray-300">
      <h2 className="text-2xl font-semibold text-purple-600 mb-4text-2xl font-semibold leading-tight tracking-normal text-purple-600 mb-4">Datos del Curso</h2>

      {/* Línea separadora verde minimalista (aprox. 2px, semi-transparente) */}
      <div className="mb-4 border-b border-green-500/60" aria-hidden="true" />


      <form className="space-y-4" noValidate>
        <div>
          <label htmlFor="areaArtistica" className="block text-sm font-bold text-gray-700">Área Artística</label>
          <select id="areaArtistica" name="areaArtistica" onChange={handleChange} value={areaSeleccionada}
            className="mt-1 block w-full h-10 min-h-[40px] rounded-md border border-gray-300 bg-white px-3 py-2 text-base leading-6 text-gray-900 placeholder-gray-400 box-border focus:outline-none focus:border-green-300 focus:ring-1 focus:ring-green-200 appearance-none">
            <option value="" disabled>Seleccione...</option>
            {areas.map(area => (
              <option key={area.idArea} value={area.idArea}>{area.nombre}</option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="cursoSeleccionado" className="block text-sm font-bold text-gray-700">Curso</label>
          <select id="cursoSeleccionado" name="cursoSeleccionado" onChange={handleChange} defaultValue=""
            className="mt-1 block w-full h-10 min-h-[40px] rounded-md border border-gray-300 bg-white px-3 py-2 text-base leading-6 text-gray-900 placeholder-gray-400 box-border focus:outline-none focus:border-green-300 focus:ring-1 focus:ring-green-200 appearance-none">
            <option value="" disabled>Seleccione...</option>
            {cursosFiltrados.map(curso => (
              <option key={curso.idCurso} value={curso.idCurso}>{curso.nombre}</option>
            ))}
          </select>
        </div>
      </form>
    </section>
  );
}

export default DatosCurso;