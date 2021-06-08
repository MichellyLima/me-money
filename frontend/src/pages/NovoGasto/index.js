import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';
import logoImg from '../../assets/logo.svg';
import { MdNetworkCell } from 'react-icons/md';

export default function NovoGasto() {
    const [descricao, setDescricao] = useState('');
    const [categoria, setCategoria] = useState('');
    const [valor, setValor] = useState('');

    const mes = new Date().getMonth();

    const history = useHistory();

    const ongId = localStorage.getItem('ongId');

    async function handleNovoGasto(e) {
        e.preventDefault();

        const data = {
            descricao,
            categoria,
            valor,
            mes,
        };

        try{
            await api.post('./GastoCreate.php', data);

            history.push('/despesas');
        } catch (err) {
            alert('Erro ao cadastrar o gasto, tente novamente.');
        }
    }

    return (
        <div className="new-spent-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Me Money"/>

                    <h1>Adicionar um gasto</h1>
                    <p>Cadastre as informações do seu novo gasto.</p>

                    <Link className="back-link" to="/despesas">
                        <FiArrowLeft size={16} color='#62CF35'/>
                        Voltar para Home
                    </Link>
                </section>
                
                <form onSubmit={handleNovoGasto}>
                    <input 
                        placeholder="Título do gasto" 
                        value={descricao}
                        onChange={e => setDescricao(e.target.value)}
                    />

                    <select placeholder="Categoria" name="categoria" value={categoria} onChange={e => setCategoria(e.target.value)}>
                        <option value="alimentação">Alimentação</option>
                        <option value="educação">Educação</option>
                        <option value="serviços">Serviços</option>
                        <option value="saúde">Saúde</option>
                        <option value="cosméticos">Cosméticos</option>
                        <option value="lazer">Lazer</option>
                    </select>

                    <input 
                        placeholder="Valor em reais" 
                        type="number"
                        data-type="currency"
                        value={valor}
                        onChange={e => setValor(e.target.value)}
                    />

                
                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}