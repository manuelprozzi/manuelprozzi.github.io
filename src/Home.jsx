import { useTranslation } from "react-i18next";
import Portfolio from "./Portfolio";

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="m-5 flex flex-col items-center">
      <div className="border-2 border-red-500 lg:max-w-6xl">
        <div className="rounded-2xl bg-teal-500 p-5">
          <img
            className="float-left m-4 h-28 w-28 rounded-full"
            src="profile.jpg"
            alt=""
          />
          <div className="p-5 text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
            dolores sapiente aliquid blanditiis maiores esse vel praesentium
            suscipit ab, quisquam repellat? Pariatur saepe beatae temporibus
            quod inventore recusandae reprehenderit reiciendis. Lorem, ipsum
            dolor sit amet consectetur adipisicing elit. Fuga ipsa dolor
            corrupti. Quas, eum! Quasi, distinctio! Veritatis cumque aperiam
            labore molestiae, alias consequuntur provident suscipit amet ipsam
            quaerat, nesciunt ipsa.
          </div>
          <div className="rounded-2xl bg-slate-800 text-white">
            <div className="py-5 px-8">
              <h2 className="text-2xl">{t("contact_title")}</h2>
              <h2 className="text-lg">{t("contanct_item_1")}</h2>
              <p>
                <a href="https://github.com/manuelprozzi/">
                  {t("contanct_item_1_adress")}
                </a>
              </p>
              <h2 className="text-lg">{t("contanct_item_2")}</h2>
              <a href="mailto:manuelprozzi@gmail.com">
                <p>{t("contanct_item_2_adress")}</p>
              </a>
            </div>
          </div>
        </div>
        <Portfolio />
      </div>
    </div>
  );
};

export default Home;
