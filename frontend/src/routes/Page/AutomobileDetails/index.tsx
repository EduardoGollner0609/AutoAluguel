import { useEffect, useState } from 'react';
import { AutomobileDTO } from '../../../models/automobile';
import * as automobileService from '../../../services/automobile-service';
import { useParams } from 'react-router-dom';
import AutomobileDetailsCard from '../../../components/AutomobileDetailsCard';
import LocationRegisterCard from '../../../components/LocationRegisterCard';
import { CardError } from '../../../components/CardError';

export default function AutomobileDetails() {

    const params = useParams();

    const [automobile, setAutomobile] = useState<AutomobileDTO>();
    const [rentCardVisible, setRentCardVisible] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string>("");

    useEffect(() => {
        automobileService.findById(Number(params.automobileId)).then(response => {
            setAutomobile(response.data);
        })
    }, []);

    function handleRentClick() {
        if (automobile?.returned === false) {
            setErrorMessage("Automóvel indisponível para locação");
            return;
        }
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
                rentCardVisible && <LocationRegisterCard rentCardVisible={handleRentCloseClick} automobile={automobile} />
            }
            {
                errorMessage && <CardError message={errorMessage} closeCard={() => setErrorMessage("")} />
            }
        </section>
    );
}