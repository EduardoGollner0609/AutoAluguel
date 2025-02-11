import './styles.css';

type Props = {
    message: string,
    closeCard: () => void
}
export function CardSucess({ message, closeCard }: Props) {
    return (
        <>
            <div className="card-sucess-background" onClick={closeCard}>
            </div>
            <div className="card-sucess">
                <h2>{message} com sucesso!</h2>
                <button onClick={closeCard}>Fechar</button>
            </div>
        </>

    );
}