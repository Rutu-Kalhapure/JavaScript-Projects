let inventory = [];

const itemNameInput = document.getElementById("itemName");
const itemQuantityInput = document.getElementById("itemQuantity");
const addItemBtn = document.getElementById("addItemBtn");
const inventoryList = document.getElementById("inventoryList");

function renderInventory() {
  inventoryList.innerHTML = "";
  inventory.forEach((item, index) => {
    const li = document.createElement("li");
    li.innerHTML = `<span>${item.name}: ${item.quantity}</span>
                        <button onclick="removeItem(${index})">Remove</button>
                        <button onclick="updateItem(${index})">Update</button>`;
    inventoryList.appendChild(li);
  });
}

function addItem() {
  const itemName = itemNameInput.value;
  const itemQuantity = parseInt(itemQuantityInput.value);
  if (itemName && itemQuantity) {
    inventory.push({ name: itemName, quantity: itemQuantity });
    renderInventory();
    itemNameInput.value = "";
    itemQuantityInput.value = "";
  } else {
    alert("Please enter both item name and quantity.");
  }
}

function removeItem(index) {
  inventory.splice(index, 1);
  renderInventory();
}

function updateItem(index) {
  const newQuantity = prompt("Enter new quantity:", inventory[index].quantity);
  if (newQuantity !== null) {
    inventory[index].quantity = parseInt(newQuantity);
    renderInventory();
  }
}

addItemBtn.addEventListener("click", addItem);

// Initial render
renderInventory();
