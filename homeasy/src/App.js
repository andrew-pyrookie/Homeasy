import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Shop from './components/shop';
import AboutUs from './components/About';
import ContactUs from './components/Contact';
import ProductList from './components/ProductList';
import Register from './components/Register';
import Login from './components/Login';
import PrivateRoute from './PrivateRoutes';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route element={<PrivateRoute />}>
            <Route path="/products" element={<ProductList />} />
          </Route>
          {/* Add routes for other components as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
