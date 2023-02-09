import { useTranslation } from "react-i18next";
import Portfolio from "./Portfolio";

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center">
      <div className="lg:max-w-6xl">
        <div className="mr-5 ml-5 mt-5 rounded-2xl bg-teal-400 p-5 sm:flex">
          <img
            className="float-left m-4 h-28 w-28 rounded-full sm:h-36 sm:w-36"
            src="profile.jpg"
            alt=""
          />

          <p className="text-md mx-4 text-justify tracking-tight sm:self-center sm:text-lg">
            {t("home_text_1")}
          </p>

          <p className="text-md mx-4 hidden text-justify tracking-tight sm:block sm:self-center sm:text-lg">
            {t("home_text_3")}
          </p>

          <p className="text-md p-2 pb-4 text-justify tracking-tight sm:hidden">
            {t("home_text_2")}
          </p>

          <div className="rounded-2xl bg-slate-800 text-white sm:ml-5">
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
