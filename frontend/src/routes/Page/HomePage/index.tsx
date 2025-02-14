import { useEffect, useState } from 'react';
import CatalogCard from '../../../components/CatalogCard';
import './styles.css';
import { AutomobileDTO } from '../../../models/automobile';
import * as automobileService from '../../../services/automobile-service';
import { Link } from 'react-router-dom';

export default function HomePage() {

    const [automobiles, setAutomobiles] = useState<AutomobileDTO[]>([]);

    useEffect(() => {
        automobileService.findAllOrderByReturned().then(
            response => {
                setAutomobiles(response.data);
            }
        )
    }, []);

    return (
        <section id="home-page-section" className="container">
            <div className="home-page-welcome top-title">
                <h1>Seja muito bem vindo</h1> <Link to="/automobile-register"> + Adicionar automóvel</Link>
            </div>
            <div className="home-page-catalog-cards">
                {
                    automobiles.map(
                        automobile => (<CatalogCard key={automobile.id} automobile={automobile} />)
                    )
                }
            </div>
        </section>
    );
}