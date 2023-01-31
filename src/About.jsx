import { useTranslation } from 'react-i18next';

const About = () => {

    const { t } = useTranslation();

    return (
        <div>
            <div>
                <h2 className='text-2xl'>{t('about_experience')}</h2>
                <div className='m-5'>
                    <h2 className='text-lg'>{t('about_experience_1_title')}</h2>
                    <p className='text-base'>{t('about_experience_1_description')}</p>
                </div>
            </div>
            <div>
                <h2 className='text-2xl'>{t('about_skills')}</h2>
                <div className='m-5'>
                    <h2 className='text-lg'>{t('about_skills_1_title')}</h2>
                    <p className='text-base'>{t('about_skills_1_description')}</p>
                </div>
                <div className='m-5'>
                    <h2 className='text-lg'>{t('about_skills_2_title')}</h2>
                    <p className='text-base'>{t('about_skills_2_description')}</p>
                </div>
                <div className='m-5'>
                    <h2 className='text-lg'>{t('about_skills_3_title')}</h2>
                    <p className='text-base'>{t('about_skills_3_description')}</p>
                </div>
            </div>
            <div>
                <h2 className='text-2xl'>{t('about_studies')}</h2>
                <div className='m-5'>
                    <h2 className='text-lg'>{t('about_studies_1_title')}</h2>
                    <p className='text-base'>{t('about_studies_1_description')}</p>
                </div>
                <div className='m-5'>
                    <h2 className='text-lg'>{t('about_studies_2_title')}</h2>
                    <p className='text-base'>{t('about_studies_2_description')}</p>
                </div>
            </div>
        </div>
    );
}

export default About;