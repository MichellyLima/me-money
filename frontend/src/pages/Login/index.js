import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom'; //Para não ter que recarregar as paginas
import { FiLogIn } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';

import logoImg from '../../assets/logo.svg';
import moneyImg from '../../assets/wallet.png';

import $ from 'jquery'; 


export default function Login() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const history = useHistory();

    async function handleLogin(e) {
        e.preventDefault();

        
        try{
            let response;
           $.ajax({
                type:'GET',		//Definimos o método HTTP usado
                dataType: 'json',	//Definimos o tipo de retorno
                url: 'http://localhost:8080/Usuario/Login.php',//Definindo o arquivo onde serão buscados os dados
                data: {email: email, senha: senha },
                success: function(dados){
                    response = dados;
                    
                    console.log(dados.nome);
                    localStorage.setItem('userEmail', email);
                    localStorage.setItem('userName', dados[0].nome);
        
                    history.push('/home');
                }

            });

        } catch (err) {
            alert('Falha no login, tente novamente');
        }
    }

    return(
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="Me Money"/>

                <form onSubmit ={handleLogin}>

                    <input 
                        placeholder="Seu E-mail"
                        value = {email}
                        onChange={e => setEmail(e.target.value)}    
                    />
                    <input 
                        type="password"
                        placeholder="Senha"
                        value = {senha}
                        onChange={e => setSenha(e.target.value)}    
                    />
                    <button className="button" type="submit">Entrar</button>

                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color='#62CF35'/>
                        Não tenho cadastro
                    </Link>
                </form>
            </section>

            <img src={moneyImg} alt="Me Money"/>
        </div>
    )
}