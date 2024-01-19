import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Pages
import Home from './Pages/Home/Home.jsx';
import About from './Pages/About/About.jsx';
import Products from './Pages/Products/Products.jsx';

//Components
import NavBar from './Components/NavBar/NavBar.jsx';

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/company" element={<Products />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
