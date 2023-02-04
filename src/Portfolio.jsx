import { useTranslation } from 'react-i18next';
import { Website } from './Website';
const Portfolio = () => {

    const { t } = useTranslation();

    return (
        <div className='flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:grid-flow-row gap-5 mt-5'>
            <Website title='Ecomm' source='#1'/>
            <Website title='Reciple blog' source='#2'/>
            <Website title='Third site' source='#3'/>
            <Website title='Third site' source='#3'/>
            <Website title='Third site' source='#3'/>
            <Website title='Third site' source='#3'/>
            <Website title='Third site' source='#3'/>
            <Website title='Third site' source='#3'/>
            <Website title='Third site' source='#3'/>
            <Website title='Third site' source='#3'/>
            <Website title='Third site' source='#3'/>
            <Website title='Third site' source='#3'/>
        </div>
    );
}

export default Portfolio;