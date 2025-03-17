import { FC } from 'react';
import './serviceCart.scss';
import { ourServiceData } from '../../types';


export const ServiceCart: FC<ourServiceData> = ({ id, title, description }) => {
    return (
        <div className="card">
            <div className="order row">
                <div className='order__number'>{id}</div>
                <div className='order__line'></div>
            </div>

            <div className='description'>
                <h2 className='description_title'>{title}</h2>
                <p className='description_text'>{description}</p>
            </div>
        </div>
    );
}

