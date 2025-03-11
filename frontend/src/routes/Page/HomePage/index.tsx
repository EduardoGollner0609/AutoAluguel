import { useEffect, useState } from 'react';
import CatalogCard from '../../../components/CatalogCard';
import './styles.css';
import { AutomobileDTO } from '../../../models/automobile';
import * as automobileService from '../../../services/automobile-service';
import { Link } from 'react-router-dom';
import loadingIcon from '../../../assets/spinner-loading-icon.svg';

export default function HomePage() {

    const [automobiles, setAutomobiles] = useState<AutomobileDTO[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [automobilesIsEmpty, setAutomobileIsEmpty] = useState<boolean>(false);

    useEffect(() => {
        setLoading(true);
        automobileService.findAllOrderByReturned().then(
            response => {
                setAutomobiles(response.data);
                setLoading(false);
                if (automobiles.length === 0) {
                    setAutomobileIsEmpty(true);
                }
            }
        )
    }, []);

    return (
        <section id="home-page-section" className="container">
            <div className="home-page-welcome top-title">
                <h2>Seja muito bem vindo</h2> <Link to="/automobile-register"> + Adicionar automóvel</Link>
            </div>
            {
                automobiles.length > 0 &&
                <div className="home-page-catalog-cards">
                    {
                        automobiles.map(
                            automobile => (<CatalogCard key={automobile.id} automobile={automobile} />)
                        )
                    }
                </div>

            }
            {
                (automobiles.length <= 0 && !loading && automobilesIsEmpty) &&
                <div className="catalog-isempty">
                    <h3>Nenhum veiculo cadastro</h3>
                </div>
            }
            {

                loading &&
                <div className="loading-catalog-list">
                    <img src={loadingIcon} alt="" />
                </div>
            }
        </section >
    );
}