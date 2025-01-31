
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
                <h2>999/-</h2>
                <button onClick={() => {
                    props.dispach({
                        type : 'add_to_cart',
                        product : product.id
                    })
                }}>Add to Cart</button>
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