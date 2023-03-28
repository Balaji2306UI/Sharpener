import Product from "./Product";

function Products(props) {
    return (
        <>
            <ul class="nav nav-tabs justify-content-center">
                <li class="nav-item">
                    <a class="nav-link active" data-bs-toggle="tab" href="#beauty">Beauty products</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" data-bs-toggle="tab" href="#home">Home Appliances</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" data-bs-toggle="tab" href="#grocery">Grocery</a>
                </li>
            </ul>
            <div id="display-orders" class="tab-content">
                <div id="beauty" class="tab-pane fade active">
                    <ul class="list-group">
                    {
                        props.data.filter((item) => {
                            return item.category === "Beauty products"
                        }).map((item) => {
                            return <Product key={item.id} name={item.name} price={item.price} category={item.category}/>
                        })
                    }
                    </ul>
                </div>
                <div id="home" class="tab-pane fade">
                    <ul class="list-group">
                    {
                        props.data.filter((item) => {
                            return item.category === "Home Appliances"
                        }).map((item) => {
                            return <Product key={item.id} name={item.name} price={item.price} category={item.category}/>
                        })
                    }
                    </ul>
                </div>
                <div id="grocery" class="tab-pane fade">
                    <ul class="list-group">
                    {
                        props.data.filter((item) => {
                            return item.category === "Grocery"
                        }).map((item) => {
                            return <Product key={item.id} name={item.name} price={item.price} category={item.category}/>
                        })
                    } 
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Products;