
import LandingPage from './Pages/LandingPage';
import { BrowserRouter , Route, Routes} from 'react-router-dom'
import Listings from './Pages/Listings';
import Cart from './Pages/Cart';
import ProdutDetail from './components/ProdutDetail';
import OrderPage from './Pages/OrderPage';
import OrderHistory from './Pages/OrderHistory';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/listings' element={<Listings/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/ProductDetails' element={<ProdutDetail/>} />
        <Route path='/order' element={<OrderPage/>} />
        <Route path='/orderhistroy' element={<OrderHistory/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;