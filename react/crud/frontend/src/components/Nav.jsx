import React, {Fragment} from 'react';
import {
    Route,
    Redirect,
    Switch,
    Link,
    BrowserRouter as Router
} from 'react-router-dom';

import './Nav.css';

import Home from './Home';
import UserCrud from './UserCrud';

// Ref para dev: https://reacttraining.com/react-router/web/guides/quick-start
export default () => (
    <Fragment>
        <Router>
            <aside className="menu-area">
                <nav className="menu">
                    {/* Refact: Criar componente de items do menu */}
                    <Link to="/">
                        <i className="fa fa-home"></i> Inicío
                    </Link>
                    <Link to="/users">
                        <i className="fa fa-users"></i> Usuários
                    </Link>
                </nav>
            </aside>

            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/users' component={UserCrud}/>
                <Redirect from='*' to='/'/>
            </Switch>
        </Router>
    </Fragment>
);