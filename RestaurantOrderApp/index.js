const formElement = document.querySelector("form");
const nameElement = document.querySelector("#name");
const priceElement = document.querySelector("#price");
const tableDropdownElement = document.querySelector("select");
const displayElement = document.getElementById("display-orders");
const tableOne = document.getElementById("table-one-orders");
const tableTwo = document.getElementById("table-two-orders");
const tableThree = document.getElementById("table-three-orders");
console.log(tableOne.textContent)
let editIndex = 0;

formElement.addEventListener("submit", (e) => addOrder(e));

function getOrders() {
  return new Promise((resolve, reject) => {
    axios
      .get("https://crudcrud.com/api/8eefe44509324251b22a1316d9d8752b/orders")
      .then((res) => resolve(res.data))
      .catch((error) => reject(error));
  });
}

function addOrder(e) {
  e.preventDefault();
  let newOrder = {
    name: nameElement.value,
    price: priceElement.value,
    table:
      tableDropdownElement.options[tableDropdownElement.selectedIndex].value,
  };
  if (e.target.querySelector("button").textContent == "Place order") {
    axios
      .post(
        "https://crudcrud.com/api/8eefe44509324251b22a1316d9d8752b/orders",
        newOrder
      )
      .then((res) => {
        console.log("Order Added! " + res);
        resetForm();
        displayOrders();
      })
      .catch((error) => console.error(error));
  } else if (e.target.querySelector("button").textContent == "Make Changes") {
    axios
      .put(
        "https://crudcrud.com/api/8eefe44509324251b22a1316d9d8752b/orders/" +
          editIndex,
        newOrder
      )
      .then((res) => {
        console.log("Order Updated! " + res);
        resetForm();
        displayOrders();
      })
      .catch((error) => console.error(error));
  }
}

async function displayOrders() {
  tableOne.innerHTML = "";
  tableTwo.innerHTML = "";
  tableThree.innerHTML = "";
  let orderData = await getOrders();
  if (orderData.length > 0) {
    document.getElementById("list-header").hidden = false;
  } else {
    document.getElementById("list-header").hidden = true;
  }
  orderData.forEach((order, index) => {
    const newListItem = document.createElement("li");
    newListItem.id = index;

    newListItem.textContent = `${order.name}-Rs.${order.price}-${order.table}`;
    const editButton = document.createElement("button");
    editButton.className = "edit";
    editButton.textContent = "Edit";
    const deleteButton = document.createElement("button");
    deleteButton.className = "delete";
    deleteButton.textContent = "Delete";
    newListItem.append(deleteButton, editButton);
    tableOne.appendChild(newListItem);
    if (order.table == "Table 1") tableOne.appendChild(newListItem);
    if (order.table == "Table 2") tableTwo.appendChild(newListItem);
    if (order.table == "Table 3") tableThree.appendChild(newListItem);
  });
}

displayElement.addEventListener("click", (e) => {
  if (e.target.classList.contains("edit")) {
    editOrder(e);
  } else if (e.target.classList.contains("delete")) {
    deleteOrder(e);
    displayOrders();
  }
});

function deleteOrder(e) {
  let orderDataJSON = JSON.parse(e.target.parentNode.firstChild.textContent);
  axios
    .delete(
      "https://crudcrud.com/api/8eefe44509324251b22a1316d9d8752b/orders/" +
        orderDataJSON._id
    )
    .then((res) => displayOrders())
    .catch((error) => console.error(error));
}

function editOrder(e) {
  let orderDataJSON = JSON.parse(e.target.parentNode.firstChild.textContent);
  editIndex = orderDataJSON._id;
  nameElement.value = orderDataJSON.name;
  priceElement.value = orderDataJSON.price;
  let option = Array.from(tableDropdownElement.options).find(
    (option) => option.text == orderDataJSON.table
  );
  option.selected = true;
  formElement.querySelector("button").textContent = "Make Changes";
}

function resetForm() {
  nameElement.value = "";
  priceElement.value = "";
  tableDropdownElement.options[0].selected = true;
  formElement.querySelector("button").textContent = "Place Order";
}

window.addEventListener("DOMContentLoaded", function () {
  displayOrders();
});
