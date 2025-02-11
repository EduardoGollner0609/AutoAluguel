import './styles.css';

type Props = {
    rentCardVisible: () => void
}
export default function LocationRegisterCard({ rentCardVisible }: Props) {

    return (
        <>
            <div className="location-register-card-background" onClick={rentCardVisible}>
            </div>
            <div className="location-register-card">
                <h2>Alugar</h2>
                <div className="location-register-card-search">
                    <label>Digite um CPF</label>
                    <input type="text" placeholder='Digite um CPF' />
                    <button>Buscar</button>
                </div>
                <div className="location-register-card-invite-register-client">
                <a href="">Cliente não tem cadastro</a>
                </div>
           
            </div>
        </>

    );
}