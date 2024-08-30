document.getElementById('Calcular').addEventListener('click', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe de manera tradicional

    const nombreCompleto = document.getElementById('nombreCompleto').value;
    const fechaNacimiento = document.getElementById('fechaNacimiento').value;
    const edada = document.getElementById('edada').value;
    const Dpi = document.getElementById('Dpi').value;
    const nit = document.getElementById('nit').value;
    const direccion = document.getElementById('direccion').value;
    const aniosLaborados = document.getElementById('aniosLaborados').value;
    const entidadGobierno = document.getElementById('entidadGobierno').value;
    const salarioAno1 = parseFloat(document.getElementById('salarioAno1').value) || 0;
    const salarioAno2 = parseFloat(document.getElementById('salarioAno2').value) || 0;
    const salarioAno3 = parseFloat(document.getElementById('salarioAno3').value) || 0;
    const salarioAno4 = parseFloat(document.getElementById('salarioAno4').value) || 0;
    const salarioAno5 = parseFloat(document.getElementById('salarioAno5').value) || 0;

    let suma = 0;
    let count = 0;
    if (salarioAno1 > 0) {
        suma += salarioAno1;
        count++;
    }
    if (salarioAno2 > 0) {
        suma += salarioAno2;
        count++;
    }
    if (salarioAno3 > 0) {
        suma += salarioAno3;
        count++;
    }
    if (salarioAno4 > 0) {
        suma += salarioAno4;
        count++;
    }
    if (salarioAno5 > 0) {
        suma += salarioAno5;
        count++;
    }
    const salarioPromedio = count > 0 ? (suma / count) : 0;


    // Definir el porcentaje de jubilación según las condiciones


    if (aniosLaborados >= 10) {
        porcentajeJubilacion =  36.90; // 36.90% del sueldo promedio
    } else if (edada > 20 && aniosLaborados >= 10) {
        porcentajeJubilacion =  63.40; //  63.40% del sueldo promedio
    }

    // Calcular la jubilación estimada
    let jubilacionEstimada = salarioPromedio * porcentajeJubilacion;

    // Añadir ajustes a la jubilación
    //jubilacionEstimada += 250; // Añadir Q250 (puedes sumar otros valores aquí)

    // Aplicar tope máximo
    const topeMaximo = 5000; // valor del tope 
    if (jubilacionEstimada > topeMaximo) {
        jubilacionEstimada = topeMaximo;
    }

    // Genera la página con el resultado
    generarResultado(nombreCompleto, Dpi, edada, nit, entidadGobierno, fechaNacimiento, direccion, jubilacionEstimada, aniosLaborados, salarioPromedio);
});

function generarResultado(nombreCompleto, Dpi, edada, nit, entidadGobierno, fechaNacimiento, direccion, jubilacionEstimada, aniosLaborados, salarioPromedio) {
    // Codificar los parámetros en la URL
    const params = new URLSearchParams({
        nombreCompleto: encodeURIComponent(nombreCompleto),
        fechaNacimiento: encodeURIComponent(fechaNacimiento),
        edada: encodeURIComponent(edada),
        Dpi: encodeURIComponent(Dpi),
        nit: encodeURIComponent(nit),
        direccion: encodeURIComponent(direccion),
        aniosLaborados: encodeURIComponent(aniosLaborados),
        entidadGobierno: encodeURIComponent(entidadGobierno),
        jubilacionEstimada: jubilacionEstimada.toFixed(2),
        salarioPromedio: salarioPromedio.toFixed(2)
    });
    // Redirigir a la página de resultados con los parámetros en la URL
    window.location.href = `Resultado.html?${params.toString()}`;
}
