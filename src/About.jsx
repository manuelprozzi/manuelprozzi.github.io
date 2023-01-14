import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Suspense } from 'react';

const About = () => {

    const { t, i18n } = useTranslation();

    return (
        <div className="home">
            <div className="home-list">
                <h2>{t('about_experience')}</h2>
                <div className="list">
                    <h2>{t('about_experience_1_title')}</h2>
                    <p>{t('about_experience_1_description')}</p>
                </div>
            </div>
            <div className="home-list">
                <h2>{t('about_skills')}</h2>
                <div className="list">
                    <h2>{t('about_skills_1_title')}</h2>
                    <p>{t('about_skills_1_description')}</p>
                </div>
                <div className="list">
                    <h2>{t('about_skills_2_title')}</h2>
                    <p>{t('about_skills_2_description')}</p>
                </div>
                <div className="list">
                    <h2>{t('about_skills_3_title')}</h2>
                    <p>{t('about_skills_3_description')}</p>
                </div>
            </div>
            <div className="home-list">
                <h2>{t('about_studies')}</h2>
                <div className="list">
                    <h2>{t('about_studies_1_title')}</h2>
                    <p>{t('about_studies_1_description')}</p>
                </div>
                <div className="list">
                    <h2>{t('about_studies_2_title')}</h2>
                    <p>{t('about_studies_2_description')}</p>
                </div>
            </div>
        </div>
    );
}

export default About;