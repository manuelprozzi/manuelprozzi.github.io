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
        <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-slate-500 mb-3 shadow-lg">
            <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                    <NavLink to="/" className="text-xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap text-white"><h1 className='text-2xl'>{t('navbar_title')}</h1></NavLink >
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
                    <ul className="flex flex-col lg:flex-row list-none lg:ml-auto text-xl">
                        <li className="nav-item">
                            <NavLink to="/" className="px-3 py-2 flex items-center font-bold leading-snug text-white hover:opacity-75">{t('navbar_home')}</NavLink >
                        </li>
                        <li className="nav-item">
                            <NavLink to="/contact" className="px-3 py-2 flex items-center font-bold leading-snug text-white hover:opacity-75">{t('navbar_contact')}</NavLink >
                        </li>
                        <li className="nav-item">
                            <NavLink to="/about" className="px-3 py-2 flex items-center font-bold leading-snug text-white hover:opacity-75">{t('navbar_about')}</NavLink >
                        </li>
                        <li className="nav-item py-3">
                            <label class="relative inline-flex cursor-pointer">
                                <input type="checkbox" value="" class="sr-only peer" id='switcher' onChange={handleChange} />
                                <div class="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 ">
                                <span class="absolute font-medium text-sm py-0 px-1 text-black z-10">En</span>
                                <span class="absolute font-medium text-sm py-0 px-6 text-black z-10">Es</span>
                                </div>
                            </label>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;