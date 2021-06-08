import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogOut, FiCalendar } from 'react-icons/fi';
import { MdAttachMoney } from "react-icons/md";
import { Chart } from "react-google-charts";

import api from '../../services/api';

import './styles.css';

import logoImg from '../../assets/logo.svg'

export default function Home(){
    const [options, setOptions] = useState({
        title: 'Gasto x Categoria',
        colors: ['#70CC31', '#4C8C22', '#2A4D12', '#76D934', '#61B32B']
    });

    const [data, setData] = useState([
        ['Categoria', 'Gasto'],
        ['Alimentação', 500],
        ['Educação', 100],
        ['Lazer', 200],
    ])

    const history = useHistory();

    const userName = localStorage.getItem('nome');

    function handleLogout() {
        localStorage.clear();
        history.push('/');
    }

    return(
        <div className="home-container">
             <header>
                <img src={logoImg} alt="Me Money" />
                <span>Boas vindas, {userName}</span>

                <Link className="button" to="/gastos/novo">Novo gasto</Link>
                <button onClick={handleLogout} type="button">
                    <FiLogOut size={18} color="#62CF35" />
                </button>
            </header>

            <h1>O que deseja verificar ?</h1>

            <div className="components">
                <div>
                    <ul>
                        <Link className="link" to="/despesas">
                            <li>              
                                <MdAttachMoney size={32} color="#62CF35"/>                   
                                <strong>Minhas Despesas</strong>               
                            </li>
                        </Link>
                    </ul>
            
                    <ul>
                        <Link className="link" to="#">
                            <li>              
                                <FiCalendar size={30} color="#62CF35"/>                   
                                <strong>Planejamento</strong>               
                            </li>
                        </Link>
                    </ul>
                </div>

                <div></div>
                <Chart
                        width={'500px'}
                        height={'300px'}
                        chartType="PieChart"
                        data={data}
                        options={options}
                />
            </div>
        </div>
    );
}