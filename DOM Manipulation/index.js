document.title = "Title from Js file";
//Task for getElementById()
const header = document.getElementById('main-header');
header.style.border = "2px solid red";
const listItems = document.getElementsByClassName('list-group-item');
listItems[0].style.fontWeight = "bold";
listItems[0].style.color = 'green';

//Task for getElementsByClassName()
/*
const listItems = document.getElementsByClassName('list-group-item');
listItems[2].style.backgroundColor = "green";
for(let i=0;i<listItems.length;i++) {
    listItems[i].style.fontWeight = "bold";
}
*/

//Task for getElementsByTagName()
/*
const li = document.getElementsByTagName('li');
li[2].style.backgroundColor = "green";
for(let i=0;i<li.length;i++) {
    li[i].style.fontWeight = "bold";
}
*/

//Task for querySelector()

const secondListItem = document.querySelector('.list-group-item:nth-child(2)');
secondListItem.style.backgroundColor = "green";

const thirdListItem = document.querySelector('.list-group-item:nth-child(3)');
thirdListItem.style.display = "none";

//Task for querySelectorAll()
const listItemsAll = document.querySelectorAll('.list-group-item');
listItems[0].style.color = "black";
listItemsAll[1].style.backgroundColor = "none";

const oddListItems = document.querySelectorAll('.list-group-item:nth-child(odd)');
for(let item of oddListItems) {
    item.style.backgroundColor = "green";
}

/*
Note: 
1. querySelector() can be used to access a single/first element in the DOM that matches the specified CSS selector.
2. querySelectorAll() can be used to access all the elements in the DOM that matches the specified CSS selector.
*/