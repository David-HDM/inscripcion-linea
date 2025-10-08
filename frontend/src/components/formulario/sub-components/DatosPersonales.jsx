
function DatosPersonales () {
  return (
    <section className="bg-white rounded-lg shadow-md p-6 max-w-2xl mx-auto border border-gray-300">
    <h2 className="text-2xl font-semibold leading-tight tracking-normal text-purple-600 mb-4">Datos personales</h2>

    {/* Separador consistente: 1px border-bottom semitransparente */}
  <div className="mb-4 border-b border-green-500/60" aria-hidden="true" />

  <form className="space-y-4" noValidate>
        <div>
          <label htmlFor="nombre" className="block text-sm font-bold text-gray-700">Nombre</label>
          <input id="nombre" name="nombre" type="text" required placeholder="Nombre(s)"
            className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-green-300 focus:ring-1 focus:ring-green-200" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="apellidoP" className="block text-sm font-bold text-gray-700">Apellido Paterno</label>
            <input id="apellidoP" name="apellidoP" type="text" required placeholder="Apellido paterno"
              className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-green-300 focus:ring-1 focus:ring-green-200" />
          </div>

          <div>
            <label htmlFor="apellidoM" className="block text-sm font-bold text-gray-700">Apellido Materno</label>
            <input id="apellidoM" name="apellidoM" type="text" placeholder="Apellido materno"
              className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-green-300 focus:ring-1 focus:ring-green-200" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="fechaNacimiento" className="block text-sm font-bold text-gray-700">Fecha de nacimiento</label>
            <input id="fechaNacimiento" name="fechaNacimiento" type="date" required
              className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 focus:outline-none focus:border-green-300 focus:ring-1 focus:ring-green-200" />
          </div>

          <div>
            <label htmlFor="telefono" className="block text-sm font-bold text-gray-700">Teléfono móvil</label>
            <input id="telefono" name="telefono" type="tel" required placeholder="+591 71234567"
              className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-green-300 focus:ring-1 focus:ring-green-200" />
          </div>
        </div>

      </form>
    </section>
  );
}

export default DatosPersonales;