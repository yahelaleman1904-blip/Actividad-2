# Utilería JS - Herramientas de Validación Frontend

**Autor:** [Tu Nombre Completo]
**Materia/Clase:** [Nombre de tu materia o clase]

### ¿Qué problema resuelve esta librería?
En el desarrollo web moderno, depender siempre de frameworks pesados para validar un simple formulario puede hacer que los sitios carguen lento. **Utilería JS** resuelve este problema ofreciendo una librería ligera, en JavaScript puro (Vanilla JS), que valida correos, fortalezas de contraseñas, calcula edades exactas y formatea textos (como nombres y teléfonos) al instante. Todo esto mejora la experiencia del usuario mostrando errores amigables antes de enviar los datos al servidor.

---

## 🔗 Enlaces del Proyecto
- **GitHub Pages (Sitio en Vivo):** [Pega aquí tu link terminación .github.io]
- **Repositorio de GitHub:** [Pega aquí el link a tu repositorio]

---

## ⚙️ Instalación
No requiere gestores de paquetes como npm. Para utilizar esta librería en tu proyecto HTML, simplemente descarga el archivo `utileria.js` dentro de tu carpeta `js/` y agrega la siguiente etiqueta justo antes de cerrar tu `</body>`:

```html
<script src="js/utileria.js"></script>
```

---

## 🚀 Uso y Ejemplos de Código

Una vez instalada, tienes acceso global a 8 funciones prácticas. Aquí te muestro cómo usarlas en tu código JavaScript:

### 1. Validar un Correo Electrónico
```javascript
let correo = "usuario@gmail.com";
if (validarCorreo(correo)) {
    console.log("El formato del correo es válido.");
}
```

### 2. Validar Solo Letras (acepta acentos y espacios)
```javascript
let nombre = "José González";
console.log(soloLetras(nombre)); // Devuelve: true
```

### 3. Validar Longitud Máxima (ej. un PIN o código)
```javascript
let pin = 12345;
let maximo = 4;
console.log(validarLongitud(pin, maximo)); // Devuelve: false (excede 4)
```

### 4. Calcular Edad a partir de Fecha de Nacimiento
```javascript
let fechaNacimiento = "2005-08-15";
let edad = calcularEdad(fechaNacimiento);
console.log(`Tienes ${edad} años cumplidos.`);
```

### 5. Validar si es Mayor de Edad
```javascript
if (esMayorDeEdad("2000-01-01")) {
    console.log("Acceso concedido al área para adultos.");
}
```

### 6. Validar Contraseña Segura (Mayúscula, minúscula, número, símbolo, 8+ chars)
```javascript
let pass = "Seguridad2026$";
if (validarPassword(pass)) {
    console.log("Tu contraseña es muy fuerte.");
}
```

### 7. Limpiar Espacios Innecesarios (Función Libre 1)
Ideal para cuando los usuarios teclean mal su nombre por accidente.
```javascript
let textoSucio = "   Ana    Maria   ";
console.log(limpiarEspacios(textoSucio)); // Devuelve: "Ana Maria"
```

### 8. Formatear Teléfono (Función Libre 2)
Convierte 10 dígitos planos en un formato legible.
```javascript
let telefono = "5512345678";
console.log(formatearTelefono(telefono)); // Devuelve: "(551) 234-5678"
```

---

## 📸 Capturas de Pantalla

A continuación se muestra el funcionamiento real de la librería aplicada en el frontend y consola:

*(Nota: Sube tus capturas a tu carpeta del repositorio o arrástralas aquí en GitHub)*

**1. Resultado del Registro en Consola / Modal:**
![Captura del Modal calculando la edad](link_o_ruta_de_tu_imagen_modal.jpg)

**2. Validación de Login y Contraseña Incorrecta:**
![Captura del login mostrando el muñequito de error](link_o_ruta_de_tu_imagen_login.jpg)

---

## 🎥 Video Demostrativo (Pitch Promocional)

**[ Haz clic aquí para ver el video promocional de 60 segundos ](PEGA_AQUÍ_EL_LINK_DE_YOUTUBE_O_DRIVE)**

**Guion/Resumen del video:**
*   *0:00 - 0:10:* Presentación del problema (Usuarios frustrados por formularios que no les dicen en qué se equivocaron).
*   *0:10 - 0:35:* Demostración en vivo en pantalla mostrando cómo Utilería JS valida al instante el nombre y te dice tu edad exacta en un bonito modal.
*   *0:35 - 0:50:* Demostración del área de login fallando a propósito para mostrar la seguridad de la contraseña y el mensaje de alerta.
*   *0:50 - 1:00:* Cierre invitando a otros desarrolladores a integrar el script en sus páginas con solo 1 línea de código.