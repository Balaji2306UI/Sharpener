function Dropdown(props) {
    return (
        <div class="input-group">
            <span class="input-group-text"><i class="fa-solid fa-list-ul"></i></span>
            <select id="category" class="form-select" value={props.value} onChange={props.onChange}>
                <option value="default">Choose category</option>
                <option value="Beauty products">Beauty products</option>
                <option value="Home Appliances">Home Appliances</option>
                <option value="Grocery">Grocery</option>
            </select>
        </div>
    );
}

export default Dropdown;