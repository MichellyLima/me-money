import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';
import logoImg from '../../assets/logo.svg';
import { MdNetworkCell } from 'react-icons/md';

import $ from 'jquery'; 

export default function NovoGasto() {
    const [descricao, setDescricao] = useState('');
    const [categoria, setCategoria] = useState('');
    const [valor, setValor] = useState('');

    // let date;
    const mes = new Date().getMonth() + 1;
    // const year = new Date().getFullYear();
    // date = '' + (mes+1) + '/' + year;
    // console.log(mes, year, date);
    

    const history = useHistory();

    const usuario = localStorage.getItem('userEmail');

    async function handleNovoGasto(e) {
        e.preventDefault();

        console.log('po', categoria);
        try{
            //await api.post('./Gasto/GastoCreate.php', {data});
            let response;
            $.ajax({
                type:'POST',		//Definimos o método HTTP usado
                dataType: 'json',	//Definimos o tipo de retorno
                url: 'http://localhost:8080/Gasto/GastoCreate.php',//Definindo o arquivo onde serão buscados os dados
                data: {usuario: usuario, mes: mes, descricao: descricao, categoria: categoria, valor:  String(valor)},
                success: function(dados){
                    response = dados;
                }

            });
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

                    <select placeholder="Categoria" name="categoria"  onChange={e => setCategoria(e.target.value)}>
                        <option value="" disabled selected hidden>Selecione uma categoria</option>
                        <option value="Alimentação">Alimentação</option>
                        <option value="Educação">Educação</option>
                        <option value="Serviços">Serviços</option>
                        <option value="Saúde">Saúde</option>
                        <option value="Mercado">Mercado</option>
                        <option value="Lazer">Lazer</option>
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