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
      const totalVentas = productos.reduce((total, p) => total + p.ventas, 0);
      output.innerHTML = `<p>Total de ventas: ${totalVentas}</p>`;
      break;  

    case "6":
      const totalStock = productos.reduce((total, p) => total + p.stock, 0);
      output.innerHTML = `<p>Total de stock disponible: ${totalStock}</p>`;
      break;
      
    case "7":
      const promedioPrecio = productos.reduce((total, p) => total + p.precio, 0) / productos.length;
      output.innerHTML = `<p>Precio promedio de los productos: ${promedioPrecio.toFixed(2)}</p>`;
      break;

    case "8":
      const masBarato = productos.reduce((barato, p) => p.precio < barato.precio ? p : barato, productos[0]);
      output.innerHTML = `<p>Producto más barato: ${masBarato.nombre} - Precio: ${masBarato.precio}</p>`;
      break;

    case "9":
      const masCaro = productos.reduce((caro, p) => p.precio > caro.precio ? p : caro, productos[0]);
      output.innerHTML = `<p>Producto más caro: ${masCaro.nombre} - Precio: ${masCaro.precio}</p>`;
      break;
  }
}