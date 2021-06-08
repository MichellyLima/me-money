import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogOut, FiArrowLeft } from 'react-icons/fi';
import { MdAttachMoney } from "react-icons/md";

import api from '../../services/api';

import './styles.css';

import logoImg from '../../assets/logo.svg'

import $ from 'jquery'; 

export default function Despesas(){

    const [meses, setMeses] = useState([6]);
    const [gastos, setGastos] = useState([]);
    const userName = localStorage.getItem('userName');
    const userEmail = localStorage.getItem('userEmail');

    const history = useHistory();

    const monthNames = ["", "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
        "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

    console.log('email', userEmail);

    useEffect(() => {
        // api.get('./Despesa/DespesaSearch.php', {data: { usuario: userEmail, mes: '08/2020' }}).then(response => {
        //     console.log(response);
        //     //setMeses(response.data.map(despesa => despesa.mes));
        // })

        let response;
        $.ajax({
            type:'GET',		//Definimos o método HTTP usado
            dataType: 'json',	//Definimos o tipo de retorno
            url: 'http://localhost:8080/Despesa/DespesaSearch.php',//Definindo o arquivo onde serão buscados os dados
            data: {usuario: userEmail},
            success: function(dados){
                console.log('batata', dados);
                //listaMeses(dados);
                
            }

        });

    }, [userEmail]);


    function listaMeses(gastos)
    {
        console.log(gastos);
        let antMes = -1;
        for(let i = 0; i < gastos.length; i++)
        {
            let element = gastos[i];

            //if(element.mes != antMes)
                setMeses(meses.push(element.mes));
            antMes = element.mes;
        }
    }

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

