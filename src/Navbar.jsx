import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import i18next from "i18next";
import MenuButton from "./MenuButton";

const Navbar = () => {
  /* Translation */
  const { t } = useTranslation();

  return (<nav className="w-full">
  <ul className="flex mt-5 mb-5 m-auto justify-between lg:max-w-6xl w-full">
    <li className="ml-5 mr-5">
      <NavLink
        to="/"
        className="bg-teal-500 rounded-full p-2"
      >
        {t("navbar_home")}
      </NavLink>
    </li>
    <li className="ml-5 mr-5">
      <NavLink
        to="/portfolio"
        className="bg-teal-500 rounded-full p-2"
      >
        Portfolio
      </NavLink>
    </li>
  </ul>
</nav>

  );
};

export default Navbar;
