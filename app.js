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
  }
}