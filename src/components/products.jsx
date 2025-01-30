
import React from "react";

function Products (props) {



    return (

        <div className="products-main">
            <h2 className="ProductHeading">Products</h2>
        
        <div className="Products-root">
            
        {
            props.products.map((product)=> {

                return (

            <div className="product">
                <img src={product.src} alt="" />
                <h2>{product.name}</h2>
                <p>{product.description}</p>
                <a href="">Add to Cart</a>
            </div>
                )

            })
        }

        </div>
        <hr />
        </div>
    )
}

export default Products