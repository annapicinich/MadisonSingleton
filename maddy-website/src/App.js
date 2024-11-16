import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './screens/Home';
import About from './screens/About';
import Photos from './screens/Photos';
import Ap from './screens/Ap';
import Blog from './screens/Blog';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/me">Me</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/photos">Photos</Link>
          <Link to="/appreciate">Appreciate</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/me" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/Photos" element={<Photos/>} />
          <Route path="/appreciate" element={<Ap />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
