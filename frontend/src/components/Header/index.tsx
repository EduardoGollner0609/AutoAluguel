import { NavLink } from 'react-router-dom';
import './styles.css';
import menuOptionsMenu from '../../assets/menu-options-mobile.svg';
import { useState } from 'react';


export default function Header() {

    const [optionsMenuMobileVisisble, setOptionsMenuMobileVisible] = useState(false);

    function handleOptionsMenuMobileClickclose() {
        setOptionsMenuMobileVisible(false);
    }

    function handleOptionsMenuMobileClickOpen() {
        setOptionsMenuMobileVisible(true);
    }

    return (
        <header>
            <nav className="container">

                <div className="header-title">
                    <h1>AutoAluguel</h1>
                </div>
                <div className="header-options-navegation">
                    <ul className="header-options-navegation-list">
                        <li className="header-option-item">
                            <NavLink to="/" className={({ isActive }) =>
                                isActive ? "option-navegation-header-active" : ""}>
                                Inicio
                            </NavLink>
                        </li>
                        <li className="header-option-item">
                            <NavLink to="/history" className={({ isActive }) =>
                                isActive ? "option-navegation-header-active" : ""}>
                                Histórico
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className="header-menu-options-mobile" onClick={handleOptionsMenuMobileClickOpen}>
                    <img src={menuOptionsMenu} alt="" />
                </div>
                {
                    optionsMenuMobileVisisble &&
                    <>
                        <div className="options-mobile-menu-background" onClick={handleOptionsMenuMobileClickclose}>
                        </div>
                        <div className="options-mobile">
                            <h2>AutoAluguel</h2>
                            <ul className="options-mobile-navegation-list">
                                <NavLink to="/" className={({ isActive }) =>
                                    isActive ? "option-navegation-header-mobile-active" : ""} onClick={handleOptionsMenuMobileClickclose}>
                                    <li className="options-mobile-navegation-item">
                                        Inicio
                                    </li>
                                </NavLink>
                                <NavLink to="/history" className={({ isActive }) =>
                                    isActive ? "option-navegation-header-mobile-active" : ""} onClick={handleOptionsMenuMobileClickclose}>
                                    <li className="options-mobile-navegation-item">
                                        Histórico
                                    </li>
                                </NavLink>
                            </ul>
                        </div>
                    </>

                }
            </nav>
        </header>
    );
}