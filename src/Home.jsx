import { useTranslation } from 'react-i18next';

const Home = () => {

    const { t } = useTranslation();

    return (
        <div>
            
            <p className='text-lg m-5'>{t('home_text')}</p>
        </div>
    );
}

export default Home;