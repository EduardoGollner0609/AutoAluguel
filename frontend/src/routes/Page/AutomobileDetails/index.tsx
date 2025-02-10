import { useEffect, useState } from 'react';
import { AutomobileDTO } from '../../../models/automobile';
import * as automobileService from '../../../services/automobile-service';
import { useParams } from 'react-router-dom';
import AutomobileDetailsCard from '../../../components/AutomobileDetailsCard';

export default function AutomobileDetails() {

    const params = useParams();

    const [automobile, setAutomobile] = useState<AutomobileDTO>();

    useEffect(() => {
        automobileService.findById(Number(params.automobileId)).then(response => {
            setAutomobile(response.data);
        })
    }, []);

    return (
        <section id="automobile-details-section" className="container">
            {
                automobile && <AutomobileDetailsCard automobile={automobile} />
            }
        </section>
    );
}