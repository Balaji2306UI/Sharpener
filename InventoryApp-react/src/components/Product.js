import './Product.css'

function Product(props) {
    return (
        <div className="product-wrapper">
            <div>{props.name}</div>
            <div>{`Rs.${props.price}`}</div>
        </div>
    );
}

export default Product;