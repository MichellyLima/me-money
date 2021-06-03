import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogOut, FiCalendar } from 'react-icons/fi';
import { MdAttachMoney } from "react-icons/md";

import api from '../../services/api';

import './styles.css';

import logoImg from '../../assets/logo.svg'

export default function Home(){

    const history = useHistory();

    function handleLogout() {
        localStorage.clear();
        history.push('/');
    }

    return(
        <div className="home-container">
             <header>
                <img src={logoImg} alt="Me Money" />
                <span>Boas vindas, Amanda</span>

                <Link className="button" to="/gastos/novo">Novo gasto</Link>
                <button onClick={handleLogout} type="button">
                    <FiLogOut size={18} color="#62CF35" />
                </button>
            </header>

            <h1>O que deseja verificar ?</h1>

            <ul>
                <Link className="link" to="/despesas">
                    <li>              
                        <MdAttachMoney size={32} color="#62CF35"/>                   
                        <strong>Minhas Despesas</strong>               
                    </li>
                </Link>
            </ul>
            
            <ul>
                <Link className="link" to="/despesas">
                    <li>              
                        <FiCalendar size={30} color="#62CF35"/>                   
                        <strong>Planejamento</strong>               
                    </li>
                </Link>
            </ul>
        </div>
    );
}