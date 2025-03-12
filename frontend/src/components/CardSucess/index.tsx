import { useNavigate } from 'react-router-dom';
import './styles.css';

type Props = {
    message: string,
    totalValue: number
    closeCard: () => void
}
export function CardSucess({ message, totalValue, closeCard }: Props) {

    const navigate = useNavigate();

    function navigateToHome() {
        navigate("/");
    }

    return (
        <>
            <div className="card-sucess-background" onClick={closeCard}>
            </div>
            <div className="card-sucess">
                <h2>{message} com sucesso!</h2>
                {
                    totalValue > 0 &&
                    <p>O valor total da locação é de R$ {totalValue.toFixed(2)}</p>
                }
                <div className="card-sucess-btns">
                    <button onClick={navigateToHome}>Inicio</button>
                    <button onClick={closeCard}>Fechar</button>

                </div>
            </div>
        </>

    );
}