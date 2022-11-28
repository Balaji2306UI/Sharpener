const itemList = document.getElementById('items');
const inputText = document.getElementById('item-input-text');
const form = document.getElementById('add-item-form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    //new list item
    const newListItem = document.createElement('li');
    newListItem.setAttribute('class', 'list-group-item');
    newListItem.appendChild(document.createTextNode(inputText.value));
    inputText.value = "";
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