import './styles.css';

type Props = {
    message: string,
    closeCard: () => void
}
export function CardError({ message, closeCard }: Props) {
    return (
        <>
            <div className="card-error-background" onClick={closeCard}>
            </div>
            <div className="card-error">
                <h2>Erro</h2>
                <p>{message}</p>
                <button onClick={closeCard}>Fechar</button>
            </div>
        </>

    );
}