import Nav from './components/nav';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./Pages/Home";
import Books from "./Pages/Books";
import { books } from "./data";
import BookInfo from './Pages/BookInfo';
import Cart from './Pages/Cart';




function App() {
  return (
    <Router>
    <div className="App">
      <Nav />
      <Routes>
       <Route path="/" exact element={<Home />} />
       <Route path="/books" exact render={() => <Books books={books} />} />
       <Route path="/books/:id" render={() => <BookInfo books={books} />} />
       <Route path="/cart" render={() => <Cart books={books} />} />
       </Routes>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
