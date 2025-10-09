//Para guardar en el contexto

import { useContext, useState } from 'react';
import { InscripcionContext } from '../../../context/InscripcionContext';
import { validarNombre, 
         validarApellido, 
         validarTelefono, 
         validarFechaNacimiento 
       } from '../../../utils/validaciones';


function DatosPersonales () {

  const { setDatosPersonales, setEsMenorEdad } = useContext(InscripcionContext);
  const [errores, setErrores] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'nombre') {
      const error = validarNombre(value);
      setErrores(prev => ({ ...prev, nombre: error }));
    }

    if (name === 'apellidoPaterno') {
      const error = validarApellido(value);
      setErrores(prev => ({ ...prev, apellidoPaterno: error }));
    }

    if (name === 'apellidoMaterno') {
      const error = validarApellido(value);
      setErrores(prev => ({ ...prev, apellidoMaterno: error }));
    }

    if (name === 'fechaNacimiento') {
      const error = validarFechaNacimiento(value);
      setErrores(prev => ({ ...prev, fechaNacimiento: error }));
      if (error === 'Escribe los datos del tutor en el siguiente espacio.') {
        setEsMenorEdad(true);
      } else {
        setEsMenorEdad(false);
      }
    }

    if (name === 'telefonoMovil') {
      const error = validarTelefono(value);
      setErrores(prev => ({ ...prev, telefonoMovil: error }));
    }

    setDatosPersonales(prev => ({ ...prev, [name]: value }));
  };

  return (

    <section className="bg-white rounded-lg shadow-md p-6 max-w-2xl mx-auto border border-gray-300">

      <h2 className="text-2xl font-semibold leading-tight tracking-normal text-purple-600 mb-4">Datos personales</h2>

      {/* Separador consistente: 1px border-bottom semitransparente */}
      <div className="mb-4 border-b border-green-500/60" aria-hidden="true" />

      <form className="space-y-4" noValidate>
        <div>
          <label htmlFor="nombre" className="block text-sm font-bold text-gray-700">Nombre</label>
          <input onChange={handleChange} id="nombre" name="nombre" type="text" required placeholder="Nombre(s)"
          className={`mt-1 block w-full rounded-md border ${errores.nombre
            ? 'border-red-500 focus:border-red-300 focus:ring-red-200'
            : 'border-gray-300 focus:border-green-300 focus:ring-green-200'
            } bg-white px-3 py-2 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-1`}/>
          {errores.nombre && (
            <p className="mt-1 text-sm text-red-600">{errores.nombre}</p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="apellidoPaterno" className="block text-sm font-bold text-gray-700">Apellido Paterno</label>
            <input onChange={handleChange} id="apellidoPaterno" name="apellidoPaterno" type="text" required placeholder="Apellido paterno"
            className={`mt-1 block w-full rounded-md border ${errores.apellidoPaterno
              ? 'border-red-500 focus:border-red-300 focus:ring-red-200'
              : 'border-gray-300 focus:border-green-300 focus:ring-green-200'
            } bg-white px-3 py-2 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-1`}/>
            {errores.apellidoPaterno && (
              <p className="mt-1 text-sm text-red-600">{errores.apellidoPaterno}</p>
            )}
          </div>

          <div>
            <label htmlFor="apellidoMaterno" className="block text-sm font-bold text-gray-700">Apellido Materno</label>
            <input onChange={handleChange} id="apellidoMaterno" name="apellidoMaterno" type="text" placeholder="Apellido materno"
            className={`mt-1 block w-full rounded-md border ${errores.apellidoMaterno
              ? 'border-red-500 focus:border-red-300 focus:ring-red-200'
              : 'border-gray-300 focus:border-green-300 focus:ring-green-200'
            } bg-white px-3 py-2 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-1`}/>
            {errores.apellidoMaterno && (
              <p className="mt-1 text-sm text-red-600">{errores.apellidoMaterno}</p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="fechaNacimiento" className="block text-sm font-bold text-gray-700">Fecha de nacimiento</label>
            <input onChange={handleChange} id="fechaNacimiento" name="fechaNacimiento" type="date" required
            className={`mt-1 block w-full rounded-md border ${errores.fechaNacimiento
              ? 'border-red-500 focus:border-red-300 focus:ring-red-200'
              : 'border-gray-300 focus:border-green-300 focus:ring-green-200'
            } bg-white px-3 py-2 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-1`}/>
            {errores.fechaNacimiento && (
              <p className="mt-1 text-sm text-red-600">{errores.fechaNacimiento}</p>
            )}
          </div>

          <div>
            <label htmlFor="telefonoMovil" className="block text-sm font-bold text-gray-700">Teléfono móvil</label>
            <input onChange={handleChange} id="telefonoMovil" name="telefonoMovil" type="tel" required placeholder="+591 71234567"
            className={`mt-1 block w-full rounded-md border ${errores.telefonoMovil
              ? 'border-red-500 focus:border-red-300 focus:ring-red-200'
              : 'border-gray-300 focus:border-green-300 focus:ring-green-200'
            } bg-white px-3 py-2 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-1`}/>
            {errores.telefonoMovil && (
              <p className="mt-1 text-sm text-red-600">{errores.telefonoMovil}</p>
            )}
          </div>
        </div>

      </form>
    </section>
  );
}

export default DatosPersonales;