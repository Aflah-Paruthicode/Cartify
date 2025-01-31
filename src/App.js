import './App.css';
import Banner from './components/banner';
import Cart from './components/cart';
import Header from './components/header';
import Products from './components/products';
import { useReducer } from "react";

let products = [

  { id : 1, name : 'Panda', description : 'this is a lighting panda', src : 'panda.jpeg'},
  { id : 2, name : 'Duck', description : 'this is a lighting duck', src : 'duck.jpeg'},
  { id : 3, name : 'Unicorn', description : 'this is a lighting unicorn', src : 'unicorn.jpeg'},
  { id : 4, name : 'Rabit', description : 'this is a lighting rabit', src : 'rabit.jpeg'},
]

function App() {

  let initialValue = {
    cart:[],
    totel:0
}

function reducerFunction (state,action) {

  switch(action.type) {

    case "add_to_cart" :  return {
      
      cart : [...state.cart,action.product],
      totel : state.totel + action.product.price
      
    }

    case "remove_from_cart" : return {

      cart : state.cart.filter((item) => item.id !== action.id),
      totel : state.totel - action.price
      
    }

  }


}

let [state,dispach] = useReducer(reducerFunction,initialValue)


  return (
    <div className="App">
      <Header/>
      <Banner/>
      <Products products={products} dispach={dispach} />
      <Cart products={products} />
    </div>
  );
}

export default App;
