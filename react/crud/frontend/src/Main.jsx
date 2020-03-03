import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './Main.css';

import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';

export default () => (
    <div className="app">
        <Header/>
        <Nav/>
        <Footer/>
    </div>
)