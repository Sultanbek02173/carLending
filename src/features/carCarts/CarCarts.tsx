import { FC } from "react";
import './carCarts.scss';

interface CarCartsProps {
    id: number;
    img: string;
    description: string;
}

export const CarCarts: FC<CarCartsProps> = ({ img, description }) => {
    return (
        <div className='car'>
            <img src={img} />

            <div className='car__text row'>
                <p>{description}</p>
                <button>Order</button>
            </div>
        </div>
    );
}

