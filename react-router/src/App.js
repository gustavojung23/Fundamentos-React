import './App.css';

//React Router;
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';

//Import Pages;
import Home from './Pages/Home/Home.jsx';
import About from './Pages/About/About.jsx';
import Product from './Pages/Product/Product.jsx';
import ProductInfo from './Pages/ProductInfo/ProductInfo.jsx';
import NotFound from './Pages/NotFound/NotFound.jsx';
import Search from './Pages/Search/Search.jsx';

//Import Components;
import Navbar from './Components/Navbar/Navbar.jsx';
import SearchForm from './Components/SearchForm/SearchForm.jsx';

function App() {
  return (
    <div className="App">
      <h1>React Router</h1>
      <BrowserRouter>
        <Navbar />
        <SearchForm />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/company" element={<Navigate to="/about" />} />
          <Route path="/products/:id" element={<Product />} />
          <Route path="/products/:id/info" element={<ProductInfo />} />
          <Route path="/search" element={<Search />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
