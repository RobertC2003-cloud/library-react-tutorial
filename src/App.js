import Nav from './components/nav';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./Pages/Home";
import Books from "./Pages/Books";
import { books } from "./data";
import BookInfo from './Pages/BookInfo';




function App() {
  return (
    <Router>
    <div className="App">
      <Nav />
      <Routes>
       <Route path="/" exact element={<Home />} />
       <Route path="/books" exact element={<Books books={books} />} />
       <Route path="/books/:id" element={<BookInfo books={books} />} />
       </Routes>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
