const productos = [
  {
    "name": "Wireless Mouse",
    "description": "Ergonomic wireless mouse with adjustable DPI.",
    "price": 29.99,
    "image": "https://via.placeholder.com/150?text=Wireless+Mouse",
    "id": 1
  },
  {
    "name": "Mechanical Keyboard",
    "description": "RGB backlit mechanical keyboard with Cherry MX switches.",
    "price": 89.99,
    "image": "https://via.placeholder.com/150?text=Mechanical+Keyboard",
    "id": 2
  },
  {
    "name": "Gaming Headset",
    "description": "Surround sound gaming headset with noise-cancelling microphone.",
    "price": 59.99,
    "image": "https://via.placeholder.com/150?text=Gaming+Headset",
    "id": 3
  },
  {
    "name": "27-inch Monitor",
    "description": "4K UHD monitor with IPS display and 144Hz refresh rate.",
    "price": 329.99,
    "image": "https://via.placeholder.com/150?text=27-inch+Monitor",
    "id": 4
  },
  {
    "name": "Laptop Stand",
    "description": "Adjustable aluminum laptop stand for ergonomic work setup.",
    "price": 39.99,
    "image": "https://via.placeholder.com/150?text=Laptop+Stand",
    "id": 5
  },
  {
    "name": "USB-C Hub",
    "description": "Multi-port USB-C hub with HDMI, USB 3.0, and SD card reader.",
    "price": 24.99,
    "image": "https://via.placeholder.com/150?text=USB-C+Hub",
    "id": 6
  },
  {
    "name": "External SSD",
    "description": "Portable external SSD with 1TB storage and USB 3.1 interface.",
    "price": 129.99,
    "image": "https://via.placeholder.com/150?text=External+SSD",
    "id": 7
  },
  {
    "name": "Smartphone Stand",
    "description": "Adjustable smartphone stand with 360-degree rotation.",
    "price": 19.99,
    "image": "https://via.placeholder.com/150?text=Smartphone+Stand",
    "id": 8
  },
  {
    "name": "Bluetooth Speaker",
    "description": "Portable Bluetooth speaker with 10-hour battery life.",
    "price": 49.99,
    "image": "https://via.placeholder.com/150?text=Bluetooth+Speaker",
    "id": 9
  },
  {
    "name": "Webcam",
    "description": "1080p HD webcam with built-in microphone and privacy cover.",
    "price": 34.99,
    "image": "https://via.placeholder.com/150?text=Webcam",
    "id": 10
  },
  {
    "name": "Wireless Charger",
    "description": "Fast wireless charger with Qi compatibility.",
    "price": 25.99,
    "image": "https://via.placeholder.com/150?text=Wireless+Charger",
    "id": 11
  },
  {
    "name": "Noise-Cancelling Headphones",
    "description": "Over-ear noise-cancelling headphones with Bluetooth connectivity.",
    "price": 199.99,
    "image": "https://via.placeholder.com/150?text=Noise-Cancelling+Headphones",
    "id": 12
  },
  {
    "name": "Smartwatch",
    "description": "Smartwatch with heart rate monitor and GPS.",
    "price": 149.99,
    "image": "https://via.placeholder.com/150?text=Smartwatch",
    "id": 13
  }
];

// Cargar productos desde localStorage si existen
function cargarProductosDesdeLocalStorage() {
  const productosGuardados = localStorage.getItem('productos');
  if (productosGuardados) {
    const productosCargados = JSON.parse(productosGuardados);
    productosCargados.forEach(productoCargado => {
      const productoExistente = productos.find(producto => producto.id === productoCargado.id);
      if (!productoExistente) {
        productos.push(productoCargado);
      }
    });
  }
}

const inputIngresado = document.getElementById('input');
const buscarBoton = document.getElementById('btnBuscar');
const tarjetas = document.getElementById('tarjetas');

function noResultados() {
  tarjetas.innerHTML = "<p>No se encontraron objetos</p>";
}

function displayProducts(productos) {
  tarjetas.innerHTML = ""; 

  if (productos.length === 0) {
    noResultados();
  } else {
    productos.forEach(producto => {
      const column = document.createElement('div');
      column.className = "column is-full-tablet is-half-desktop is-one-third-widescreen is-one-quarter-fullhd";

      const productCard = `
      <div class="card">
        <div class="card-image">
          <figure class="image is-4by3">
            <img src=${producto.image} alt="Placeholder image" />
          </figure>
        </div>
        <div class="card-content">
          <div class="media">
            <div class="media-left">
              <figure class="image is-48x48">
                <img src=${producto.image} alt="Placeholder image" />
              </figure>
            </div>
            <div class="media-content">
              <p class="title is-4">${producto.name}</p>
              <p class="has-text-weight-bold">$${producto.price}</p>
              <p class="subtitle is-6">${producto.description}</p>
            </div>
          </div>
        </div>
      </div>
      `;

      column.innerHTML = productCard;
      tarjetas.appendChild(column);

      // Evento para abrir el modal con la descripción
      column.querySelector('.card').addEventListener('click', function() {
        abrirProducto(producto);
      });
      column.querySelector('.card').addEventListener('dragstart', function(event) {
        event.dataTransfer.setData('text/plain', JSON.stringify(producto));
      });
    });
  }
}

buscarBoton.addEventListener('click', function() {
  const query = inputIngresado.value.toLowerCase();
  const filteredProducts = productos.filter(product => 
    product.name.toLowerCase().includes(query)
  );
  displayProducts(filteredProducts);
});

// Escuchar el evento 'input' en el campo de búsqueda
inputIngresado.addEventListener('input', function() {
  const query = inputIngresado.value.toLowerCase();
  const filteredProducts = productos.filter(product => 
    product.name.toLowerCase().includes(query)
  );
  displayProducts(filteredProducts);
});

// Funciones para ordenar productos
function ordenarMenorAMayor() {
  const productosOrdenados = [...productos].sort((a, b) => a.price - b.price);
  displayProducts(productosOrdenados);
}

function ordenarMayorAMenor() {
  const productosOrdenados = [...productos].sort((a, b) => b.price - a.price);
  displayProducts(productosOrdenados);
}

// Manejar el cambio en el menú desplegable
document.getElementById('ordenar').addEventListener('change', function() {
  const valorSeleccionado = this.value;

  if (valorSeleccionado === 'menorAMayor') {
    ordenarMenorAMayor();
  } else if (valorSeleccionado === 'mayorAMenor') {
    ordenarMayorAMenor();
  } else {
    displayProducts(productos); // Mostrar productos originales si no se selecciona nada
  }
});

/*------------------------------ PARTE 2 ---------------------------------- */
document.addEventListener('DOMContentLoaded', () => {

  function openModal($el) {
    $el.classList.add('is-active');
  }

  function closeModal($el) {
    $el.classList.remove('is-active');
  }

  function closeAllModals() {
    (document.querySelectorAll('.modal') || []).forEach(($modal) => {
      closeModal($modal);
    });
  }

  // Agregar evento a botones para abrir un modal específico
  (document.querySelectorAll('.js-modal-trigger') || []).forEach(($trigger) => {
    const modal = $trigger.dataset.target;
    const $target = document.getElementById(modal);

    $trigger.addEventListener('click', () => {
      openModal($target);
    });
  });

  // Agregar evento de clic en varios elementos para cerrar el modal
  (document.querySelectorAll('.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button') || []).forEach(($close) => {
    const $target = $close.closest('.modal');

    $close.addEventListener('click', () => {
      closeModal($target);
    });
  });

  cargarProductosDesdeLocalStorage(); // Cargar los productos guardados al cargar la página
  cargarCarritoDesdeLocalStorage();   // Cargar el carrito guardado al cargar la página
  displayProducts(productos);         // Mostrar los productos
});

const name2 = document.getElementById('Name');
const description = document.getElementById('description');
const price = document.getElementById('price');
const image = document.getElementById('image');

function guardarProductosEnLocalStorage() {
  localStorage.setItem('productos', JSON.stringify(productos));
}

function agregarProducto() {
  const nameValue = name2.value.trim();
  const descriptionValue = description.value.trim();
  const priceValue = parseFloat(price.value);
  const imageFile = image.files.length > 0 ? image.files[0] : null;
  const id = productos.length + 1;
  
  if (nameValue === "") {
    alert("El nombre del producto no puede estar vacío.");
    return;
  }

  if (descriptionValue === "") {
    alert("La descripción del producto debe tener al menos 10 caracteres.");
    return;
  }

  if (isNaN(priceValue) || priceValue <= 0) {
    alert("El precio debe ser un número válido mayor que cero.");
    return;
  }

  if (imageFile && !['image/jpeg', 'image/png', 'image/gif'].includes(imageFile.type)) {
    alert("El archivo seleccionado no es una imagen válida. Por favor, selecciona un archivo JPEG, PNG o GIF.");
    return;
  }

  const nuevoProducto = {
    id: id,
    name: nameValue,
    description: descriptionValue,
    price: priceValue,
    image: imageFile ? URL.createObjectURL(imageFile) : "https://via.placeholder.com/150?text=Image+Not+Available"
  };
  
  productos.push(nuevoProducto);
  guardarProductosEnLocalStorage(); // Guardar productos actualizados en localStorage
  displayProducts(productos);
}

const funcionCrear = document.getElementById('Create');

// Mostrar todos los productos inicialmente
displayProducts(productos);
funcionCrear.addEventListener('click', agregarProducto);

const nombreAInsertar = document.getElementById('modalName');
const descriptionAInsertar = document.getElementById('modalDescription');
const precioAInsertar = document.getElementById('modalPrice');

function abrirProducto(product) {
  nombreAInsertar.textContent = product.name; // Actualizar la descripción en el modal
  descriptionAInsertar.textContent = product.description; // Actualizar la descripción en el modal
  precioAInsertar.textContent = "$" + product.price; // Actualizar la descripción en el modal

  const modal = document.getElementById('productModal');
  modal.classList.add('is-active'); // Abrir el modal
}

const carrito = document.getElementById('carrito');
const productosEnCarrito = [];

function guardarCarritoEnLocalStorage() {
  localStorage.setItem('carrito', JSON.stringify(productosEnCarrito));
}

function cargarCarritoDesdeLocalStorage() {
  const carritoGuardado = localStorage.getItem('carrito');
  const carritoItems = document.getElementById('carritoItems'); // Nuevo contenedor solo para los ítems del carrito
  carritoItems.innerHTML = ''; // Limpiar los ítems del carrito antes de agregar productos
  productosEnCarrito.length = 0; // Vaciar el array de productos en carrito

  if (carritoGuardado) {
    productosEnCarrito.push(...JSON.parse(carritoGuardado));
    productosEnCarrito.forEach(producto => {
      const item = document.createElement('div');
      item.className = "box";
      item.innerHTML = `
        <p><strong>${producto.name}</strong></p>
        <p>$${producto.price}</p>
        <button class="button is-danger is-small" onclick="eliminarProductoDelCarrito(${producto.id})">Eliminar</button>
      `;
      carritoItems.appendChild(item);
    });
  }
}

carrito.addEventListener('dragover', function(event) {
  event.preventDefault(); // Permite soltar
});

carrito.addEventListener('drop', function(event) {
  event.preventDefault();
  const data = event.dataTransfer.getData('text/plain');
  const producto = JSON.parse(data);

  agregarProductoAlCarrito(producto);
});

function agregarProductoAlCarrito(producto) {
  // Evitar duplicados
  const productoExistente = productosEnCarrito.find(p => p.id === producto.id);
  if (!productoExistente) {
    productosEnCarrito.push(producto);

    const carritoItems = document.getElementById('carritoItems');
    const item = document.createElement('div');
    item.className = "box";
    item.innerHTML = `
      <p><strong>${producto.name}</strong></p>
      <p>$${producto.price}</p>
      <button class="button is-danger is-small" onclick="eliminarProductoDelCarrito(${producto.id})">Eliminar</button>
    `;

    carritoItems.appendChild(item);
    guardarCarritoEnLocalStorage(); // Guardar el carrito actualizado en localStorage
  } else {
    alert("Este producto ya está en el carrito.");
  }
}

function eliminarProductoDelCarrito(id) {
  // Eliminar el producto del array
  const index = productosEnCarrito.findIndex(producto => producto.id === id);
  if (index !== -1) {
    productosEnCarrito.splice(index, 1);

    // Actualizar la interfaz
    const carritoItems = document.getElementById('carritoItems');
    const item = carritoItems.querySelector(`.box:nth-child(${index + 1})`);
    carritoItems.removeChild(item);
    guardarCarritoEnLocalStorage(); // Actualizar el carrito en localStorage
  }
}