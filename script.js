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
  

  function buscar(){
    const resultado = productos.filter((producto) =>{
        return producto.name.toLowerCase() === inputIngresado.value.toLowerCase();
      });

    if (resultado) {
        document.getElementById('resultado').innerHTML = `
          <div>
            <h2>${resultado.name}</h2>
            <p>${resultado.description}</p>
            <p>Precio: $${resultado.price}</p>
            <img src="${resultado.image}" alt="${resultado.name}">
          </div>
        `;
      } else {
        document.getElementById('resultado').innerHTML = '<p>Producto no encontrado</p>';
      }
  }

  buscarBoton.addEventListener("click", buscar);


