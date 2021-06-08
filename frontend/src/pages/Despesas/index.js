import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogOut, FiArrowLeft } from 'react-icons/fi';
import { MdAttachMoney } from "react-icons/md";

import api from '../../services/api';

import './styles.css';

import logoImg from '../../assets/logo.svg'

export default function Despesas(){

    const [meses, setMeses] = useState([]);
    const userName = localStorage.getItem('nome');
    const userEmail = localStorage.getItem('email');

    const history = useHistory();

    const monthNames = ["", "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
        "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];


    useEffect(() => {
        api.get('./DespesaSearch.php', ).then(response => {
            setMeses(response.data.map(despesa => despesa.mes));
        })
    }, [userEmail]);


    function handleLogout() {
        localStorage.clear();
        history.push('/');
    }

    return(
        <div className="despesas-container">
             <header>
                <img src={logoImg} alt="Me Money" />
                <span>Boas vindas, {userName}</span>

                <Link className="button" to="/gastos/novo">Novo gasto</Link>
                <button onClick={handleLogout} type="button">
                    <FiLogOut size={18} color="#62CF35" />
                </button>
            </header>

            <Link className="back-link" to="/home">
                <FiArrowLeft size={16} color='#41414d'/>
                Home
            </Link>
            <h1>Gastos</h1>

            <ul>
                {meses.map(mes => (
                    <Link className="link" to="/despesas/mes" onClick={localStorage.setItem('mes', mes), localStorage.setItem('nomeMes', monthNames[mes])}>
                        <li>                        
                            <strong>{monthNames[mes]}</strong>               
                        </li>
                    </Link>
                ))}
            </ul>
        </div>
    );
}