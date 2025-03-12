import './styles.css';
import { useEffect, useState } from 'react';
import { AutomobileDTO } from '../../../models/automobile';
import * as automobileService from '../../../services/automobile-service';
import { useNavigate, useParams } from 'react-router-dom';
import AutomobileDetailsCard from '../../../components/AutomobileDetailsCard';
import LocationRegisterCard from '../../../components/LocationRegisterCard';
import { CardError } from '../../../components/CardError';
import loadingIcon from '../../../assets/spinner-loading-icon.svg';

export default function AutomobileDetails() {

    const navigate = useNavigate();

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

    function handleDeleteClick(id: number) {
        automobileService.deleteById(id).then(() => {
            navigate("/");
        }).catch(error => {
            setErrorMessage(error.response.data.message);
        }
        )
    }

    return (
        <section id="automobile-details-section" className="container">
            {
                automobile ? <AutomobileDetailsCard rentFunction={handleRentClick} automobile={automobile} deleteFunction={handleDeleteClick} />
                    :
                    <div className="automobile-details-loading">
                        <img src={loadingIcon} alt="" />
                    </div>
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