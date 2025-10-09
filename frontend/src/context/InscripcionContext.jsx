
import { createContext, useState } from 'react';

export const InscripcionContext = createContext();

export function InscripcionProvider({ children }) {
  const [datosPersonales, setDatosPersonales] = useState({});
  const [datosCurso, setDatosCurso] = useState({});
  const [datosPago, setDatosPago] = useState({});
  const [esMenorEdad, setEsMenorEdad] = useState(false);

return (
    <InscripcionContext.Provider value={{
      datosPersonales,
      setDatosPersonales,
      datosCurso,
      setDatosCurso,
      datosPago,
      setDatosPago,
      esMenorEdad,
      setEsMenorEdad
    }}>
      {children}
    </InscripcionContext.Provider>
  );
}