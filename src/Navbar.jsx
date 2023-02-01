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
        <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-teal-900 dark:bg-slate-900 mb-3 shadow-xl text-teal-400">
            <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                    <NavLink to="/" className="text-xl leading-relaxed inline-block mr-4 py-2 whitespace-nowrap"><h1 className='text-2xl'>{t('navbar_title')}</h1></NavLink >
                    <button
                        className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
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
                        <li>
                            <NavLink to="/" className="px-3 py-2 flex leading-snug hover:opacity-75">{t('navbar_home')}</NavLink >
                        </li>
                        <li>
                            <NavLink to="/contact" className="px-3 py-2 flex leading-snug hover:opacity-75">{t('navbar_contact')}</NavLink >
                        </li>
                        <li>
                            <NavLink to="/about" className="px-3 py-2 flex leading-snug hover:opacity-75">{t('navbar_about')}</NavLink >
                        </li>
                        <li>
                            <label for="switch" className="text-slate-800 select-none my-1.5 mx-1.5 sm:mx-2.5 inline-flex rounded-md cursor-pointer dark:text-slate-800 bg-slate-600 rounded-3xl " onChange={handleChange} >
                                <input id="switch" type="checkbox" className="hidden peer" />
                                <span className="px-1 py-0.5 rounded-l-3xl bg-teal-500 peer-checked:bg-slate-600 dark:bg-teal-500 peer-checked:dark:bg-slate-600 rounded-3xl">En</span>
                                <span className="px-1 py-0.5 rounded-r-3xl bg-slate-600 peer-checked:bg-teal-500 dark:bg-slate-600 peer-checked:dark:bg-teal-500 rounded-3xl">Es</span>
                            </label>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;