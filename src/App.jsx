
import './App.css'

import Navbar from './components/Navbar/Navbar'
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Shop from './pages/Shop';
import ShopCategory from './pages/ShopCategory';
import Product from './pages/Product';
import LoginSignup from './pages/LoginSignup';
import Cart from './pages/Cart';
import Footer from './components/Footer/Footer';
function App() {
 

  return (
    <>
    <BrowserRouter>
    <Navbar></Navbar>
    <Routes>
      <Route path='/' element={<Shop/>}/>
      <Route path='/men' element={<ShopCategory category="men"/>}/>
      <Route path='/women' element={<ShopCategory category="women"/>}/>
      <Route path='/kids' element={<ShopCategory category="kids"/>}/>
      <Route path='/product' element={<Product/>}>
      <Route path=':productId' element={<Product/>}></Route>
      </Route>
      <Route path='cart' element={<Cart/>}></Route>
      <Route path='login' element={<LoginSignup/>}/>
    </Routes>
    <Footer></Footer>
    </BrowserRouter>
     
    </>
  )
}

export default App
