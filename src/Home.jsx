import { useTranslation } from 'react-i18next';

const Home = () => {

    const { t } = useTranslation();

    return (
        <div>
            <h1 className='text-2xl'>{t('home_title')}</h1>
            <p className='text-lg m-5'>{t('home_text')}</p>
        </div>
    );
}

export default Home;