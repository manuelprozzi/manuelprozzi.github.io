import { useTranslation } from 'react-i18next';
const Contact = () => {

    const { t } = useTranslation();

    return (
        <div>
            <h2 className='text-2xl'>{t('contact_title')}</h2>
            <div className='m-5'>
                <h2 className='text-lg '>{t('contanct_item_1')}</h2>
                <p><a href="https://github.com/manuelprozzi/">{t('contanct_item_1_adress')}</a></p>
                <h2 className='text-lg'>{t('contanct_item_2')}</h2>
                <a href="mailto:manuelprozzi@gmail.com">
                    <p>{t('contanct_item_2_adress')}</p>
                </a>
            </div>
        </div>
    );
}

export default Contact;