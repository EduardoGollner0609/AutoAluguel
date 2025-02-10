import { NavLink } from 'react-router-dom';
import './styles.css';
import { AutomobileDTO } from '../../models/automobile';

type Props = {
    automobile: AutomobileDTO
}

export default function CatalogCard({ automobile }: Props) {
    return (
        <NavLink to={`/automobile-details/${automobile.id}`}>
            <div className="catalog-card card">
                <div className="catalog-card-top">
                    <img src={automobile.imgUrl} alt="" />
                </div>
                <div className="catalog-card-bottom">
                    <h3>{`${automobile.model.name} ${automobile.year}`}</h3>
                    <div className="catalog-card-bottom-details">
                        <p>Marca: {automobile.model.brand.name}</p>
                        <p>Placa: {automobile.plate}</p>
                        <p>Color: {automobile.color}</p>
                        <p>KM: {automobile.km}</p>
                        <p>Valor: R$ {automobile.valuePerDay.toFixed(2)}</p>
                        {
                            automobile.returned ? <p>Disponivel</p>
                                :
                                <p>indisponivel</p>
                        }
                    </div>
                </div>
            </div>
        </NavLink>
    );
}