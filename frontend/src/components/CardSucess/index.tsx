import './styles.css';

type Props = {
    message: string
}
export function CardSucess({ message }: Props) {
    return (
        <>
            <div className="card-sucess-background">
            </div>
            <div className="card-sucess">
                <h2>{message} com sucesso!</h2>
            </div>
        </>

    );
}