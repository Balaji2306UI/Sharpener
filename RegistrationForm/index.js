const formElement = document.querySelector("form");
const nameElement = document.querySelector("#name");
const emailElement = document.querySelector("#email");
const phoneElement = document.querySelector("#phone");
const dateElement = document.querySelector("#date");
const timeDropdownElement = document.querySelector("select");
const displayElement = document.getElementById("display-users");
let editIndex = 0;

formElement.addEventListener("submit", (e) => addUser(e));
/*
function getUserData() {
    if(localStorage.getItem('userDetails') == null) {
        return localStorage.setItem('userDetails', '[]');
    }
    return JSON.parse(localStorage.getItem('userDetails'));
}
*/

//Changing the getUserData function to use axios and get the user data from crudcrud
function getUserData() {
  return new Promise((resolve, reject) => {
    axios
      .get("https://crudcrud.com/api/316f3932699b4b79b2fe9c584e02b316/users")
      .then((res) => resolve(res.data))
      .catch((error) => reject(error));
  });
}

/*
function addUser(e) {
    e.preventDefault();
    let newUser = {
        name: nameElement.value,
        email: emailElement.value,
        phone: phoneElement.value,
        date: dateElement.value,
        time: timeDropdownElement.options[timeDropdownElement.selectedIndex].value
    }
    let oldData = getUserData();
    if(e.target.querySelector('button').textContent == 'Get a call') {
        oldData.push(newUser);
    }
    else if(e.target.querySelector('button').textContent == 'Make Changes') {
        oldData[editIndex] = newUser;
    }
    localStorage.setItem('userDetails', JSON.stringify(oldData));
    resetForm();
    displayUsers();
}
*/
// Changing the addUser function to use axios and post the user data to crudcrud
function addUser(e) {
  e.preventDefault();
  let newUser = {
    name: nameElement.value,
    email: emailElement.value,
    phone: phoneElement.value,
    date: dateElement.value,
    time: timeDropdownElement.options[timeDropdownElement.selectedIndex].value,
  };
  if (e.target.querySelector("button").textContent == "Get a call") {
    axios
      .post(
        "https://crudcrud.com/api/316f3932699b4b79b2fe9c584e02b316/users",
        newUser
      )
      .then((res) => {
        console.log("User Added! " + res);
        resetForm();
        displayUsers();
      })
      .catch((error) => console.error(error));
  } else if (e.target.querySelector("button").textContent == "Make Changes") {
    axios
      .put(
        "https://crudcrud.com/api/316f3932699b4b79b2fe9c584e02b316/users/"+editIndex,
        newUser
      )
      .then((res) => {
        console.log("User Updated! " + res);
        resetForm();
        displayUsers();
      })
      .catch((error) => console.error(error));
  }
}

async function displayUsers() {
  let listContent = document.getElementById("list-content");
  listContent.innerHTML = "";
  let userData = await getUserData();
  userData.forEach((user, index) => {
    document.getElementById("list-header").hidden = false;
    const newListItem = document.createElement("li");
    newListItem.id = index;
    newListItem.textContent = JSON.stringify(user);
    const editButton = document.createElement("button");
    editButton.className = "edit";
    editButton.textContent = "Edit";
    const deleteButton = document.createElement("button");
    deleteButton.className = "delete";
    deleteButton.textContent = "Delete";
    newListItem.append(deleteButton, editButton);
    listContent.appendChild(newListItem);
  });
}

displayElement.addEventListener("click", (e) => {
  if (e.target.classList.contains("edit")) {
    editUser(e);
  } else if (e.target.classList.contains("delete")) {
    deleteUser(e);
    displayUsers();
  }
});

/*
function deleteUser(e) {
    let index = parseInt(e.target.parentNode.id);
    let userData = Array.from(JSON.parse(localStorage.getItem('userDetails')));
    if(index == 0) {
        userData.shift();
    }
    else if(index+1 == userData.length)
        userData.pop();
    else {
        let subArr = userData.slice(index+1);
        userData.splice(index, userData.length - index+1, ...subArr );
    }
    localStorage.setItem('userDetails', JSON.stringify(userData));
    displayUsers()
}
*/
// Changing the deleteUser function to use axios and delete the user data from crudcrud
function deleteUser(e) {
  let userDataJSON = JSON.parse(e.target.parentNode.firstChild.textContent);
  axios
    .delete(
      "https://crudcrud.com/api/316f3932699b4b79b2fe9c584e02b316/users/" +
        userDataJSON._id
    )
    .then((res) => displayUsers())
    .catch((error) => console.error(error));
}

function editUser(e) {
  let userDataJSON = JSON.parse(e.target.parentNode.firstChild.textContent);
  editIndex = userDataJSON._id
  nameElement.value = userDataJSON.name;
  emailElement.value = userDataJSON.email;
  phoneElement.value = userDataJSON.phone;
  dateElement.value = userDataJSON.date;
  let option = Array.from(timeDropdownElement.options).find(
    (option) => option.text == userDataJSON.time
  );
  option.selected = true;
  formElement.querySelector("button").textContent = "Make Changes";
}

function resetForm() {
    nameElement.value = "";
    emailElement.value = "";
    phoneElement.value = "";
    dateElement.value = "";
    timeDropdownElement.options[0].selected = true;
    formElement.querySelector("button").textContent = "Get a call";
}

window.addEventListener("DOMContentLoaded", function () {
  displayUsers();
});
