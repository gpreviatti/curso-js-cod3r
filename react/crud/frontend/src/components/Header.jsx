import React, {Fragment} from 'react';
import Logo from './Logo';
import './Header.css';

export default () => (
    <Fragment>
        <Logo/>
        <header className="header d-none d-sm-flex flex-column">
            <h1 className="mt-3">
                <i className={`fa fa-home`}></i>
                Inicío
            </h1>
            <p className="lead text-muted">
            Segundo Projeto do Capitulo de React
            </p>
        </header>
    </Fragment>
)