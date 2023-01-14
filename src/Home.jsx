import { useTranslation } from 'react-i18next';
import { Suspense } from 'react';

const Home = () => {

    const { t, i18n } = useTranslation();

    return (
        <div className="home">
            <h1>{t('home_title')}</h1>
            <p>{t('home_text')}</p>
        </div>
    );
}

export default Home;