


function DatosTutor() {

    return (

    <section className="bg-white rounded-lg shadow-md p-6 max-w-2xl mx-auto border border-gray-300">

        {/*Título del componente*/}
        <h2 className="text-2xl font-semibold leading-tight tracking-normal text-purple-600 mb-4">Datos del tutor</h2>

        {/* Separador verde */}
        <div className="mb-4 border-b border-green-500/60" aria-hidden="true" />

        <form className="space-y-4" noValidate>

            {/* Etiqueta y campo para el nombre */}
            <div>
                <label htmlFor="nombre" className="block text-sm font-bold text-gray-700">Nombre</label>
                <input id = "nombre" name = "nombre" type = "text" required placeholder = "Nombres(s)"
                 className = "mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-green-300 focus:ring-1 focus:ring-green-200">
                </input>
            </div>

            <div>
                
                {/* Etiqueta y campo para el apellido paterno */}
                <div>
                    <label htmlFor="apellidoPaterno" className="block text-sm font-bold text-gray-700">Apellido Paterno</label>
                    <input id = "apellidoPaterno" name = "apellidoPaterno" type = "text" required placeholder = "Apellido paterno"
                    className = "mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-green-300 focus:ring-1 focus:ring-green-200">
                    </input>
                </div>

                {/* Etiqueta y campo para el apellido materno */}
                <div>
                    <label htmlFor="apellidoMaterno" className="block text-sm font-bold text-gray-700">Apellido Materno</label>
                    <input id = "apellidoMaterno" name = "apellidoMaterno" type = "text" placeholder = "Apellido materno"
                    className = "mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-green-300 focus:ring-1 focus:ring-green-200">
                    </input>
                </div>

            </div>

            <div>

                {/* Etiqueta y campo para el teléfono móvil */}
                <div>
                    <label htmlFor="telefonoMovil" className="block text-sm font-bold text-gray-700">Teléfono móvil</label>
                    <input id = "telefonoMovil" name = "telefonoMovil" type = "tel" required placeholder = "+591 71234567"
                    className = "mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-green-300 focus:ring-1 focus:ring-green-200">
                    </input>
                </div>

                {/* Etiqueta y campo para la fecha de nacimiento */}
                <div>
                    <label htmlFor="fechaNacimiento" className="block text-sm font-bold text-gray-700">Fecha de nacimiento</label>
                    <input id = "fechaNacimiento" name = "fechaNacimiento" type = "date" required
                    className = "mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-green-300 focus:ring-1 focus:ring-green-200">
                    </input>
                </div>

            </div>

            <div>
                {/* Etiqueta y campo para el domicilio */}
                <label htmlFor="domicilio" className="block text-sm font-bold text-gray-700">Domicilio</label>
                <input id = "domicilio" name = "domicilio" type = "text" required placeholder = "Domicilio"
                className = "mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-green-300 focus:ring-1 focus:ring-green-200">
                </input>
            </div>

            <div>
                {/* Etiqueta y campo para colocar la relación con el menor */}
                <label htmlFor="relacion" className="block text-sm font-bold text-gray-700">Relación con el menor</label>
                <select id="relacion" name="relacion" required
                className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-green-300 focus:ring-1 focus:ring-green-200">
                    <option value="">Seleccione...</option>
                    <option value="padre">Padre</option>
                    <option value="madre">Madre</option>
                    <option value="tutor">Tutor</option>
                </select>
            </div>

        </form>
        
    </section>

    );
}

export default DatosTutor;