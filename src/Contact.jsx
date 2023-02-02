import { useTranslation } from 'react-i18next';
const Contact = () => {

    const { t } = useTranslation();

    return (
        <div>
            <h2 className='text-2xl'>{t('contact_title')}</h2>
            
        </div>
    );
}

export default Contact;