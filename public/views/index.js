// Array para almacenar los productos
const productos = [];

// Función para agregar un producto al array
function agregarProducto() {
  const nombre = document.getElementById('nombre').value;
  const precio = document.getElementById('precio').value;
  const comercio = document.getElementById('comercio').value;

  if (nombre && precio && comercio) {
    const producto = {
      nombre: nombre,
      precio: precio,
      comercio: comercio,
    };

    productos.push(producto);

    // Limpiar los campos de entrada
    document.getElementById('nombre').value = '';
    document.getElementById('precio').value = '';
    document.getElementById('comercio').value = '';

    alert('Producto agregado exitosamente.');
  } else {
    alert('Por favor, complete todos los campos.');
  }
}

// Función para listar los productos
function listarProductos() {
  const salidaListado = document.getElementById('salidaListado');
  salidaListado.innerHTML = '';

  for (const producto of productos) {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${producto.nombre}</td>
      <td>$${producto.precio}</td>
      <td>${producto.comercio}</td>
    `;

    salidaListado.appendChild(row);
  }
}

// Agregar eventos a los botones
document.getElementById('botonAgregar').addEventListener('click', agregarProducto);
document.getElementById('botonListar').addEventListener('click', listarProductos);