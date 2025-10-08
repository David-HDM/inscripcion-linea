
//Para obtener datos desde el contexto

import { useContext } from 'react';
import { InscripcionContext } from '../../../context/InscripcionContext';

function BotonInscribir() {

    const { datosPersonales, datosCurso, datosPago, setDatosPago } = useContext(InscripcionContext);

    const handleInscribir = async () => {
    const datosCompletos = {
      ...datosPersonales,
      ...datosCurso,
      ...datosPago
    };

    try {
      const response = await fetch('http://localhost:3000/api/registrar-aspirante', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(datosCompletos)
      });

      const resultado = await response.json();
      
      const id_aspirante = resultado.insertId; // Obtener el ID del aspirante recién creado

      const datosPagoConId = { ...datosPago, id_aspirante };

      setDatosPago(datosPagoConId);

      // Ahora registra el pago asociado a este aspirante si la inscripción fue exitosa
      if (resultado.success) {
        const responsePago = await fetch('http://localhost:3000/api/registrar-pago', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(datosPagoConId) // Asegúrate de enviar el ID del aspirante
        });
        const resultadoPago = await responsePago.json();
        console.log('Pago registrado:', resultadoPago);
      }
      console.log('Inscripción enviada:', resultado);
    } catch (error) {
      console.error('Error al inscribirse:', error);
    }

  };

    return (
        <div className="flex justify-center">
            <button type="submit" onClick={handleInscribir}
            className="w-168 bg-[#5a3e99] text-white font-bold text-[1.2rem] py-4 px-6 rounded-[10px] mt-2 cursor-pointer transition-colors duration-300 hover:bg-[#4caf50]">
            Inscribirse
            </button>
        </div>
    );
}

export default BotonInscribir;