import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';
import './styles.css';

import logoImg from '../../assets/logo.svg';

export default function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const history = useHistory(); //permite fazer a navegação através de uma função JS

    async function handleRegister(e){ //função responsável por fazer cadastro do usuário
        e.preventDefault();

        const data = {
            name,
            email,
            password,
            confirmPassword,
        };

       try {
            //const response =  await api.post('ongs', data);

            alert("Conta cadastrada com sucesso.");

            history.push('/');
       } catch (err) {
           alert('Erro no cadastro, tente novamente. ');
       }

    }

    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Me Money"/>

                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro e comece a gerenciar sua vida finaneira.</p>

                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color='#62CF35'/>
                        Já tenho cadastro
                    </Link>
                </section>
                
                <form onSubmit={handleRegister}>
                    <input 
                        placeholder="Nome Completo" 
                        value={name}
                        onChange={e => setName(e.target.value)}
                        required
                    />

                    <input 
                        type="email" placeholder="E-mail" 
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                    />

                    <input 
                        type="password"
                        placeholder="Senha" 
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        required
                    />
                    
                    <input 
                        type="password"
                        placeholder="Confirme sua senha" 
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        required
                    />

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}