import { useEffect, useState } from 'react';
import LocationCard from '../../../components/LocationCard';
import './styles.css';
import { LocationDTO } from '../../../models/location';
import * as locationService from '../../../services/location-service';
import ButtonNextPage from '../../../components/ButtonNextPage';
import loadingIcon from '../../../assets/spinner-loading-icon.svg';

export default function HistoryPage() {

    const [locations, setLocations] = useState<LocationDTO[]>([]);

    const [numberPage, setNumberPage] = useState<number>(0);
    const [isLastPage, setIsLastPage] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const [locationsIsEmpty, setLocationsIsEmpty] = useState<boolean>(false);

    useEffect(() => {
        setLoading(true);
        locationService.findAll(numberPage).then(response => {
            const nextPage = response.data.content;
            setLocations(locations.concat(nextPage))
            setIsLastPage(response.data.last);
            setLoading(false);
            if (locations.length === 0) {
                setLocationsIsEmpty(true);
            }
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
                    locations.length > 0 &&
                    locations.map(location => (<LocationCard key={location.id} locationProps={location} />))
                }
                {
                    (locations.length <= 0 && !loading && locationsIsEmpty) &&
                    <div className="location-list-isempty">
                        <h3>Não existem locações.</h3>
                    </div>
                }
                {
                    loading &&
                    <div className="loading-locations-list">
                        < img src={loadingIcon} />
                    </div>
                }
            </div>
            {
                (locations.length > 0 && !isLastPage && !loading) && <ButtonNextPage onNextPage={handleNextPageClick} />
            }
        </section>
    );
}