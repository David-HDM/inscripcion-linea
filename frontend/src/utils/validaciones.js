export const validarNombre = (value) => {
  if (!value.trim()) return 'El nombre es obligatorio.';
  if (value.length < 2) return 'Debe tener al menos 2 caracteres.';
  if (!/^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/.test(value)) return 'Solo letras y espacios.';
  return '';
};

export const validarApellido = (value) => {
  if (!value.trim()) return 'Este campo es obligatorio.';
  if (!/^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/.test(value)) return 'Solo letras y espacios.';
  return '';
};

export const validarTelefono = (value) => {
  if (!value.trim()) return 'El teléfono es obligatorio.';
  if (!/^\d{10}$/.test(value)) return 'Debe contener exactamente 10 dígitos.';
  return '';
};

export const validarFechaNacimiento = (value) => {
  if (!value) return 'La fecha es obligatoria.';

  const fechaNacimiento = new Date(value);
  const hoy = new Date();

  if (fechaNacimiento >= hoy) return 'La fecha debe ser anterior a hoy.';

  const edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
  const mes = hoy.getMonth() - fechaNacimiento.getMonth();
  const dia = hoy.getDate() - fechaNacimiento.getDate();

  const edadFinal = mes < 0 || (mes === 0 && dia < 0) ? edad - 1 : edad;

  if (edadFinal < 6) return 'Debes tener al menos 6 años para registrarte.';

  if (edadFinal >= 6 && edadFinal < 18) return 'Escribe los datos del tutor en el siguiente espacio.';

  return '';

};