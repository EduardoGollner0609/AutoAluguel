import './styles.css'

export default function AutomobileDetails() {

    const disponibilidade = true;
    return (
        <section id="automobile-details-section" className="container">
            <div className="automobile-details-card">
                <div className="automobile-details-card-top">
                    <img src="https://tribunademinas.com.br/wp-content/uploads/2023/07/projecao-chevrolet-spin-2025-tudo-de-carro.jpg" alt="" />
                    <h2>Spin 2025</h2>
                </div>
                <div className="automobile-details-bottom">
                    <div className="automobile-details-bottom-left">
                        <h3>Descrições</h3>
                        <p>Placa: ffff2222</p>
                        <p>Ano: 2025</p>
                        <p>Km: 200</p>
                        <p>Valor por dia: R$200,00</p>
                        <p className={disponibilidade ? "automobile-details-returned-true" : "automobile-details-returned-false"}>Disponivel</p>
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