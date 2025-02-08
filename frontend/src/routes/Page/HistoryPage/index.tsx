import LocationCard from '../../../components/LocationCard';
import './styles.css';

export default function HistoryPage() {
    return (
        <section id="history-page-section" className="container">
            <div className="history-page-top top-title">
                <h1>Histórico de locações</h1>
            </div>
            <div className="history-page-location-cards">
                <LocationCard />
                <LocationCard />
                <LocationCard />
                <LocationCard />
                <LocationCard />
                <LocationCard />
            </div>
        </section>
    );
}