import './styles.css';
import checkLocationIcon from '../../assets/check-location-icon.svg';
import { useState } from 'react';
import { LocationDTO } from '../../models/location';

type Props = {
    location: LocationDTO
}

export default function LocationCard({ location }: Props) {

    const [chekedConfirm, setCheckedConfirm] = useState(false);

    function handleCheckedConfirmnClick() {
        setCheckedConfirm(true);
    }

    return (
        <div className="location-card card">

            <div className="location-card-automobile-details">
                <img src={location.automobile.imgUrl} alt="" />
                <h3>{`${location.automobile.model.brand.name} ${location.automobile.model.name} ${location.automobile.year}`}</h3>
            </div>
            <div className="location-card-location-details">
                <p>Placa: {location.automobile.plate}</p>
                <p>{location.rentalDate} - {location.returnDate}</p>
                <p>{location.client.name}</p>
                <p>Valor Total: R$ {location.value}</p>
            </div>
            <div className="location-check-confirm">
                {
                    !chekedConfirm ?
                        <div className="location-check-confirm-box" onClick={handleCheckedConfirmnClick}>
                            <p>Devolver</p>
                        </div>
                        :
                        <div className="location-checked-confirm-box">
                            <img src={checkLocationIcon} alt="" />
                            <p>Devolvido</p>
                        </div>
                }

            </div>

        </div>
    );
}