const itemList = document.getElementById('items');
const itemHeaderText = document.getElementById('item-text');
const itemDescText = document.getElementById('item-desc');
const filterText = document.getElementById('filter');
const form = document.getElementById('add-item-form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    //new list item
    const newListItem = document.createElement('li');
    newListItem.setAttribute('class', 'list-group-item');
    //List Header
    const listHeader = document.createElement('h5');
    listHeader.appendChild(document.createTextNode(itemHeaderText.value));
    newListItem.appendChild(listHeader);
    //List Description
    const listDescription = document.createElement('p');
    listDescription.appendChild(document.createTextNode(itemDescText.value));
    listDescription.setAttribute('class','float-left');
    newListItem.appendChild(listDescription);
    itemHeaderText.value = "";
    itemDescText.value = "";
    //Delete button
    const delButton = document.createElement('button');
    delButton.setAttribute('class', 'btn btn-danger btn-sm float-right delete');
    delButton.appendChild(document.createTextNode('Delete'));
    newListItem.appendChild(delButton);
    //Edit button
    const editButton = document.createElement('button');
    editButton.setAttribute('class', 'btn btn-primary btn-sm float-right mr-2 edit');
    editButton.appendChild(document.createTextNode('Edit'));
    newListItem.appendChild(editButton);
    //Append list item to item lister
    itemList.appendChild(newListItem);
});

itemList.addEventListener('click', (e) => {
    if(e.target.classList.contains('delete')) {
        if(confirm('are you sure?')) {
            itemList.removeChild(e.target.parentElement);
        }
    }
})

filterText.addEventListener('keyup', (e) => {
    let searchText = e.target.value.toLowerCase();
    const listItems = itemList.getElementsByTagName('li');
    Array.from(listItems).forEach(item => {
        if(item.firstElementChild.textContent.includes(searchText) || item.querySelector('p').textContent.includes(searchText)) {
            item.style.display = 'block';
        }
        else
            item.style.display = 'none';
    });
})