import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Suspense } from 'react';

const Contact = () => {

    const { t, i18n } = useTranslation();

    return (
        <div className="contact">
        <h2>{t('contact_title')}</h2>
        <div className="list">
            <h2>{t('contanct_item_1')}</h2>
            <p><a href="https://github.com/manuelprozzi/">{t('contanct_item_1_adress')}</a></p>
        </div>
        <div className="list">
            <h2>{t('contanct_item_2')}</h2>
            <p>{t('contanct_item_2_adress')}</p>
        </div>
    </div>
    );
}
 
export default Contact;