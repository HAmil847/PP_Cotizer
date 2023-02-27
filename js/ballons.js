const precioInput = document.getElementById("precio");
const cantidadInput = document.getElementById("cantidad");
const tamanoInput = document.getElementById("tamano");
const botonAgregar = document.getElementById("crear-item");
const contenedor = document.getElementById("list-item");
const nombreItem = document.getElementById("option");
const viewer = document.getElementById("swiper-wrapper");

botonAgregar.addEventListener("click", () => {
  const precio = precioInput.value;
  const cantidad = cantidadInput.value;
  const tamano = tamanoInput.value;
  const nombre = nombreItem.value;

  //crear nuevo  objeto en el viewer
  const nuevoGlobo = document.createElement("div");
  nuevoGlobo.classList.add("swiper-slide");

  const nuevaImagen = document.createElement("img");
  nuevaImagen.src = `media/${nombre}.png`;
  nuevaImagen.alt = "";
  nuevaImagen.srcset = "";

  const nuevoTamanio = document.createElement("span");
  nuevoTamanio.classList.add("tittle-size");
  nuevoTamanio.innerText = tamano + '"';

  const nuevaCantidad = document.createElement("span");
  nuevaCantidad.classList.add("tittle-amount");
  nuevaCantidad.innerText = cantidad;

  //modificar la imagen si
  if(nombre =="g-260"){
    nuevaImagen.style.height = (180 / 300) * tamano + "px";
  }
  else{
    nuevaImagen.style.height = (180 / 23) * tamano + "px";
  }

  //agregar

  nuevoGlobo.appendChild(nuevaImagen);
  nuevoGlobo.appendChild(nuevoTamanio);
  nuevoGlobo.appendChild(nuevaCantidad);

  viewer.appendChild(nuevoGlobo);

  //crea un nnuevo item en la lista
  const nuevoItem = document.createElement("div");
  nuevoItem.classList.add("item");
  nuevoItem.innerHTML = `
    <span class="item-tittle">${nombre + " " + tamano + '"'}</span>
    <p class="item-cantidad">${cantidad}</p>
    <p class="item-precio-total">C$${cantidad * precio}</p>
    <button type="submit">X</button>
  `;

  contenedor.appendChild(nuevoItem);
});
