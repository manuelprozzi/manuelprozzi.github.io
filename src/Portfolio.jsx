import { useTranslation } from "react-i18next";
import { Website } from "./Website";
const Portfolio = () => {
  const { t } = useTranslation();

  return (
    <div className="mt-5 mb-5 flex flex-col gap-5 sm:grid sm:grid-flow-row sm:grid-cols-2 lg:grid-cols-3">
      <Website title="Ecommerce" link="https://github.com/manuelprozzi/ecomm" img="ecomm.png"/>
      <Website title="Tailwind CSS" link="https://github.com/manuelprozzi/twfood" img="tailwind.png"/>
      <Website title="React Router" link="https://github.com/manuelprozzi/jobrouter" img="jobrouter.png"/>
      <Website title="Other Ecommerce (Es)" link="https://github.com/LucianoFabrizio/grupo_11_StationGame" img="digitalhouse.png"/>
      <Website title="Old Portfolio" link="https://github.com/manuelprozzi/oldportfolio" img="oldportfolio.png"/>
    </div>
  );
};

export default Portfolio;
