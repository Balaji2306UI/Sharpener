/*
document.title = "Title from Js file";
//Task for getElementById()
const header = document.getElementById('main-header');
header.style.border = "2px solid red";
const listItems = document.getElementsByClassName('list-group-item');
listItems[0].style.fontWeight = "bold";
listItems[0].style.color = 'green';
*/

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
/*
const secondListItem = document.querySelector('.list-group-item:nth-child(2)');
secondListItem.style.backgroundColor = "green";

const thirdListItem = document.querySelector('.list-group-item:nth-child(3)');
thirdListItem.style.display = "none";
*/

//Task for querySelectorAll()
/*
const listItemsAll = document.querySelectorAll('.list-group-item');
listItems[0].style.color = "black";
listItemsAll[1].style.backgroundColor = "none";

const oddListItems = document.querySelectorAll('.list-group-item:nth-child(odd)');
for(let item of oddListItems) {
    item.style.backgroundColor = "green";
}
*/

/*
Note: 
1. querySelector() can be used to access a single/first element in the DOM that matches the specified CSS selector.
2. querySelectorAll() can be used to access all the elements in the DOM that matches the specified CSS selector.
*/


//Traversing the DOM
const itemList = document.querySelector('#items');

//parentNode
itemList.parentNode.style.backgroundColor = 'grey';
itemList.parentNode.parentNode.style.border = "2px solid blue"

//parentElement - works similar as parentNode
itemList.parentElement.style.backgroundColor = "lightgrey";
itemList.parentElement.parentNode.style.border = "2px solid red";

//children
itemList.children[2].style.fontStyle = "italic"

//firstChild - used to access the first child of the parent element; whitespace & newline are all considered as children.
itemList.firstChild.textContent = "Hello, I'm the new first element"

//firstElementChild - used to access the first child element of the parent element; Only the html elements are considered as children.
itemList.firstElementChild.style.textTransform = "uppercase"

//lastChild - used to access the last child of the parent element; whitespace & newline are all considered as children.
itemList.lastChild.textContent = "Now I'm the last element";

//lastElementChild - used to access the last child element of the parent element; Only the html elements are considered as children.
itemList.lastElementChild.style.fontFamily = "Verdana"

//nextSibling
itemList.firstChild.nextSibling.textContent = "Sibling of first item visited!";

//nextElementSibling
itemList.firstElementChild.nextElementSibling.textContent = "Sibling element of first item visited!";

//previousSibling
itemList.lastChild.previousSibling.textContent = "Modified by previousSibling!"

//previousElementSibling
itemList.lastElementChild.previousElementSibling.textContent = "Modified by previousElementSibling!"

//createElement, setAttribute, createTextNode, appendChild
const newLastListItem = document.createElement('li');
newLastListItem.setAttribute('class', 'list-group-item');
newLastListItem.setAttribute('style', 'background-color: lightblue');
const textForLastListItem = document.createTextNode("I'm the new last element now!");
newLastListItem.appendChild(textForLastListItem);

//Activity1 - Now go head and add HEllo word before Item Lister
itemList.previousElementSibling.previousSibling.textContent= "Hello before ItemLister";

//Activity2 - Now go head and add HEllo word before Item 1
itemList.firstElementChild.previousSibling.textContent = "Hello before Item1"