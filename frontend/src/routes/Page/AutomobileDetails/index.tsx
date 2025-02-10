import './styles.css'
import { useEffect, useState } from 'react';
import { AutomobileDTO } from '../../../models/automobile';
import * as automobileService from '../../../services/automobile-service';
import { useParams } from 'react-router-dom';

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
            <div className="automobile-details-card">
                <div className="automobile-details-card-top">
                    <img src={automobile?.imgUrl} alt="" />
                    <h2>{automobile?.model.name} {automobile?.year}</h2>
                </div>
                <div className="automobile-details-bottom">
                    <div className="automobile-details-bottom-left">
                        <h3>Descrições</h3>
                        <p>Placa: {automobile?.plate}</p>
                        <p>Km: {automobile?.km}</p>
                        <p>Valor por dia: R${automobile?.valuePerday.toFixed(2)}</p>
                        {
                            automobile?.returned ?
                                <p className="automobile-details-returned-true">
                                    Disponivel
                                </p>
                                :
                                <p className="automobile-details-returned-false">
                                    indisponivel
                                </p>
                        }
                    </div>
                    <div className="automobile-details-bottom-right">
                        <div className="automobile-details-btns">
                            <button className="automobile-details-btn">
                                Alugar
                            </button>
                            <button className="automobile-details-btn">
                                Editar
                            </button>
                            <button className="automobile-details-btn">
                                Excluir
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}