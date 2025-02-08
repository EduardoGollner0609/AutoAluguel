import './styles.css';
import checkLocationIcon from '../../assets/check-location-icon.svg';
import { useState } from 'react';

export default function LocationCard() {

    const [chekedConfirm, setCheckedConfirm] = useState(false);

    function handleCheckedConfirmnClick() {
        setCheckedConfirm(true);
    }

    return (
        <div className="location-card card">

            <div className="location-card-automobile-details">
                <img src="https://tribunademinas.com.br/wp-content/uploads/2023/07/projecao-chevrolet-spin-2025-tudo-de-carro.jpg" alt="" />
                <h3>Spin 2025</h3>
            </div>
            <div className="location-card-location-details">
                <p>Placa: 22ddd2</p>
                <p>06/02/2025 - 12/04/2025</p>
                <p>Ricardo Nunes São Paole</p>
                <p>Valor Total: R$ 700</p>
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