import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import i18next from "i18next";
import MenuButton from "./MenuButton";

const Topbar = () => {
  /* Translation */
  const { t } = useTranslation();

  const [checked, setChecked] = useState(false);
  const handleChange = () => {
    setChecked(!checked);
    checked ? i18next.changeLanguage("en") : i18next.changeLanguage("es");
  };

  /* Menu */

  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
    console.log(clicked);
  };

  return (
    <nav className="relative mb-3 flex flex-wrap items-center justify-between bg-teal-900 px-2 py-3 text-teal-300 shadow-xl dark:bg-slate-900">
      <div className="container mx-auto flex flex-wrap items-center justify-between px-4">
        <div className="relative flex w-full justify-between lg:static lg:block lg:w-auto lg:justify-start">
          <NavLink
            to="/"
            className="mr-4 inline-block whitespace-nowrap py-2 text-xl leading-relaxed"
          >
            <h1 className="text-2xl">{t("navbar_title")}</h1>
          </NavLink>
          <button
            className="block cursor-pointer rounded border border-solid border-transparent bg-transparent px-3 py-1 text-xl leading-none outline-none focus:outline-none lg:hidden"
            type="button"
          >
            <MenuButton clicked={clicked} handleClick={handleClick} />
          </button>
        </div>
        <div
          className={
            "flex-grow items-center lg:flex" + (clicked ? " flex" : " hidden")
          }
          id="example-navbar-danger"
        >
          <ul className="flex list-none flex-col text-xl lg:ml-auto lg:flex-row">
            <li>
              <label
                for="switch"
                className="my-1.5 mx-1.5 inline-flex cursor-pointer select-none rounded-3xl bg-slate-600 text-slate-800 dark:text-slate-800 sm:mx-2.5 "
                onChange={handleChange}
              >
                <input id="switch" type="checkbox" className="peer hidden" />
                <span className="rounded-3xl rounded-l-3xl bg-teal-500 px-1 py-0.5 peer-checked:bg-slate-600 dark:bg-teal-500 peer-checked:dark:bg-slate-600">
                  En
                </span>
                <span className="rounded-3xl rounded-r-3xl bg-slate-600 px-1 py-0.5 peer-checked:bg-teal-500 dark:bg-slate-600 peer-checked:dark:bg-teal-500">
                  Es
                </span>
              </label>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Topbar;
