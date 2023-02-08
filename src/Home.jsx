import { useTranslation } from "react-i18next";
import Portfolio from "./Portfolio";

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center">
      <div className="lg:max-w-6xl">
        <div className="mr-5 ml-5 mt-5 rounded-2xl bg-teal-400 p-5">
          <img
            className="float-left m-4 h-28 w-28 rounded-full"
            src="profile.jpg"
            alt=""
          />
          <p className="p-4 text-md text-justify tracking-tight">
            {t("home_text_1")}
          </p>
          <p className="px-4 pb-4 text-md text-justify tracking-tight sm:hidden">{t("home_text_2")}</p>
          <p className="p-4 text-md hidden text-justify tracking-tight sm:block">
          {t("home_text_3")}
          </p>
          <div className="rounded-2xl bg-slate-800 text-white">
            <div className="py-5 px-8">
              <h2 className="text-2xl">{t("contact_title")}</h2>
              <h2 className="text-lg">GitHub</h2>
              <p>
                <a href="https://github.com/manuelprozzi/">
                https://github.com/manuelprozzi/
                </a>
              </p>
              <h2 className="text-lg">Email</h2>
              <a href="mailto:manuelprozzi@gmail.com">
                <p>manuelprozzi@gmail.com</p>
              </a>
            </div>
          </div>
        </div>
        <div className="hidden sm:block">
          <Portfolio />
        </div>
      </div>
    </div>
  );
};

export default Home;
