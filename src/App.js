import './App.css';
import NavBar from './components/NavBar/Navbar'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
<<<<<<< HEAD
import Login from './components/Login/Login';
=======

>>>>>>> a5fa37f48d88737406de0bb847c7485678572bc5
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { CartProvider } from './context/CartContext';
import { Notification, NotificationProvider } from './Notification/Notification';
import { AuthProvider } from './context/AuthContext';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';

function App() {
 
  return (
    <div className="App">
<<<<<<< HEAD
     <  div style={{backgroundImage: 'URL("https://w0.peakpx.com/wallpaper/941/335/HD-wallpaper-underwater-nature-sea.jpg")'}}>
        <NotificationProvider>
          <BrowserRouter>
          <AuthProvider>
              <CartProvider>
                  <NavBar/>  
                  <Routes>     
                      <Route path='/' element={<ItemListContainer greeting={"Bienbenidos a Malawi"} />} />
                      <Route path='/category/:categoryId' element={<ItemListContainer greeting={"Filtrados por categoria"} />} />
                      <Route path='/item/:itemId' element={<ItemDetailContainer/>} />
                      <Route path='/login' element={<Login/>} />
                      <Route path='/cart' element={<Cart />} />
                      <Route path='/checkout' element={<Checkout />} />
                 </Routes>
              </CartProvider>
          </AuthProvider>
          </BrowserRouter>
        </NotificationProvider>
=======
      <div style={{backgroundImage: 'URL("https://w0.peakpx.com/wallpaper/941/335/HD-wallpaper-underwater-nature-sea.jpg")'}}>
      <BrowserRouter>
         <NavBar/>  
         <Routes>     
            <Route path='/' element={<ItemListContainer greeting={"Bienbenidos a Malawi"} />} />
            <Route path='/category/:categoryId' element={<ItemListContainer greeting={"Filtrados por categoria"} />} />
            <Route path='/item/:itemId' element={<ItemDetailContainer/>} />
         </Routes>
      </BrowserRouter>
>>>>>>> a5fa37f48d88737406de0bb847c7485678572bc5
      </div>
    </div>
  );
}

export default App;
