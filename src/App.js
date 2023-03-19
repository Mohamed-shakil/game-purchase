import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/home';
import Shoppingcart from './components/shoppingcart';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/shoppingcart' element={<Shoppingcart/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
