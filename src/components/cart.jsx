
import React from "react";

function Cart (props) {


    let products = props.cartProducts
   
   

    return (

        <div className="cart-root">

            <div className="cart-images">
                {
                
                    products.cart.map((element) => {
                        return (
                            
                            <img src={element.src} alt="" />
                        )
                        
                    })
  
                }

               
                
            </div>

            <div>
                <h1>Totel ammount : {products.totel}/-</h1>
                <h1>Totel items : {products.cart.length}</h1>
            </div>
        </div>
    )
}

export default Cart