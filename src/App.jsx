import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// pages
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import MainContentWrapper from './MainContentWrapper';

function App() {


  return (
    
    <div className="min-h-screen bg-gray-400 dark:bg-slate-500">
    <Router>        
      <Navbar />
      <MainContentWrapper className="bg-gray-50">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </MainContentWrapper>
    </Router>
    </div>
  );
}

export default App;
