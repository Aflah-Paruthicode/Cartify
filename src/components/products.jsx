
import React from "react";

function Products (props) {


    let cartItems = props.cartProducts


    return (

        <div className="products-main">
            <h2 className="ProductHeading">Products</h2>
        
        <div className="Products-root">
            
        {
            props.products.map((product)=> {
                let isInCart = cartItems.cart.some((item) => item.id === product.id);

                return (

            <div className="product">
                <img src={product.src} alt="" />
                <h2>{product.name}</h2>
                <p>{product.description}</p>
                <h2>{product.price}/-</h2>
                <button  onClick={() => {
                                    props.dispach({
                                        type: isInCart ? "remove_from_cart" : "add_to_cart",
                                        product: product.id,
                                    });
                                }}>
                    {isInCart ? "Remove from cart" : "Add to cart"}
                </button>
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