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
                        <p>Placa: {automobile.plate}</p>
                        <p>KM: {automobile.km}</p>
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