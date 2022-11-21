document.title = "Title from Js file";
//Task for getElementById()
const header = document.getElementById('main-header');
header.style.border = "2px solid red";
const listItems = document.getElementsByClassName('list-group-item');
listItems[0].style.fontWeight = "bold";
listItems[0].style.color = 'green';

//Task for getElementsByClassName()
//const listItems = document.getElementsByClassName('list-group-item');
listItems[2].style.backgroundColor = "green";
for(let i=0;i<listItems.length;i++) {
    listItems[i].style.fontWeight = "bold";
}