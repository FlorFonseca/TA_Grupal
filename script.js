const productos =[
    {
      "name": "Wireless Mouse",
      "description": "Ergonomic wireless mouse with adjustable DPI.",
      "price": 29.99,
      "image": "https://via.placeholder.com/150?text=Wireless+Mouse"
    },
    {
      "name": "Mechanical Keyboard",
      "description": "RGB backlit mechanical keyboard with Cherry MX switches.",
      "price": 89.99,
      "image": "https://via.placeholder.com/150?text=Mechanical+Keyboard"
    },
    {
      "name": "Gaming Headset",
      "description": "Surround sound gaming headset with noise-cancelling microphone.",
      "price": 59.99,
      "image": "https://via.placeholder.com/150?text=Gaming+Headset"
    },
    {
      "name": "27-inch Monitor",
      "description": "4K UHD monitor with IPS display and 144Hz refresh rate.",
      "price": 329.99,
      "image": "https://via.placeholder.com/150?text=27-inch+Monitor"
    },
    {
      "name": "Laptop Stand",
      "description": "Adjustable aluminum laptop stand for ergonomic work setup.",
      "price": 39.99,
      "image": "https://via.placeholder.com/150?text=Laptop+Stand"
    },
    {
      "name": "USB-C Hub",
      "description": "Multi-port USB-C hub with HDMI, USB 3.0, and SD card reader.",
      "price": 24.99,
      "image": "https://via.placeholder.com/150?text=USB-C+Hub"
    },
    {
      "name": "External SSD",
      "description": "Portable external SSD with 1TB storage and USB 3.1 interface.",
      "price": 129.99,
      "image": "https://via.placeholder.com/150?text=External+SSD"
    },
    {
      "name": "Smartphone Stand",
      "description": "Adjustable smartphone stand with 360-degree rotation.",
      "price": 19.99,
      "image": "https://via.placeholder.com/150?text=Smartphone+Stand"
    },
    {
      "name": "Bluetooth Speaker",
      "description": "Portable Bluetooth speaker with 10-hour battery life.",
      "price": 49.99,
      "image": "https://via.placeholder.com/150?text=Bluetooth+Speaker"
    },
    {
      "name": "Webcam",
      "description": "1080p HD webcam with built-in microphone and privacy cover.",
      "price": 34.99,
      "image": "https://via.placeholder.com/150?text=Webcam"
    },
    {
      "name": "Wireless Charger",
      "description": "Fast wireless charger with Qi compatibility.",
      "price": 25.99,
      "image": "https://via.placeholder.com/150?text=Wireless+Charger"
    },
    {
      "name": "Noise-Cancelling Headphones",
      "description": "Over-ear noise-cancelling headphones with Bluetooth connectivity.",
      "price": 199.99,
      "image": "https://via.placeholder.com/150?text=Noise-Cancelling+Headphones"
    },
    {
      "name": "Smartwatch",
      "description": "Smartwatch with heart rate monitor and GPS.",
      "price": 149.99,
      "image": "https://via.placeholder.com/150?text=Smartwatch"
    }
  ];

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
        column.className = "column is-one-quarter";
  
        const productCard = `
        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <img
                src=${producto.image}
                alt="Placeholder image"
              />
            </figure>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-left">
                <figure class="image is-48x48">
                  <img
                    src=${producto.image}
                    alt="Placeholder image"
                  />
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
  
    // Add a click event on buttons to open a specific modal
    (document.querySelectorAll('.js-modal-trigger') || []).forEach(($trigger) => {
      const modal = $trigger.dataset.target;
      const $target = document.getElementById(modal);
  
      $trigger.addEventListener('click', () => {
        openModal($target);
      });
    });
  
    // Add a click event on various child elements to close the parent modal
    (document.querySelectorAll('.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button') || []).forEach(($close) => {
      const $target = $close.closest('.modal');
  
      $close.addEventListener('click', () => {
        closeModal($target);
      });
    });
  
    // Add a keyboard event to close all modals
    document.addEventListener('keydown', (event) => {
      if(event.key === "Escape") {
        closeAllModals();
      }
    });
  });

  

  const name2 = document.getElementById('Name');
  const description = document.getElementById('description');
  const price = document.getElementById('price');
  const image = document.getElementById('image');

  function agregarProducto() {
    const nuevoProducto = {
      name: name2.value,
      description: description.value,
      price: parseFloat(price.value), 
      image: image.files.length > 0 ? URL.createObjectURL(image.files[0]) : "https://via.placeholder.com/150?text=Image+Not+Available"
    };
  
    productos.push(nuevoProducto);
    displayProducts(productos);
  }

  const funcionCrear = document.getElementById('Create');

  funcionCrear.addEventListener('click', agregarProducto);

  // Mostrar todos los productos inicialmente
  displayProducts(productos);