import Nav from './components/nav';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./Pages/Home";
import Books from "./Pages/Books";
import { books } from "./data";
import BookInfo from './Pages/BookInfo';
import Cart from './Pages/Cart';
import { useState, useEffect } from 'react';




function App() {
  const [cart, setCart] = useState([]);

  function addToCart(book) {
   setCart([...cart, book])
  }

  useEffect(() => {
    console.log(cart)
  }, [cart])


  return (
    <Router>
    <div className="App">
      <Nav />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Books books={books} />} />
          <Route path="/books/:id" element={<BookInfo books={books} addToCart={addToCart} />} />
          <Route path="/cart" element={<Cart books={books} cart={cart} />} />
      </Routes>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
