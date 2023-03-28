const formElement = document.querySelector("form");
const nameElement = document.querySelector("#name");
const priceElement = document.querySelector("#price");
const categoryDropdownElement = document.querySelector("#category");
const displayElement = document.getElementById("display-orders");
const beautyProducts = document.querySelector("#beauty ul");
const homeProducts = document.querySelector("#home ul");
const groceryProducts = document.querySelector("#grocery ul");
const editButton = document.querySelector('button.edit');
const deleteButton = document.querySelector('button.delete');
let editIndex = 0;

const crudcrudURL = "https://crudcrud.com/api/e46ad04c9b8a4633996a591bd0c896ec";

formElement.addEventListener("submit", (e) => addOrder(e));

displayElement.addEventListener("click", (e) => {
    if (e.target.classList.contains("edit")) {
        editOrder(e);
    } else if (e.target.classList.contains("delete")) {
        deleteOrder(e);
    }
});

async function getOrders() {
	try {
		const res = await axios.get(`${crudcrudURL}/products`);
		return res.data;
	} catch (error) {
		throw error;
	}
}

async function addOrder(e) {
    e.preventDefault();
    let newOrder = {
        name: nameElement.value,
        price: priceElement.value,
        category:
            categoryDropdownElement.options[
                categoryDropdownElement.selectedIndex
            ].value,
    };
    if (e.target.querySelector("button").textContent == "Place Order") {
        try {
            const res = await axios.post(`${crudcrudURL}/products`, newOrder);
            console.log("Order Added!" + res);
            resetForm();
            displayOrders();
        } catch (error) {
            console.error(error);
        }
    } else if (e.target.querySelector("button").textContent == "Make Changes") {
		try {
            const res = await axios.put(`${crudcrudURL}/products/${editIndex}`, newOrder);
            console.log("Order Updated!" + res);
            resetForm();
            displayOrders();
        } catch (error) {
            console.error(error);
        }
    }
}

function editOrder(e) {
    let orderDataJSON = JSON.parse(
        e.target.parentNode.firstElementChild.getAttribute("data-content")
    );
    editIndex = orderDataJSON._id;
    nameElement.value = orderDataJSON.name;
    priceElement.value = orderDataJSON.price;
    let option = Array.from(categoryDropdownElement.options).find(
        (option) => option.text == orderDataJSON.category
    );
    option.selected = true;
    formElement.querySelector("button").textContent = "Make Changes";
}

async function displayOrders() {
    beautyProducts.innerHTML = "";
    homeProducts.innerHTML = "";
    groceryProducts.innerHTML = "";
    let orderData = await getOrders();
    orderData.forEach((order, index) => {
        const newListItem = createListElement(
            `${order.name} - Rs.${order.price}`,
            index,
            JSON.stringify(order)
        );
        if (order.category == "Beauty products")
            beautyProducts.innerHTML += newListItem;
        if (order.category == "Home Appliances")
            homeProducts.innerHTML += newListItem;
        if (order.category == "Grocery")
            groceryProducts.innerHTML += newListItem;
    });
}

async function deleteOrder(e) {
    let orderDataJSON = JSON.parse(
        e.target.parentNode.firstElementChild.getAttribute("data-content")
    );
	try {
		let res = await axios.delete(`${crudcrudURL}/products/${orderDataJSON._id}`);
		displayOrders();
		return 1;
	} catch (error) {
		console.error(error)
	}
}

function resetForm() {
    nameElement.value = "";
    priceElement.value = "";
    categoryDropdownElement.options[0].selected = true;
    formElement.querySelector("button").textContent = "Place Order";
}

function createListElement(content, id, jsonContent) {
    return `<li class="list-group-item" id="${id}">
  <div class="input-group">
      <input type="text" class="form-control" data-content='${jsonContent}' value="${content}" disabled>
      <button type="button" class="btn btn-outline-primary edit">
          Edit
      </button>
      <button type="button" class="btn btn-outline-danger delete">
          Delete
      </button>
  </div>
</li>`;
}

window.addEventListener("DOMContentLoaded", function () {
    displayOrders();
});
