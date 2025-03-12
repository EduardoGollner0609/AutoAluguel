import { useEffect, useState } from 'react';
import CatalogCard from '../../../components/CatalogCard';
import './styles.css';
import { AutomobileDTO } from '../../../models/automobile';
import * as automobileService from '../../../services/automobile-service';
import { Link } from 'react-router-dom';
import loadingIcon from '../../../assets/spinner-loading-icon.svg';
import ButtonNextPage from '../../../components/ButtonNextPage';

export default function HomePage() {

    const [automobiles, setAutomobiles] = useState<AutomobileDTO[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [automobilesIsEmpty, setAutomobileIsEmpty] = useState<boolean>(false);
    const [numberPage, setNumberPage] = useState<number>(0);
    const [isLastPage, setIsLastPage] = useState<boolean>(false);


    useEffect(() => {
        setLoading(true);
        automobileService.findAllOrderByReturned().then(
            response => {
                const nextPage = response.data.content;
                setAutomobiles(automobiles.concat(nextPage))
                setIsLastPage(response.data.last);
                setLoading(false);
                if (automobiles.length === 0) {
                    setAutomobileIsEmpty(true);
                }
            }
        )
    }, []);

    function handleNextPageClick() {
        setNumberPage(numberPage + 1);
    }

    return (
        <section id="home-page-section" className="container">
            <div className="home-page-welcome top-title">
                <h2>Seja muito bem vindo</h2> <Link to="/automobile-register/create"> + Adicionar automóvel</Link>
            </div>
            {
                automobiles.length > 0 &&
                <div className="home-page-catalog-cards">
                    {
                        automobiles.map(
                            automobile => (<CatalogCard key={automobile.id} automobile={automobile} />)
                        )
                    }
                </div>

            }
            {
                (automobiles.length <= 0 && !loading && automobilesIsEmpty) &&
                <div className="catalog-isempty">
                    <h3>Nenhum veiculo cadastro</h3>
                </div>
            }
            {

                loading &&
                <div className="loading-catalog-list">
                    <img src={loadingIcon} alt="" />
                </div>
            }
            {
                (automobiles.length > 0 && !isLastPage && !loading) && <ButtonNextPage onNextPage={handleNextPageClick} />
            }
        </section >
    );
}