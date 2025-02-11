import { Link } from 'react-router-dom';
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
                    <Link to="/user-register">Cliente não tem cadastro</Link>
                </div>

            </div>
        </>

    );
}