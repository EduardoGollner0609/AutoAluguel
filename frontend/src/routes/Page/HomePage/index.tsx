import CatalogCard from '../../../components/CatalogCard';
import './styles.css';

export default function HomePage() {
    return (
        <section id="home-page-section" className="container">
            <div className="home-page-welcome">
                <h1>Seja muito bem vindo</h1>
            </div>
            <div className="home-page-catalog-cards">
                <CatalogCard/>
                <CatalogCard/>
                <CatalogCard/>
                <CatalogCard/>
                <CatalogCard/>
                <CatalogCard/>
            </div>
        </section>
    );
}