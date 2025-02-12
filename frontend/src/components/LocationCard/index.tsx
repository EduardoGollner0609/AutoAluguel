import './styles.css';
import checkLocationIcon from '../../assets/check-location-icon.svg';
import { useState } from 'react';
import { LocationDTO } from '../../models/location';
import { format } from 'date-fns';
import * as locationService from '../../services/location-service';
import { CardSucess } from '../CardSucess';

type Props = {
    locationProps: LocationDTO
}

export default function LocationCard({ locationProps }: Props) {

    const [location, setLocation] = useState<LocationDTO>(locationProps);

    const [chekedConfirm, setCheckedConfirm] = useState(location.returnDate ? true : false);

    const [cardDevolutionSucessVisible, setCardDevolutionSucessVisible] = useState<boolean>(false);

    function handleCheckedConfirmnClick() {

        locationService.update(location).then(response => {
            setCheckedConfirm(true);
            setLocation(response.data);
            setCardDevolutionSucessVisible(true);
        });

    }

    function formatDate(date: string) {
        return format(date, 'dd/MM/yyyy HH:mm')
    }

    return (
        <div className="location-card card">

            <div className="location-card-automobile-details">
                <img src={location.automobile.imgUrl} alt="" />
                <h3>{`${location.automobile.model.brand.name} ${location.automobile.model.name} ${location.automobile.year}`}</h3>
            </div>
            <div className="location-card-location-details">
                <p>Placa: {location.automobile.plate}</p>
                <p>Data de locação: {formatDate(location.rentalDate)} </p>
                {
                    location.returnDate && <p>Data de entrega: {formatDate(location.returnDate)}</p>
                }
                <p>Cliente: {location.client.name}</p>
                {
                    location.value && <p>Valor Total: R$ {location.value}</p>
                }

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
            {
                cardDevolutionSucessVisible && <CardSucess message="Devolvido" totalValue={location.value} closeCard={() => setCardDevolutionSucessVisible(false)} />
            }
        </div>

    );
}