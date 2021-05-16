import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import api from '../../services/api';

import './style.css';

import logoImg from '../../assets/logo.svg'

export default function Despesas() {
    const [despesas, setDespesas] = useState([]);
    
    const history = useHistory();

    const ongId = localStorage.getItem('userEmail');
    const userName = localStorage.getItem('userName');


    useEffect(() => {
        api.get('profile', {
            headers: {
                Authorization: ongId,
            }
        }).then(response => {
            setDespesas(response.data);
        })
    }, [ongId]);


    async function handleDeleteGasto(id) {
        try {
            await api.delete(`despesas/${id}`, {
                headers: {
                    Authorization: ongId,
                }
            });

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
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Me Money" />
                <span>Boas vindas, {userName}</span>

                <Link className="button" to="/gastos/novo">Novo gasto</Link>
                <button onClick={handleLogout} type="button">
                    <FiPower size={18} color="#62CF35" />
                </button>
            </header>

            <h1>Despesas</h1>

            <ul>
                {despesas.map(gasto => (
                    <li key={gasto.id}>
                        <strong>GASTO:</strong>
                        <p>{gasto.title}</p>

                        <strong>CATEGORIA</strong>
                        <p>{gasto.description}</p>

                        <strong>VALOR:</strong>
                        <p>{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL' }).format(gasto.value)}</p>

                        <button onClick={() => handleDeleteGasto(gasto.id)} type="button">
                            <FiTrash2 size={20} color="#a8a8b3"/>
                        </button>
                     </li>
                ))}
            </ul>
        </div>
    );
}