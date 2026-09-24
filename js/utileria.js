/**
 * Valida si el formato de un correo electrónico es correcto.
 * @param {string} correo - El correo electrónico a evaluar.
 * @returns {boolean} true si es válido, false en caso contrario.
 */
function validarCorreo(correo) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(correo);
}

/**
 * Valida que el texto contenga únicamente letras (incluyendo acentuadas) y espacios.
 * @param {string} texto - La cadena de texto a evaluar.
 * @returns {boolean} true si solo contiene letras y espacios.
 */
function soloLetras(texto) {
    const regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
    return regex.test(texto);
}

/**
 * Valida si un número no excede una longitud máxima de dígitos.
 * @param {number|string} numero - El número a evaluar.
 * @param {number} maxLongitud - La cantidad máxima permitida de dígitos.
 * @returns {boolean} true si la longitud es menor o igual al máximo.
 */
function validarLongitud(numero, maxLongitud) {
    return numero.toString().length <= maxLongitud;
}

/**
 * Calcula la edad a partir de una fecha de nacimiento.
 * @param {string} fechaNacimiento - Fecha en formato 'YYYY-MM-DD'.
 * @returns {number} Edad en años cumplidos.
 */
function calcularEdad(fechaNacimiento) {
    const hoy = new Date();
    const fechaNac = new Date(fechaNacimiento);
    let edad = hoy.getFullYear() - fechaNac.getFullYear();
    const mes = hoy.getMonth() - fechaNac.getMonth();
    
    if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNac.getDate())) {
        edad--;
    }
    return edad;
}

/**
 * Valida si la persona es mayor de 18 años según su fecha de nacimiento.
 * @param {string} fechaNacimiento - Fecha en formato 'YYYY-MM-DD'.
 * @returns {boolean} true si tiene 18 años o más.
 */
function esMayorDeEdad(fechaNacimiento) {
    return calcularEdad(fechaNacimiento) >= 18;
}

/**
 * Valida un password: mayúscula, minúscula, número, carácter especial y mínimo 8 caracteres.
 * @param {string} password - La contraseña a validar.
 * @returns {boolean} true si cumple con los criterios de seguridad.
 */
function validarPassword(password) {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!\%*?&]{8,}$/;
    return regex.test(password);
}

/* ================= SECCIÓN LIBRE (2 FUNCIONES ADICIONALES) ================= */

/**
 * Elimina espacios en blanco al inicio, final y múltiples espacios entre palabras.
 * Ideal para limpiar inputs de nombres antes de guardarlos.
 * @param {string} texto - El texto a limpiar.
 * @returns {string} El texto formateado sin espacios innecesarios.
 */
function limpiarEspacios(texto) {
    return texto.trim().replace(/\s+/g, ' ');
}

/**
 * Formatea una cadena de 10 dígitos numéricos al formato (XXX) XXX-XXXX.
 * @param {string|number} telefono - El número a formatear.
 * @returns {string} El teléfono formateado, o el valor original si no tiene 10 dígitos.
 */
function formatearTelefono(telefono) {
    const limpio = telefono.toString().replace(/\D/g, '');
    if (limpio.length === 10) {
        return `(${limpio.slice(0, 3)}) ${limpio.slice(3, 6)}-${limpio.slice(6)}`;
    }
    return telefono;
}