//panels
const viewerItemPanel = document.getElementById("panel"); //el vizor de items
const listItemPanel = document.getElementById("lst-panel");
//inputs
const inputCost = document.getElementById("precio");
const inputAmount = document.getElementById("cantidad");
const inputSize = document.getElementById("tamano");
const inputOption = document.getElementById("option");
//buttons
const btnAddItem = document.getElementById("crear-item");
//main

//listerners

btnAddItem.addEventListener("click", function () {
  createNewElement();
});

//functions
function getValue(element) {
  //devuelve el valor del item pasado como parametro
  console.log(element.value);
  return element.value;
}

function createComponent(type, className, index, optionSrc) {
  //create a component
  let component = document.createElement(type);
  //add a class
  component.classList.add(className);
  //if is a image
  if (optionSrc != null) {
    component.src = `media/${optionSrc}.png`;
    component.alt = "";
    component.srcset = "";
  }
  //return the element
  return component;
}

function createNewElement() {
  //create a new item element

  //inputs
  let cost = getValue(inputCost);
  let size = getValue(inputSize);
  let amount = getValue(inputAmount);
  let option = getValue(inputOption);

  //aux
  let total = cost * amount;

  //create the ITEM VIEW
  let itemView = createItemView(option, size, amount);

  //create the LIST ITEM
  let itemList = createItemList(option, size, amount, total);

  //set the elements to their panels
  viewerItemPanel.appendChild(itemView);
  listItemPanel.appendChild(itemList);
}
function createItemList(name, size, amount,  total) {
  //create a new item for LIST
  let item = createComponent("div", "item");

  //create components for LIST

  let itemName = createComponent("span", "item-name");
  let itemAmount = createComponent("p", "item-amount"); // for next update
  let itemTotal = createComponent("p", "item-total");
  
  let itemDeleteImg = createComponent("img", "delete-img");
  let itemDelete = createComponent("button", "erase");

  
  //set values to components
  itemDeleteImg.src = 'https://img.icons8.com/color/48/null/delete-forever.png';
  itemName.innerText = name + " " + size;
  itemTotal.innerText = total;
  itemAmount.innerText = amount;

  //add elements to LIST component
  itemDelete.appendChild(itemDeleteImg); //add image to the delete bottom
  item.appendChild(itemName);
  item.appendChild(itemAmount);
  item.appendChild(itemTotal);
  item.appendChild(itemDelete);

  //return item list
  return item;
}

function createItemView(option, size, amount) {
  //create a new view for viewer
  let view = createComponent("div", "swiper-slide");

  //create the components for VIEW
  let image = createComponent("img", "itemView", "", option);
  let sizeText = createComponent("span", "title-size");
  let amountText = createComponent("span", "title-amount");

  //set values to the components
  sizeText.innerText = size;
  amountText.innerText = amount;

  //add new elemenst to item
  view.appendChild(image);
  view.appendChild(sizeText);
  view.appendChild(amountText);

  //set styles
  view.style.position = 'relative';
  //return the view
  return view;
}

//debugs
