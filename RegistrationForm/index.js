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
    let userDetails = {
        name: formElement.value,
        email: emailElement.value,
        phone: phoneElement.value,
        date: dateElement.value,
        time: timeDropdownElement.options[timeDropdownElement.selectedIndex].value
    }
    localStorage.setItem('user', JSON.stringify(userDetails));
    
});