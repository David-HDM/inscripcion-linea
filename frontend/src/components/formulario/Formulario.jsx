import Header from "./sub-components/Header";
import DatosPersonales from "./sub-components/DatosPersonales";
import DatosCurso from "./sub-components/DatosCurso";
import DetallesPago from "./sub-components/DetallesPago";
import BotonInscribir from "./sub-components/BotonInscribir";
import Footer from "./sub-components/Footer";

function Formulario() {
  return (
    <div className="space-y-8">
        <Header /> {/* Encabezado del formulario */}
        <DatosPersonales /> {/* Campos de datos personales del usuario */}
        <DatosCurso /> {/* Campos de datos del curso que el usuario seleccionará */}
        <DetallesPago /> {/* Campos para los detalles del pago */}
        <BotonInscribir /> {/* Botón para enviar el formulario al back*/}
        <Footer /> {/* Pie de página del formulario */}
    </div>
  );
}

export default Formulario;