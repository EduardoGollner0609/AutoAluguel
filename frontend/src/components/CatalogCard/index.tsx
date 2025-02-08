import { NavLink } from 'react-router-dom';
import './styles.css';

export default function CatalogCard() {
    return (
        <NavLink to="/automobile-details">
            <div className="catalog-card card">
                <div className="catalog-card-top">
                    <img src="https://tribunademinas.com.br/wp-content/uploads/2023/07/projecao-chevrolet-spin-2025-tudo-de-carro.jpg" alt="" />
                </div>
                <div className="catalog-card-bottom">
                    <h3>Spin 2025</h3>
                    <div className="catalog-card-bottom-details">
                        <p>Placa: ssej2093</p>
                        <p>KM: 200.0</p>
                        <p>disponivel</p>
                    </div>
                </div>
            </div>
        </NavLink>
    );
}