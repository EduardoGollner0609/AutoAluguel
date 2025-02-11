import { useEffect, useState } from 'react';
import { AutomobileDTO } from '../../../models/automobile';
import * as automobileService from '../../../services/automobile-service';
import { useParams } from 'react-router-dom';
import AutomobileDetailsCard from '../../../components/AutomobileDetailsCard';
import LocationRegisterCard from '../../../components/LocationRegisterCard';

export default function AutomobileDetails() {

    const params = useParams();

    const [automobile, setAutomobile] = useState<AutomobileDTO>();
    const [rentCardVisible, setRentCardVisible] = useState<boolean>(false);

    useEffect(() => {
        automobileService.findById(Number(params.automobileId)).then(response => {
            setAutomobile(response.data);
        })
    }, []);

    function handleRentClick() {
        setRentCardVisible(true);
    }

    function handleRentCloseClick() {
        setRentCardVisible(false);
    }
    return (
        <section id="automobile-details-section" className="container">
            {
                automobile && <AutomobileDetailsCard rentFunction={handleRentClick} automobile={automobile} />
            }
            {
                rentCardVisible && <LocationRegisterCard rentCardVisible={handleRentCloseClick} automobile={automobile}/>
            }
        </section>
    );
}