import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import i18next from 'i18next';
import MenuButton from './MenuButton';

const Navbar = () => {

    /* Translation */
    const { t } = useTranslation();

    const [checked, setChecked] = useState(false);
    const handleChange = () => {
        setChecked(!checked);
        checked ? i18next.changeLanguage('en') : i18next.changeLanguage('es')

    };

    /* Menu */

    const [clicked, setClicked] = useState(false);
    const handleClick = () => {
        setClicked(!clicked);
        console.log(clicked);
    }


    return (
        <nav className="navbar">
            <div><NavLink to="/"><h1>{t('navbar_title')}</h1></NavLink ></div>
            <div className="menuButton">
                <MenuButton clicked={clicked} handleClick={handleClick} />
            </div>
            <ul className={`links${clicked ? ' open' : ''}`}>
                <li><NavLink to="/" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>{t('navbar_home')}</NavLink ></li>
                <li><NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>{t('navbar_contact')}</NavLink ></li>
                <li><NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>{t('navbar_about')}</NavLink ></li>
                <li className='switch'>
                    <input type='checkbox' id='switcher' onChange={handleChange} />
                    <label htmlFor="switcher"></label>
                </li>
            </ul>
            
            
        </nav >

    );
}



export default Navbar;