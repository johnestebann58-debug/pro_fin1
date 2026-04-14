const productos = [ 
  { id: 1, nombre: "Mouse", categoria: "Periferico", precio: 50000, stock: 10, ventas: 12 },
  { id: 2, nombre: "Teclado", categoria: "Periferico", precio: 120000, stock: 5, ventas: 7 },
  { id: 3, nombre: "Monitor", categoria: "Pantalla", precio: 800000, stock: 2, ventas: 4 },
  { id: 4, nombre: "USB", categoria: "Accesorio", precio: 30000, stock: 0, ventas: 15 },
  { id: 5, nombre: "Diadema", categoria: "Audio", precio: 90000, stock: 8, ventas: 6 }
];

const input = document.getElementById("entrada_1");
const output = document.getElementById("salida_1");

input.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    ejecutarOpcion(input.value);
  }
});

function ejecutarOpcion(entrada_1) {
  switch (entrada_1) {
<<<<<<< HEAD

    case "1":
      output.innerHTML = `
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>NOMBRE</th>
              <th>CATEGORIA</th>
              <th>PRECIO</th>
              <th>STOCK</th>
              <th>VENTAS</th>
            </tr>
          </thead>
          <tbody>
            ${productos.map(p => `
              <tr>
                <td>${p.id}</td>
                <td>${p.nombre}</td>
                <td>${p.categoria}</td>
                <td>${p.precio}</td>
                <td>${p.stock}</td>
                <td>${p.ventas}</td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      `;
      break;

    case "2":
      const disponibles = productos.filter(p => p.stock < 6 && p.stock > 0);
      output.innerHTML = `
        <table>
          <tr><th>NOMBRE</th><th>STOCK</th></tr>
          ${disponibles.map(p => `
            <tr>
              <td>${p.nombre}</td>
              <td>${p.stock}</td>
            </tr>
          `).join("")}
        </table>
      `;
      break;

    case "3":
      const Agotado = productos.filter(p => p.stock == 0);

      output.innerHTML = `
        <table>
          <tr><th>NOMBRE</th><th>VENTAS</th></tr>
          ${Agotado.map(p => `
            <tr>
              <td>${p.nombre}</td>
              <td>${p.stock}</td>
            </tr>
          `).join("")}
        </table>
      `;
      break;

      case "4":
       const cua = productos.filter(p => p.precio );
       output.innerHTML = `
      <table>
          <tr>
            <th>NOMBRE</th>
             <th>PRECIO</th>
          </tr>
            ${cua.map(p => `
           <tr>
            <td>${p.nombre}</td>
            <td>${p.precio}</td>
           </tr>
           `).join("")}
        </table>
       `;
       break;

    

    case "5":
      const totalinventario = productos.reduce((t, p) => t + p.precio, 0);
      output.innerHTML = `
        <table>
          <tr><th>VALOR TOTAL INVENTARIO</th></tr>
          <tr><td>${totalinventario}</td></tr>
        </table>
      `;
      break;

    case "6":
      const totalventas = productos.reduce((t, p) => t + p.ventas, 0);
      output.innerHTML = `
        <table>
          <tr><th>TOTAL DE VENTAS</th></tr>
          <tr><td>${totalventas}</td></tr>
        </table>
      `;
      break;

    case "7":
      const promedio = productos.reduce((t, p) => t + p.precio, 0) / productos.length;
      output.innerHTML = `
        <table>
          <tr><th>PROMEDIO PRECIO</th></tr>
          <tr><td>${promedio.toFixed(2)}</td></tr>
        </table>
      `;
      break;

    case "8":
      const masBarato = productos.reduce((b, p) =>
        p.precio < b.precio ? p : b, productos[0]);

      output.innerHTML = `
        <table>
          <tr><th>NOMBRE</th><th>PRECIO</th></tr>
          <tr>
            <td>${masBarato.nombre}</td>
            <td>${masBarato.precio}</td>
          </tr>
        </table>
      `;
      break;

      case "9":

        console.log("--- some() y every() ---");
        const hayAgotados = productos.some(p => p.stock === 0);
        const todosConStock = productos.every(p => p.stock > 0);
        console.log('¿Hay algún agotado? '${hayAgotados});
        console.log('¿Todos tienen stock?' ${todosConStock});
      break;

      case "10":
        console.log("rango");
        productos.forEach(p=> {
          let rango;
          switch(true) {
            case p.precio <5000: rango = "eonomico";
          break;  
        
          case p.precio <150000: rango = "normal";
          break;

          default:           rango = "muy caro";
         }
          console.log( ${p.nombre}: ${rango});
      break;    
}
=======
    case "1":
      output.innerHTML = `
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>NOMBRE</th>
              <th>CATEGORIA</th>
              <th>PRECIO</th>
              <th>STOCK</th>
              <th>VENTAS</th>
            </tr>
          </thead>
          <tbody>
            ${productos.map(p => `
              <tr>
                <td>${p.id}</td>
                <td>${p.nombre}</td>
                <td>${p.categoria}</td>
                <td>${p.precio}</td>
                <td>${p.stock}</td>
                <td>${p.ventas}</td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      `;
      break;

     case "2":
            const disponibles = productos.filter(p => p.stock > 0);
            output.innerHTML = disponibles
            .map(p => `<p>${p.nombre} - Stock: ${p.stock}</p>`)
            .join("");
        break;

    case "3":
      const masVendidos = productos.sort((a, b) => b.ventas - a.ventas).slice(0, 3);
      output.innerHTML = masVendidos
        .map(p => `<p>${p.nombre} - Ventas: ${p.ventas}</p>`)
        .join("");
      break;

    case "4":
      const categoria = prompt("Ingrese la categoría a filtrar:");
      const filtrados = productos.filter(p => p.categoria.toLowerCase() === categoria.toLowerCase());
      output.innerHTML = filtrados.length > 0
        ? filtrados.map(p => `<p>${p.nombre} - Categoría: ${p.categoria}</p>`).join("")
        : "<p>No se encontraron productos en esa categoría.</p>";
      break;

    case "5":
      console.log("--- Valor total del inventario ---");
      const totalInventario = productos.reduce((acc, p) => acc + p.precio * p.stock, 0);
      console.log(`Total: $${totalInventario}`);
      break;  

    case "6":
      console.log("--- Total de ventas ---");
      const totalVentas = productos.reduce((acc, p) => acc + p.ventas, 0);
      console.log(`Total vendido: ${totalVentas} unidades`);
      break;
      
    case "7":
      console.log("--- Ordenados por precio (menor a mayor) ---");
      const porPrecio = [...productos].sort((a, b) => a.precio - b.precio);
      porPrecio.forEach(p => console.log(`${p.nombre}: $${p.precio}`));
      break;

    case "8":
      const nombre = prompt("Ingresa el nombre del producto:");
      const encontrado = productos.find(p => p.nombre.toLowerCase() === nombre.toLowerCase());
      console.log("--- Buscar producto ---");
      if (encontrado) {
        console.log(`Encontrado: ${encontrado.nombre} | $${encontrado.precio} | Stock: ${encontrado.stock}`);
      } else {
        console.log("Producto no encontrado.");
      }
      break;

    case "9":
      console.log("--- some() y every() ---");
      const hayAgotados = productos.some(p => p.stock === 0);
      const todosConStock = productos.every(p => p.stock > 0);
      console.log(`¿Hay algún agotado? ${hayAgotados}`);
      console.log(`¿Todos tienen stock? ${todosConStock}`);
      break;

    
  }
}
>>>>>>> 1fc199baedea896ff8e4e0ed07924537cdb54c8f
