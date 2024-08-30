   // Obtener los parámetros de la URL
const params = new URLSearchParams(window.location.search);
const nombreCompleto = decodeURIComponent(params.get('nombreCompleto'));
const fechaNacimiento = decodeURIComponent(params.get('fechaNacimiento'));
const edada = decodeURIComponent(params.get('edada'));
const Dpi = decodeURIComponent(params.get('Dpi'));
const nit = decodeURIComponent(params.get('nit'));
const direccion = decodeURIComponent(params.get('direccion'));
const entidadGobierno = decodeURIComponent(params.get('entidadGobierno'));
const aniosLaborados = decodeURIComponent(params.get('aniosLaborados'));
const jubilacionEstimada = parseFloat(params.get('jubilacionEstimada'));
const salarioPromedio = parseFloat(params.get('salarioPromedio'));

const tabla = document.getElementById('resultadoTabla').getElementsByTagName('tbody')[0];

// Crea una función para añadir una fila a la tabla
function añadirFila(campo, valor) {
    const fila = tabla.insertRow();
    const celdaCampo = fila.insertCell(0);
    const celdaValor = fila.insertCell(1);
    celdaCampo.textContent = campo;
    celdaValor.textContent = valor;
}

// Añadir filas con los datos
añadirFila('Nombre completo', nombreCompleto);
añadirFila('Fecha de nacimiento', fechaNacimiento);
añadirFila('Edad', edada);
añadirFila('DPI', Dpi);
añadirFila('NIT', nit);
añadirFila('Dirección', direccion);
añadirFila('Años Laborados', aniosLaborados);
añadirFila('Entidad de gobierno', entidadGobierno);
añadirFila('Jubilación Estimada', `Q.${jubilacionEstimada.toFixed(2)}`);
añadirFila('Salario Promedio', `Q.${salarioPromedio.toFixed(2)}`);
