import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Despesas from './pages/Despesas';
import DespesasPorMes from './pages/DespesasPorMes';
import NovoGasto from './pages/NovoGasto';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/home" exact component={Home} />
                <Route path="/register" component={Register} />
                <Route path="/despesas/mes" component={DespesasPorMes} /> 
                <Route path="/despesas" component={Despesas} />
                <Route path="/gastos/novo" component={NovoGasto} />
            </Switch>
        </BrowserRouter>
    );
}