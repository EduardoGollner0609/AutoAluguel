import './styles.css'
import { AutomobileDTO } from "../../models/automobile";
import { useNavigate } from 'react-router-dom';

type Props = {
    automobile: AutomobileDTO,
    rentFunction: () => void,
    deleteFunction: (id: number) => void
}

export default function AutomobileDetailsCard({ automobile, rentFunction, deleteFunction }: Props) {

    const navigate = useNavigate();

    function updateFunction(id: number) {
        navigate(`/automobile-register/${id}`)
    }

    return (
        <div className="automobile-details-card">
            <div className="automobile-details-card-top">
                <img src={automobile.imgUrl} alt="" />
                <h2>{`${automobile.model.brand.name} ${automobile.model.name} ${automobile.year}`}</h2>
            </div>
            <div className="automobile-details-bottom">
                <div className="automobile-details-bottom-left">
                    <h3>Descrições</h3>
                    <p>Marca: {automobile.model.brand.name}</p>
                    <p>Placa: {automobile.plate}</p>
                    <p>Km: {automobile.km}</p>
                    <p>Valor por dia: R${automobile.valuePerDay.toFixed(2)}</p>
                    {
                        automobile.returned ?
                            <p className="automobile-returned-true">
                                Disponivel
                            </p>
                            :
                            <p className="automobile-returned-false">
                                Indisponivel
                            </p>
                    }
                </div>
                <div className="automobile-details-bottom-right">
                    <div className="automobile-details-btns">
                        <button className="automobile-details-btn" onClick={rentFunction}>
                            Alugar
                        </button>
                        <button className="automobile-details-btn" onClick={() => updateFunction(automobile.id)}>
                            Editar
                        </button>
                        <button className="automobile-details-btn" onClick={() => deleteFunction(automobile.id)}>
                            Excluir
                        </button>

                    </div>
                </div>
            </div>
        </div>
    );
}