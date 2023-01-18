import { useTranslation } from 'react-i18next';
const Contact = () => {

    const { t } = useTranslation();

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