import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft, FiLogOut , FiTrash2 } from 'react-icons/fi';

import api from '../../services/api';

import './style.css';

import logoImg from '../../assets/logo.svg'

export default function DespesasPorMes() {
    const [despesas, setDespesas] = useState([]);
    
    const history = useHistory();

    const userEmail = localStorage.getItem('email');
    const userName = localStorage.getItem('nome');
    const mes = localStorage.getItem('mes');
    const nomeMes = localStorage.getItem('nomeMes');

    useEffect(() => {
        api.get('./DespesaSearch.php', ).then(response => {
            setDespesas(response.data.filter(gasto => gasto.mes === mes));
        })
    }, [userEmail]);


    async function handleDeleteGasto(id) {
        try {
            await api.delete(`./GastoDelete.php/${id}`);

            setDespesas(despesas.filter(gasto => gasto.id !== id));
        } catch (err) {
            alert('Erro ao deletar o gasto , tente novamente.');
        }
    }

    function handleLogout() {
        localStorage.clear();
        history.push('/');
    }

    
    return (
        <div className="despesas-mes-container">
            <header>
                <img src={logoImg} alt="Me Money" />
                <span>Boas vindas, {userName}</span>

                <Link className="button" to="/gastos/novo">Novo gasto</Link>
                <button onClick={handleLogout} type="button">
                    <FiLogOut  size={18} color="#62CF35" />
                </button>
            </header>

            <Link className="back-link" to="/despesas">
                <FiArrowLeft size={16} color='#41414d'/>
                Despesas
            </Link>
            <h1>Despesas de {nomeMes}</h1>

            <ul>
                {despesas.map(gasto => (
                    <li key={gasto.id}>
                        <strong>GASTO:</strong>
                        <p>{gasto.descricao}</p>

                        <strong>CATEGORIA</strong>
                        <p>{gasto.categoria}</p>

                        <strong>VALOR:</strong>
                        <p>{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL' }).format(gasto.valor)}</p>

                        <button onClick={() => handleDeleteGasto(gasto.id)} type="button">
                            <FiTrash2 size={20} color="#a8a8b3"/>
                        </button>
                     </li>
                ))}
            </ul>
        </div>
    );
}