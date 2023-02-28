const precioInput = document.getElementById("precio");
const cantidadInput = document.getElementById("cantidad");
const tamanoInput = document.getElementById("tamano");
const botonAgregar = document.getElementById("crear-item");
let listPanel = document.getElementById("lst-panel");
const nombreItem = document.getElementById("option");
const viewer = document.getElementById("swiper-wrapper");

botonAgregar.addEventListener("click", () => {

  //recargar la lista padre
  listPanel = document.getElementById("lst-panel");

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
    <button class= "erase" type="submit">X</button>
  `;

  listPanel.appendChild(nuevoItem);
});


function borrarElemento(event) {
  // Obtener el elemento "item" padre
  const item = event.target.parentNode;

  // Obtener el elemento "nuevoGlobo" del viewer
  const nuevoGlobo = viewer.lastChild;
  // Eliminar el elemento "nuevoGlobo" del viewer
  viewer.removeChild(nuevoGlobo);
  // Eliminar el elemento "item" de listPanel
  listPanel.removeChild(item);
}


//funcion de botones

listPanel.addEventListener("click",function(event){
  if(event.target.tagName == "BUTTON"){
    borrarElemento(event);
  }
 });

// Agregar evento "click" al botón "X" de cada elemento creado

