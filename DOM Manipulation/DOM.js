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
    const button = document.createElement('button');
    button.setAttribute('class', 'btn btn-danger btn-sm float-right delete');
    button.appendChild(document.createTextNode('X'));
    newListItem.appendChild(button);
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