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
      const masCaro = productos.reduce((c, p) =>
        p.precio > c.precio ? p : c, productos[0]);

      output.innerHTML = `
        <table>
          <tr><th>NOMBRE</th><th>PRECIO</th></tr>
          <tr>
            <td>${masCaro.nombre}</td>
            <td>${masCaro.precio}</td>
          </tr>
        </table>
      `;
      break;
  }
}
