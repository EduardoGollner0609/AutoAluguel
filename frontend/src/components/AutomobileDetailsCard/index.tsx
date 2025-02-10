import './styles.css'
import { AutomobileDTO } from "../../models/automobile";

type Props = {
    automobile: AutomobileDTO
}

export default function AutomobileDetailsCard({ automobile }: Props) {
    return (<div className="automobile-details-card">
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
    </div>);
}