import './styles.css';

type Props = {
    message: string,
    totalValue?: number
    closeCard: () => void
}
export function CardSucess({ message, totalValue, closeCard }: Props) {
    return (
        <>
            <div className="card-sucess-background" onClick={closeCard}>
            </div>
            <div className="card-sucess">
                <h2>{message} com sucesso!</h2>
                {
                    totalValue && <p>O valor total da locação é de R$ {totalValue.toFixed(2)}</p>
                }
                <button onClick={closeCard}>Fechar</button>
            </div>
        </>

    );
}