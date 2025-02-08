import { NavLink } from 'react-router-dom';
import './styles.css';


export default function Header() {
    return (
        <header>
            <nav className="container">

                <div className="header-title">
                    <h1>AutoAluguel</h1>
                </div>
                <div className="header-options-navegation">
                    <ul className="header-options-navegation-list">
                        <li className="header-option-item">
                            <NavLink to="/">
                                Inicio
                            </NavLink>
                        </li>
                        <li className="header-option-item">
                            <NavLink to="/painel">
                                Alugar
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}