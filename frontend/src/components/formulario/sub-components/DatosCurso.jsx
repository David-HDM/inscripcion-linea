
function DatosCurso () {
  return (
    <section className="bg-white rounded-lg shadow-md p-6 max-w-2xl mx-auto border border-gray-300">
      <h2 className="text-2xl font-semibold text-purple-600 mb-4text-2xl font-semibold leading-tight tracking-normal text-purple-600 mb-4">Datos del Curso</h2>

      {/* Línea separadora verde minimalista (aprox. 2px, semi-transparente) */}
      <div className="mb-4 border-b border-green-500/60" aria-hidden="true" />


      <form className="space-y-4" noValidate>
        <div>
          <label htmlFor="areaArtistica" className="block text-sm font-bold text-gray-700">Área Artística</label>
          <select id="areaArtistica" name="areaArtistica" defaultValue=""
            className="mt-1 block w-full h-10 min-h-[40px] rounded-md border border-gray-300 bg-white px-3 py-2 text-base leading-6 text-gray-900 placeholder-gray-400 box-border focus:outline-none focus:border-green-300 focus:ring-1 focus:ring-green-200 appearance-none">
            <option value="" disabled>Seleccione...</option>
            {/* Opciones serán cargadas desde la base de datos */}
          </select>
        </div>

        <div>
          <label htmlFor="cursoSeleccionado" className="block text-sm font-bold text-gray-700">Curso</label>
          <select id="cursoSeleccionado" name="cursoSeleccionado" defaultValue=""
            className="mt-1 block w-full h-10 min-h-[40px] rounded-md border border-gray-300 bg-white px-3 py-2 text-base leading-6 text-gray-900 placeholder-gray-400 box-border focus:outline-none focus:border-green-300 focus:ring-1 focus:ring-green-200 appearance-none">
            <option value="" disabled>Seleccione...</option>
            {/* Opciones serán cargadas desde la base de datos */}
          </select>
        </div>
      </form>
    </section>
  );
}

export default DatosCurso;