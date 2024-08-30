/*Lista de productos en la tienda. Acá están almacenados los productos que se muestran en la página*/
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

/*Manejo para el input, los botones y la creación de las tarjetas para los productos*/

const inputIngresado = document.getElementById('input');
const buscarBoton = document.getElementById('btnBuscar');
const tarjetas = document.getElementById('tarjetas');


/**
 * Devuelve un mensaje en caso de no haber encontrado un producto.
*/
function noResultados() {
  tarjetas.innerHTML = "<p>No se encontraron objetos</p>";
}

/**
 * Esta función se encarga de mostrar los productos en la pantalla. 
 * Para eso, se encarga de crear las tarjetas de cada uno y ponerles las propiedades adecuadas para el
 * drag and drop. Además, ya se crea un evento al hacer click que hace que se muestre el modal con la información del producto.
*/
function displayProducts(productos) {
  tarjetas.innerHTML = ""; 

  /*Con este IF se crea la estructura de la tarjeta para cada producto */
  if (productos.length === 0) {
    noResultados();
  } else {
    productos.forEach(producto => {
      const column = document.createElement('div');
      column.className = "column is-one-quarter";

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

      //Evento para "habilitar" el drag and drop
      column.querySelector('.card').addEventListener('dragstart', function(event) {
        event.dataTransfer.setData('text/plain', JSON.stringify(producto));
      });
    });
  }
}

/**
 * Acá habilitamos la busqueda cliqueando en el botón de "Search" como parte de la letra de la propuesta
 */
buscarBoton.addEventListener('click', function() {
  const query = inputIngresado.value.toLowerCase();
  const filteredProducts = productos.filter(product => 
    product.name.toLowerCase().includes(query)
  );
  displayProducts(filteredProducts);
});

/**
 * Esta es una alternativa al botón "Search", acá se realiza una búsqueda dinámica de los productos en la página
 */
inputIngresado.addEventListener('input', function() {
  const query = inputIngresado.value.toLowerCase();
  const filteredProducts = productos.filter(product => 
    product.name.toLowerCase().includes(query)
  );
  displayProducts(filteredProducts);
});

/*------------------------------ PARTE 2 ---------------------------------- */

/**
 * Código extraído de Bulma para el modal.
 */
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

  (document.querySelectorAll('.js-modal-trigger') || []).forEach(($trigger) => {
    const modal = $trigger.dataset.target;
    const $target = document.getElementById(modal);

    $trigger.addEventListener('click', () => {
      openModal($target);
    });
  });

  (document.querySelectorAll('.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button') || []).forEach(($close) => {
    const $target = $close.closest('.modal');

    $close.addEventListener('click', () => {
      closeModal($target);
    });
  });

  document.addEventListener('keydown', (event) => {
    if(event.key === "Escape") {
      closeAllModals();
    }
  });
});

/**
 * Sección para agregar un nuevo producto a la página
 */
const name2 = document.getElementById('Name');
const description = document.getElementById('description');
const price = document.getElementById('price');
const image = document.getElementById('image');
const funcionCrear = document.getElementById('Create');

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
    name: nameValue,
    description: descriptionValue,
    price: priceValue,
    image: imageFile ? URL.createObjectURL(imageFile) : "https://via.placeholder.com/150?text=Image+Not+Available",
    id: // Agregar id aquí
  };
  productos.push(nuevoProducto);
  displayProducts(productos);
}

displayProducts(productos);

funcionCrear.addEventListener('click', agregarProducto);

/**
 * Sección para el manejo de los Modales
 */

const nombreDelModal = document.getElementById('modalName');
const descriptionDelModal = document.getElementById('modalDescription');
const precioDelModal = document.getElementById('modalPrice');

/**
 * Abre la descripción del producto
 * @param {producto} product 
 */
function abrirProducto(product) {
  nombreDelModal.textContent = product.name;
  descriptionDelModal.textContent = product.description;
  precioDelModal.textContent = "$" + product.price;

  const modal = document.getElementById('productModal');
  modal.classList.add('is-active');
}

/**
 * Sección para la creación y el manejo del carrito de compras
 */

const carrito = document.getElementById('carrito');
const productosEnCarrito = [];

//Permite mantener cliqueado el producto y arrastrarlo
carrito.addEventListener('dragover', function(event) {
  event.preventDefault();
});

//Al soltar el elemento en el área del carrito se agregue a la lista del carrito
carrito.addEventListener('drop', function(event) {
  event.preventDefault();
  const data = event.dataTransfer.getData('text/plain');
  const producto = JSON.parse(data);

  agregarProductoAlCarrito(producto);
});

/**
 * Agrega productos al carrito según sean arrastrados hacia el área indicada. Para esto crea una box con todas las propiedades del producto dentro de la misma.
 * No admite duplicados y tiene un botón para eliminar el elemento del carrito.
 * @param {producto} producto 
 */
function agregarProductoAlCarrito(producto) {
  const productoExistente = productosEnCarrito.find(p => p.id === producto.id);
  if (!productoExistente) {
    productosEnCarrito.push(producto);

    const item = document.createElement('div');
    item.className = "box";
    item.dataset.id = producto.id;
    item.innerHTML = `
      <p><strong>${producto.name}</strong></p>
      <p>$${producto.price}</p>
      <button class="btnEliminar button is-danger is-small">Eliminar</button>
    `;

    carrito.appendChild(item);

    item.querySelector('.btnEliminar').addEventListener('click', function() {
      eliminarProductoDelCarrito(producto.id);
    });
  } else {
    alert("Este producto ya está en el carrito.");
  }
}

/**
 * Elimina productos de la lista de "Productos En Carrito". 
 * Se ejecuta cuando se presiona el botón de eliminar en algúno de los elementos dentro del carrito.
 * @param {} id 
 */
function eliminarProductoDelCarrito(id) {
  // Eliminar el producto del array
  const index = productosEnCarrito.findIndex(producto => producto.id === id);
  if (index !== -1) {
    productosEnCarrito.splice(index, 1);

    // Eliminar el elemento del DOM
    const item = carrito.querySelector(`.box[data-id="${id}"]`);
    if (item) {
      carrito.removeChild(item);
    }
  }
}

// Para inicializar y mostrar los productos al cargar la página
displayProducts(productos);
