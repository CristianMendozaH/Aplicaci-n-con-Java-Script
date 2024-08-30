document.getElementById('downloadPdf').addEventListener('click', function() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Agregar el logo
    const logo = new Image();
    logo.src = '/img/Logo de la mariano.png'; // Ruta al logo o base64

    logo.onload = function() {
        // Dibujar el logo (x, y, width, height)
        doc.addImage(logo, 'PNG', 10, 10, 30, 30); // Ajusta la posición y tamaño según sea necesario

        // Agregar el encabezado
        doc.setFontSize(18);
        doc.text("Proyecto Parcial - Aplicación con JavaScript", 105, 20, null, null, 'center'); // Texto centrado

        // Agregar un subtítulo o más información
        doc.setFontSize(12);
        doc.text("Calculadora de Jubilación", 105, 40, null, null, 'center');

        // Espacio antes de la tabla
        doc.text('', 10, 50);

        // Convertir la tabla a formato que jsPDF AutoTable entienda
        doc.autoTable({
            html: '#resultadoTabla', // Referencia la tabla por su ID
            startY: 60, // Inicia la tabla después del encabezado y logo
            theme: 'grid',
            styles: {
                cellPadding: 3,
                fontSize: 10,    
            },
            headStyles: {
                fillColor: [64, 93, 114],
                textColor: [0, 0, 0],
                fontStyle: 'bold',
                halign: 'center',
            },
            alternateRowStyles: {
                fillColor: [240, 240, 240]
            },
        });

        // Descargar el PDF
        doc.save('tabla_resultados.pdf');
    };
});
