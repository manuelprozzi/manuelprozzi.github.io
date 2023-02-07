import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import i18next from "i18next";

const Navbar = () => {
  /* Translation */
  const { t } = useTranslation();

  return (
    <nav className="hidden w-full sm:block">
      <ul className="m-auto mt-5 mb-5 flex w-full justify-between sm:max-w-3xl lg:max-w-6xl">
        <li className="ml-5 mr-5">
          <NavLink
            to="/"
            className="rounded-full bg-slate-800 p-2 text-teal-300 dark:bg-teal-400 dark:text-slate-800"
          >
            {t("navbar_home")}
          </NavLink>
        </li>
        <li className="ml-5 mr-5">
          <NavLink
            to="/portfolio"
            className="rounded-full bg-slate-800 p-2 text-teal-300 dark:bg-teal-400 dark:text-slate-800"
          >
            Portfolio
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
