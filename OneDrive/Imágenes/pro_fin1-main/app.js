const productos = [ 
    { id: 1, nombre: "Mouse", categoria: "Periferico", precio: 50000,stock: 10, ventas: 12 },
    { id: 2, nombre: "Teclado", categoria: "Periferico", precio:120000, stock: 5, ventas: 7 },
    { id: 3, nombre: "Monitor", categoria: "Pantalla", precio:800000, stock: 2, ventas: 4 },
    { id: 4, nombre: "USB", categoria: "Accesorio", precio:30000, stock: 0, ventas: 15 },
    { id: 5, nombre: "Diadema", categoria: "Audio", precio:90000, stock: 8, ventas: 6 } ];

const input = document.getElementById("entrada_1");
const output = document.getElementById("salida_1");

input.addEventListener("keydown", function(e) {
  if (e.key === "Enter") {
    ejecutarOpcion(input.value);
  }
}); 

function ejecutarOpcion(entrada_1) {

    switch (entrada_1) {

        case "1":
            output.innerHTML = productos

            .map(p => `<p>${p.id} - ${p.nombre} - ${p.categoria} - ${p.precio} - ${p.stock} - ${p.ventas} </p>`)

        case "2":
            const disponibles = productos.filter(p => p.stock > 0);
            output.innerHTML = disponibles

            .map(p => `<p>${p.id} - ${p.nombre} - ${p.categoria} - ${p.precio} - ${p.stock} - ${p.ventas} </p>`)
   

      case "3":
            const ordenados = productos.sort((a, b) => b.ventas - a.ventas);
            output.innerHTML = ordenados

            .map(p => `<p>${p.id} - ${p.nombre} - ${p.categoria} - ${p.precio} - ${p.stock} - ${p.ventas} </p>`)
            
        default:
            output.innerHTML = "<p>Opción no válida</p>"; 
          }
}