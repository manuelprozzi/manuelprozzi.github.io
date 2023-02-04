import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// pages
import Navbar from './Navbar';
import Home from './Home';
import Portfolio from './Portfolio';
import MainContentWrapper from './MainContentWrapper';
import { useTranslation } from 'react-i18next';

function App() {

  const { t } = useTranslation();

  return (

    <div className="min-h-screen bg-teal-600 dark:bg-slate-800 font-dm">
      <Router>
        <Navbar />
        <h1 className='text-2xl text-teal-300 mx-10'>{t('navbar_home')}</h1>
        <MainContentWrapper className="bg-gray-500">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/portfolio' element={<Portfolio />} />
          </Routes>
        </MainContentWrapper>
      </Router>
    </div>
  );
}

export default App;
