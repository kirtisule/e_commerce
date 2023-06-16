
import { Routes,Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Home from './components/Home'
import Navbar from './components/Navbar';
import SingleProduct from './components/SingleProduct';
import ProductCard from './components/ProductCard';
import CProducts from './components/CProducts';
import Addcard from './components/Addcard';

function App({product}) {
  return (
    <div className="App">
     <Navbar/>
     <Routes>
     <Route path="/" element={<Home/>} />
     <Route path="/product/:id" element={<SingleProduct/>} />
     <Route path="/productcard" element={<ProductCard/>} />
     <Route path="/categories/:name" element={<CProducts/>} />
     <Route path="addcard" element={<Addcard/>} />
     </Routes>
     
     <Footer/>
    </div>
  );
}

export default App;
