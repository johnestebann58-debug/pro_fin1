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
      const ordenados = [...productos].sort((a, b) => b.precio - a.precio);

      output.innerHTML = `
         <table>
         <tr><th>PRECIOS ORDENADOS</th></tr>
           <tr><th>NOMBRE</th><th>PRECIO</th></tr>
           ${ordenados.map(p => `
             <tr>
              <td>${p.nombre}</td>
              <td>${p.precio}</td>
            </tr>
           `).join("")}
         </table>
          `;
      break;

    case "8":
      const buscapro = prompt("nombre del producto");

      const producto = productos.find(
        p => p.nombre.toLowerCase() === buscapro.toLowerCase()
      );

       output.innerHTML = producto
    ? `
      <table>
        <tr>
          <th>NOMBRE</th>
          <th>PRECIO</th>
          <th>STOCK</th>
        </tr>
        <tr>
          <td>${producto.nombre}</td>
          <td>${producto.precio}</td>
          <td>${producto.stock}</td>
        </tr>
      </table>
    `
    : "<p>Producto no encontrado</p>";
      break;

    case "9":
      const agotado = productos.some(p => p.stock === 0);
      const haystock = productos.every(p => p.stock > 0);
      
       output.innerHTML = `
    <table>
      <tr><th>ESTADO</th><th></th></tr>
      <tr>
        <td> PRODUCTO AGOTADO </td>
        <td>${agotado ? "si" : "no"}</td>
      </tr>
      <tr>
        <td> PRODUCTOS EN STOCK </td>
        <td>${haystock ? "si" : "no"}</td>
      </tr>
    </table>
  `;
  break;
  
  case "10":
    output.innerHTML = `
    <table>
      <tr>
        <th>NOMBRE</th>
        <th>PRECIO</th>
        <th>ECONOMICAMENTE</th>
      </tr>
      ${productos.map(p => {

        let clasificacion;

        switch (true) {
          case p.precio < 50000:
            clasificacion = "Barato";
            break;

          case p.precio >= 50000 && p.precio <= 200000:
            clasificacion = "Medio";
            break;

          case p.precio > 200000:
            clasificacion = "Caro";
            break;

          default:
            clasificacion = "Sin categoría";
        }

        return `
          <tr>
            <td>${p.nombre}</td>
            <td>${p.precio}</td>
            <td>${clasificacion}</td>
          </tr>
        `;
      }).join("")}
    </table>
  `;
  break;
   }

}
