// Array para almacenar los productos
const productos = [];
const productosBaratos = []

// Función para agregar un producto al array
let agregarProducto = () => {
  const nombre = document.getElementById('nombre').value;
  const precio = parseFloat(document.getElementById('precio').value);
  const comercio = document.getElementById('comercio').value;

  if (nombre && precio && comercio) {
    const producto = {
      nombre: nombre,
      precio: precio,
      comercio: comercio,
    };

    // Añadiendo producto al listado de productos totales
    productos.push(producto);

    // Añadiendo producto al listado de productos baratos
    let productoReemplazado = true;
  
      if (!productosBaratos[producto.nombre] || producto.precio < productosBaratos[producto.nombre].precio) {
        productosBaratos[producto.nombre] = producto;
        console.log('Se añade o actualiza producto barato');
      }
    
    

    if (productoReemplazado == false) {
      productosBaratos.push(producto);
      console.log('Se añade producto nuevo')
    }

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
let listarProductos = () => {
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

//Funcioón para listar los productos de menor precio
let listarMenorPrecio = () => {
  console.log('entra a la funcion listarmenorprecio')
  const salidaMenorPrecio = document.getElementById('salidaMenorPrecio');
  salidaMenorPrecio.innerHTML = '';

  for (const nombreProducto in productosBaratos) {
    const producto = productosBaratos[nombreProducto];
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${producto.nombre}</td>
      <td>$${producto.precio}</td>
      <td>${producto.comercio}</td>
    `;
  
    salidaMenorPrecio.appendChild(row);
    console.log('Se escribe producto');
  }
}
//antes del cambio
// Agregar eventos a los botones
document.getElementById('botonAgregar').addEventListener('click', agregarProducto);
document.getElementById('botonListar').addEventListener('click', listarProductos);
document.getElementById('botonMenorPrecio').addEventListener('click', listarMenorPrecio);