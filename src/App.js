import { useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Item from './components/Item';
import Jumbotron from './components/Jumbotron';
import Navbar from './components/NavBar';

function App() {
  const [cart,setCart] = useState(0)
  return (
    <div>
      <Navbar cart={cart}/>
      <Jumbotron/>
      <Item cart={cart} setCart={setCart}/>
      <Footer/>
    </div>
  );
}

export default App;
