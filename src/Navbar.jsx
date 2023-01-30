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
        <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-slate-500 mb-3">
            <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                    <NavLink to="/" className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"><h1>{t('navbar_title')}</h1></NavLink >
                    <button
                        className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                        type="button"
                    >
                        <MenuButton clicked={clicked} handleClick={handleClick} />
                    </button>
                </div>
                <div
                    className={
                        "lg:flex flex-grow items-center" +
                        (clicked ? " flex" : " hidden")
                    }
                    id="example-navbar-danger"
                >
                    <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                        <li className="nav-item">
                            <NavLink to="/" className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">{t('navbar_home')}</NavLink >
                        </li>
                        <li className="nav-item">
                            <NavLink to="/contact" className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">{t('navbar_contact')}</NavLink >
                        </li>
                        <li className="nav-item">
                            <NavLink to="/about" className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">{t('navbar_about')}</NavLink >
                        </li>
                        <li className="nav-item">
                            <input type='checkbox' id='switcher' onChange={handleChange} />
                            <label htmlFor="switcher"></label>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}



export default Navbar;