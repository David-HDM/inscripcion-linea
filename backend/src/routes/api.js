const express = require("express");
const router = express.Router();

const { internal: dbInterna, remote: dbExterna } = require('../config/db');

// API para obtener cursos ofertados

router.get('/cursos-ofertados', async (req, res) => {
  try {
    const [cursos] = await dbExterna.query('SELECT * FROM cursos WHERE estatus = "ACTIVO"');
    res.json(cursos);
  } catch (error) {
    console.error('Error al obtener cursos:', error);
    res.status(500).json({ error: 'Error al obtener cursos' });
  }
});

router.get('/areas-artisticas', async (req, res) => {
  try {
    const [areas] = await dbExterna.query('SELECT * FROM areas WHERE estatus = "ACTIVO"');
    res.json(areas);
  } catch (error) {
    console.error('Error al obtener áreas:', error);
    res.status(500).json({ error: 'Error al obtener áreas' });
  }
});

// API para guardar inscripción
// validacionDescuento, validacionTutor, validacionDocPersonal, fechaInscripcion valores por DEFAULT: NO VERIFICADO, CURRENT TIMESTAMP
router.post('/registrar-aspirante', async (req, res) => {
  try {
    const {
      nombre,
      apellidoPaterno,
      apellidoMaterno,
      fechaNacimiento,
      telefonoMovil,
      descuento,
      nombreArea,          
      nombreCurso
    } = req.body;

    const datos = {
      nombre,
      apellidoPaterno,
      apellidoMaterno,
      fechaNacimiento,
      telefonoMovil,
      descuento,
      areaSeleccionada: nombreArea,
      cursoSeleccionado: nombreCurso,
    };

    const [resultado] = await dbInterna.query('INSERT INTO aspirantes SET ?', datos);

    res.json({ success: true, mensaje: 'Aspirante registrado correctamente', insertId: resultado.insertId });
  } catch (error) {
    console.error('Error al registrar aspirante:', error);
    res.status(500).json({ success: false, error: 'Error al registrar aspirante' });
  }
});


// API para guardar los pagos

router.post('/registrar-pago', async (req, res) => {
  try {
    const {
      monto,
      nombreTitular,
      numTarjeta,
      id_aspirante
    } = req.body;

    const datosPago = {
      monto,
      nombreTitular,
      tarjeta_ultimos4: numTarjeta.slice(-4), // Solo guardar los últimos 4 dígitos
      id_aspirante
    }; 

    await dbInterna.query('INSERT INTO pagos SET ?', datosPago);

    res.json({ success: true, mensaje: 'Pago registrado correctamente' });
  } catch (error) {
    console.error('Error al registrar pago:', error);
    res.status(500).json({ success: false, error: 'Error al registrar pago' });
  }
}); 

module.exports = router;