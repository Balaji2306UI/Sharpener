import Product from "./Product";

function Products(props) {
    let total = 0;
    const products = props.data.map((item) => {
        total += item.price;
        return <Product key={item.id} name={item.name} price={item.price} category={item.category}/>
    });
    return products
}

export default Products;