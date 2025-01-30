import './App.css';
import Banner from './components/banner';
import Cart from './components/cart';
import Header from './components/header';
import Products from './components/products';

let products = [

  {name : 'Panda', description : 'this is a lighting panda', src : 'panda.jpeg'},
  {name : 'Duck', description : 'this is a lighting duck', src : 'duck.jpeg'},
  {name : 'Unicorn', description : 'this is a lighting unicorn', src : 'unicorn.jpeg'},
  {name : 'Rabit', description : 'this is a lighting rabit', src : 'rabit.jpeg'},
]

function App() {
  return (
    <div className="App">
      <Header/>
      <Banner/>
      <Products products={products} />
      <Cart/>
    </div>
  );
}

export default App;
