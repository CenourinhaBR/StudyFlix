import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home'
import Register from './pages/Register'
import Error404 from './pages/404'
import Categoria from './pages/Categoria'

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/"exact component={Home}/>
                <Route path="/registrar/novovideo" component={Register}/>
                <Route path="/cadastro/categoria" component={Categoria}/>
                <Route component={Error404}/>
            </Switch>
        </BrowserRouter>
    )
}

