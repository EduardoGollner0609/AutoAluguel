import { useEffect, useState } from 'react';
import LocationCard from '../../../components/LocationCard';
import './styles.css';
import { LocationDTO } from '../../../models/location';
import * as locationService from '../../../services/location-service';
import ButtonNextPage from '../../../components/ButtonNextPage';

export default function HistoryPage() {

    const [locations, setLocations] = useState<LocationDTO[]>([]);

    const [numberPage, setNumberPage] = useState<number>(0);
    const [isLastPage, setIsLastPage] = useState(false);


    useEffect(() => {
        locationService.findAll(numberPage).then(response => {
            const nextPage = response.data.content;
            setLocations(locations.concat(nextPage))
            setIsLastPage(response.data.last);
        })
    }, [numberPage]);

    function handleNextPageClick() {
        setNumberPage(numberPage + 1);
    }

    return (
        <section id="history-page-section" className="container">
            <div className="history-page-top top-title">
                <h1>Histórico de locações</h1>
            </div>
            <div className="history-page-location-cards">
                {
                    locations.map(location => (<LocationCard key={location.id} locationProps={location}/>))
                }
            </div>
            {
                !isLastPage && <ButtonNextPage onNextPage={handleNextPageClick} />
            }
        </section>
    );
}