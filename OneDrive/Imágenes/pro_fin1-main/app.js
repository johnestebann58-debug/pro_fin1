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

       case "4":  
            const categorias = [...new Set(productos.map(p => p.categoria))];
            output.innerHTML = categorias

            .map(c => `<p>${c}</p>`)  
            
        case "5":
            const totalVentas = productos.reduce((total, p) => total + p.ventas, 0);
            output.innerHTML = `<p>Total de ventas: ${totalVentas}</p>`;  

            .map(p => `<p>${p.id} - ${p.nombre} - ${p.categoria} - ${p.precio} - ${p.stock} - ${p.ventas} </p>`)

        case "6":
            const promedioVentas = productos.reduce((total, p) => total + p.ventas, 0) / productos.length;
            output.innerHTML = `<p>Promedio de ventas: ${promedioVentas.toFixed(2)}</p>`; 

            .map(p => `<p>${p.id} - ${p.nombre} - ${p.categoria} - ${p.precio} - ${p.stock} - ${p.ventas} </p>`)   
            
        case "7":
            const masVendidos = productos.sort((a, b) => b.ventas - a.ventas).slice(0, 3);
            output.innerHTML = masVendidos

            .map(p => `<p>${p.id} - ${p.nombre} - ${p.categoria} - ${p.precio} - ${p.stock} - ${p.ventas} </p>`)  

        case "8":
            const menosVendidos = productos.sort((a, b) => a.ventas - b.ventas).slice(0, 3);
            output.innerHTML = menosVendidos

            .map(p => `<p>${p.id} - ${p.nombre} - ${p.categoria} - ${p.precio} - ${p.stock} - ${p.ventas} </p>`)
            
         case "9":
            const sinStock = productos.filter(p => p.stock === 0);
            output.innerHTML = sinStock

            .map(p => `<p>${p.id} - ${p.nombre} - ${p.categoria} - ${p.precio} - ${p.stock} - ${p.ventas} </p>`)
          }
}