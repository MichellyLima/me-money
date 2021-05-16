import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';
import logoImg from '../../assets/logo.svg';

export default function NovoGasto() {
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [value, setValue] = useState('');

    const history = useHistory();

    const ongId = localStorage.getItem('ongId');

    async function handleNovoGasto(e) {
        e.preventDefault();

        const data = {
            title,
            category,
            value,
        };

        try{
            await api.post('spents', data, {
                //headers: {
                   // Authorization: ongId,
                //}
            })

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
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    />

                    <select placeholder="Categoria" name="category" value={category} onChange={e => setCategory(e.target.value)}>
                        <option value="alimentação">Alimentação</option>
                        <option value="educação">Educação</option>
                        <option value="serviços">Serviços</option>
                        <option value="saúde">Saúde</option>
                        <option value="cosméticos">Cosméticos</option>
                        <option value="lazer">Lazer</option>
                    </select>

                    <input 
                        placeholder="Valor em reais" 
                        value={value}
                        onChange={e => setValue(e.target.value)}
                    />

                
                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}