import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import i18next from "i18next";

const Topbar = () => {
  /* Translation */
  const { t } = useTranslation();

  const [checked, setChecked] = useState(false);
  const handleChange = () => {
    setChecked(!checked);
    checked ? i18next.changeLanguage("en") : i18next.changeLanguage("es");
  };

  /* Menu */

  return (
    <nav className="z-10 flex w-full justify-between bg-teal-900 px-2 py-3 text-teal-300 shadow-xl dark:bg-slate-900">
      {/* Title */}
      <div className="">
        <NavLink to="/" className="">
          <h1 className="text-2xl">{t("navbar_title")}</h1>
        </NavLink>
      </div>
      {/* Button */}
      <div>
        <label
          for="switch"
          className="my-1.5 mx-1.5 inline-flex cursor-pointer select-none rounded-3xl bg-slate-600 text-slate-800 dark:text-slate-800 sm:mx-2.5 "
          onChange={handleChange}
        >
          <input id="switch" type="checkbox" className="peer hidden" />
          <span className="rounded-3xl rounded-l-3xl bg-teal-400 px-1 py-0.5 peer-checked:bg-slate-600 dark:bg-teal-500 peer-checked:dark:bg-slate-600">
            En
          </span>
          <span className="rounded-3xl rounded-r-3xl bg-slate-600 px-1 py-0.5 peer-checked:bg-teal-500 dark:bg-slate-600 peer-checked:dark:bg-teal-500">
            Es
          </span>
        </label>
      </div>
    </nav>
  );
};

export default Topbar;
