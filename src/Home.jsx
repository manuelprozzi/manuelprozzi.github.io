import { useTranslation } from 'react-i18next';
import Portfolio from './Portfolio';

const Home = () => {

    const { t } = useTranslation();

    return (
        <div className='bg-teal-500 rounded-2xl h-full'>
            <img className='rounded-full float-left h-28 w-28 mx-4 my-3' src="profile.jpg" alt="" />
            <p className='text-lg mx-5'>{t('home_text')}</p>
            <div className='text-lg m-5'>
                <h1>{t('about_experience')}</h1>
                <p>
                    {t('about_experience_1_title')} {t('about_experience_1_description')}
                </p>

                <h1>{t('about_studies')}</h1>
                <p>
                    {t('about_studies_2_title')} {t('about_studies_2_description')}
                </p>
            </div>
            <div className='bg-slate-800 text-white rounded-2xl m-5'>
                <div className=' py-5 px-8'>
                    <h2 className='text-2xl'>{t('contact_title')}</h2>
                    <h2 className='text-lg'>{t('contanct_item_1')}</h2>
                    <p><a href="https://github.com/manuelprozzi/">{t('contanct_item_1_adress')}</a></p>
                    <h2 className='text-lg'>{t('contanct_item_2')}</h2>
                    <a href="mailto:manuelprozzi@gmail.com">
                        <p>{t('contanct_item_2_adress')}</p>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Home;