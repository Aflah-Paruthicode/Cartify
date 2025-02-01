import './App.css';
import Banner from './components/banner';
import Cart from './components/cart';
import Header from './components/header';
import Products from './components/products';
import { useReducer } from "react";

let products = [

  { id : 1, name : 'Panda', description : 'this is a lighting panda', src : 'panda.jpeg', price : 899},
  { id : 2, name : 'Duck', description : 'this is a lighting duck', src : 'duck.jpeg', price : 999},
  { id : 3, name : 'Unicorn', description : 'this is a lighting unicorn', src : 'unicorn.jpeg', price : 1099},
  { id : 4, name : 'Rabit', description : 'this is a lighting rabit', src : 'rabit.jpeg', price : 699},
]

function App() {

  let initialValue = {
    cart:[],
    totel:0
}

function reducerFunction (state,action) {

  let TheProduct

  for(let i =0;i<products.length;i++) {
        if(products[i].id === action.product) {
          TheProduct = products[i]
        }
  }


  switch(action.type) {

    case "add_to_cart" :  return {
      ...state,
      cart : [...state.cart,TheProduct],
      totel : state.totel + TheProduct.price
      
    }

    case "remove_from_cart" : return {
      ...state,
      cart : state.cart.filter((item) => item.id !== TheProduct.id),
      totel : state.totel - TheProduct.price
      
    }

    default : return state

  }


}

let [state,dispach] = useReducer(reducerFunction,initialValue)


  return (
    <div className="App">
      <Header/>
      <Banner/>
      <Products products={products} cartProducts={state} dispach={dispach} />
      <Cart cartProducts={state} />
    </div>
  );
}

export default App;
