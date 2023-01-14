import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// pages
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Contact from './Contact';

function App() {
 

  return (
    <Router>
      <div className='App'>
        <Navbar />
        <div className='content'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />              
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
