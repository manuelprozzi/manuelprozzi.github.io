import { useTranslation } from 'react-i18next';
import { Website } from './Website';
const Portfolio = () => {

    const { t } = useTranslation();

    return (
        <div className='flex flex-col md:grid md:grid-cols-2 xl:grid-cols-3 md:grid-flow-row'>
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