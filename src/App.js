import './App.css';
import NavBar from './components/NavBar/Navbar'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <div style={{backgroundImage: 'URL("https://w0.peakpx.com/wallpaper/941/335/HD-wallpaper-underwater-nature-sea.jpg")'}}>
      <BrowserRouter>
         <NavBar/>  
         <Routes>     
            <Route path='/' element={<ItemListContainer greeting={"Bienbenidos a Malawi"} />} />
            <Route path='/category/:categoryId' element={<ItemListContainer greeting={"Filtrados por categoria"} />} />
            <Route path='/item/:itemId' element={<ItemDetailContainer/>} />
         </Routes>
      </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
