import { useTranslation } from "react-i18next";
import { Website } from "./Website";
const Portfolio = () => {
  const { t } = useTranslation();

  return (
    <div className="mt-5 flex flex-col gap-5 sm:grid sm:grid-flow-row sm:grid-cols-2 lg:grid-cols-3">
      <Website title="Ecomm" source="#1" />
      <Website title="Reciple blog" source="#2" />
      <Website title="Third site" source="#3" />
      <Website title="Third site" source="#3" />
      <Website title="Third site" source="#3" />
      <Website title="Third site" source="#3" />
      <Website title="Third site" source="#3" />
      <Website title="Third site" source="#3" />
      <Website title="Third site" source="#3" />
      <Website title="Third site" source="#3" />
      <Website title="Third site" source="#3" />
      <Website title="Third site" source="#3" />
    </div>
  );
};

export default Portfolio;
