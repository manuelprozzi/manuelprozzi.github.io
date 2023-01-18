import { useTranslation } from 'react-i18next';

const Home = () => {

    const { t } = useTranslation();

    return (
        <div className="home">
            <h1>{t('home_title')}</h1>
            <p>{t('home_text')}</p>
        </div>
    );
}

export default Home;