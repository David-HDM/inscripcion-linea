const express = require("express");
const router = express.Router();

const { internal: dbInterna, remote: dbExterna } = require('../config/db');

// Obtener cursos ofertados

/* PROBAR HASTA QUE SE TENGA CONEXIÓN A LA BASE DE DATOS DE GESTIÓN ESCOLAR

router.get('/cursos-ofertados', async (req, res) => {
  const cursos = await dbExterna.query('SELECT * FROM cursos');
  res.json(cursos);
});

*/

// Guardar inscripción
// validacionDescuento, validacionTutor, validacionDocPersonal, fechaInscripcion valores por DEFAULT: NO VERIFICADO, CURRENT TIMESTAMP
router.post('/registrar-aspirante', async (req, res) => {
  const { nombre, apellidoPaterno, apellidoMaterno, fechaNacimiento, telefonoMovil, descuento, areaSeleccionada,
    cursoSeleccionado, validacionPago } = req.body;
  await dbInterna.query('INSERT INTO aspirantes SET ?', { nombre, apellidoPaterno, apellidoMaterno, fechaNacimiento, telefonoMovil, descuento, 
    areaSeleccionada, cursoSeleccionado, validacionPago });
  res.json({ success: true });
});

module.exports = router;