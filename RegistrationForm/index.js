const formElement = document.querySelector('form');
const nameElement = document.querySelector('#name');
const emailElement = document.querySelector('#email');
const phoneElement = document.querySelector('#phone');
const dateElement = document.querySelector("#date");
const timeDropdownElement = document.querySelector('select');

formElement.addEventListener("submit", (e) => {
    e.preventDefault();
   /* console.log(`Name: ${nameElement.value}
Email: ${emailElement.value}
Phone: ${phoneElement.value}
Date Time: ${dateElement.value}, ${timeDropdownElement.options[timeDropdownElement.selectedIndex].value}`);
*/   
    let newUser = {
        name: nameElement.value,
        email: emailElement.value,
        phone: phoneElement.value,
        date: dateElement.value,
        time: timeDropdownElement.options[timeDropdownElement.selectedIndex].value
    }
    
    if(localStorage.getItem('userDetails') == null) {
        localStorage.setItem('userDetails', '[]');
    }
    let oldData = JSON.parse(localStorage.getItem('userDetails'));
    oldData.push(newUser);
    localStorage.setItem('userDetails', JSON.stringify(oldData));

    displayUsers();

});

function displayUsers() {
    const displayElement = document.getElementById('display-users');
    displayElement.innerHTML = "";
    if(localStorage.getItem('userDetails') == null) {
        localStorage.setItem('userDetails', '[]');
    }
    let userData = JSON.parse(localStorage.getItem('userDetails'));
    userData.forEach(user => {
        const newListItem = document.createElement('li');
        newListItem.textContent = JSON.stringify(user);
        displayElement.appendChild(newListItem)
    });
}

window.onload = function() {
    displayUsers();
};