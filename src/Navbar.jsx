import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Suspense , useState } from 'react';
import i18next from 'i18next';

const Navbar = () => {

    const { t, i18n } = useTranslation();

    const [checked, setChecked] = useState(false); 
  const handleChange = () => { 
    
    setChecked(!checked); 

checked ? i18next.changeLanguage('en') : i18next.changeLanguage('es')
    
  }; 


    return (
        <nav className="navbar">
            <span className='title'><Link to="/"><h1>{t('navbar_title')}</h1></Link></span>
            <span className='element'><Link to="/">{t('navbar_home')}</Link></span>
            <span className='element'><Link to="/contact">{t('navbar_contact')}</Link></span>
            <span className='element'><Link to="/about">{t('navbar_about')}</Link></span>
            <span className='element switch'>
                <input type='checkbox' id='switcher' onChange={handleChange}/>
                <label htmlFor="switcher"></label>
            </span>
        </nav >

    );
}



export default function App() {
    return (
        <Suspense fallback="Loading...">
            <Navbar />
        </Suspense>
    )
}