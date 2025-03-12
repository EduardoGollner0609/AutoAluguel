import './styles.css';
import checkLocationIcon from '../../assets/check-location-icon.svg';
import { useState } from 'react';
import { LocationDTO } from '../../models/location';
import { format } from 'date-fns';
import * as locationService from '../../services/location-service';
import { CardSucess } from '../CardSucess';
import loadingIcon from '../../assets/spinner-loading-icon.svg';

type Props = {
    locationProps: LocationDTO
}

export default function LocationCard({ locationProps }: Props) {

    const [location, setLocation] = useState<LocationDTO>(locationProps);

    const [chekedConfirm, setCheckedConfirm] = useState(location.returnDate ? true : false);

    const [loading, setLoading] = useState<boolean>(false);

    const [cardMessageSucessVisisble, setCardMessageSucessVisisble] = useState({
        message: '',
        totalValue: 0
    });

    const [removeSucess, setRemoveSucess] = useState<boolean>(false);

    function handleCheckedConfirmnClick() {

        setLoading(true);

        locationService.update(location).then(response => {
            setLoading(false);
            setCheckedConfirm(true);
            const newLocation: LocationDTO = response.data;
            setLocation(newLocation);
            setCardMessageSucessVisisble({
                message: "Devolvido",
                totalValue: newLocation.value
            });
        });

    }

    function formatDate(date: string) {
        return format(date, 'dd/MM/yyyy HH:mm')
    }

    function deleteLocation() {
        setLoading(true);
        locationService.deleteLocation(location.id).then(() => {
            setLoading(false);
            setCardMessageSucessVisisble({
                message: "Removido",
                totalValue: 0
            });
            setRemoveSucess(true);
        })
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
                        !loading ?
                            !removeSucess ?
                                <div className="location-checked-space">
                                    <div className="location-checked-confirm-box">
                                        <img src={checkLocationIcon} alt="" />
                                        <p>Devolvido</p>
                                    </div>
                                    <div className="location-remove" onClick={deleteLocation}>
                                        <h2>X</h2>
                                        <p>Remover</p>
                                    </div>
                                </div>
                                :
                                <div className="location-remove-sucess">
                                    <p>Removido</p>
                                </div>
                            :
                            <div className="location-card-loading">
                                <img src={loadingIcon} alt="" />
                            </div>

                }
            </div>
            {
                (cardMessageSucessVisisble.message && cardMessageSucessVisisble.totalValue === 0) && <CardSucess {...cardMessageSucessVisisble} closeCard={() => setCardMessageSucessVisisble({
                    message: '',
                    totalValue: 0
                })} />
            }
            {
                cardMessageSucessVisisble.totalValue > 0 && <CardSucess {...cardMessageSucessVisisble} closeCard={() => setCardMessageSucessVisisble({
                    message: '',
                    totalValue: 0
                })} />
            }
        </div>

    );
}