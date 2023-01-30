import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// pages
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Contact from './Contact';

function App() {


  return (
    <Router>
      <div className='font-mono'>
        <Navbar />
        <div className='flex justify-center'> {/* Main content wrapper*/}
          <div className='m-10 lg:max-w-4xl'>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
