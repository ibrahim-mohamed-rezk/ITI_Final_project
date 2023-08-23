import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/home/Home';
import Header from './components/header/Header';
import NotFOund from './components/404/404';
import About from './components/about/About';
import Login from './components/auth/login/Login';
import Rejester from './components/auth/rejester/Rejester';
import Cart from './components/cart/Cart';
import Contact from './components/contact/Contact';
import Products from './components/products/Products';
import Product from './components/products/product/Product';

function App() {
  return (
    <div className="App">
      <Header /> 
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/login' element={<Login />} />
        <Route path='/rejester' element={<Rejester />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/products' element={<Products />} />
        <Route path='/products/:productId' element={<Product />} />
        <Route path='*' element={<NotFOund />} />
      </Routes>
    </div>
  );
}

export default App;
