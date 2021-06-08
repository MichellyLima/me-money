import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom'; //Para não ter que recarregar as paginas
import { FiLogIn } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';

import logoImg from '../../assets/logo.svg';
import moneyImg from '../../assets/wallet.png';

export default function Login() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const history = useHistory();

    async function handleLogin(e) {
        e.preventDefault();

        try{
           const response = await api.post('./Login.php', {email, senha});

            localStorage.setItem('userEmail', email);
            localStorage.setItem('userName', response.nome);

            history.push('/home');
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
                        type="senha"
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

        </div>
    )
}