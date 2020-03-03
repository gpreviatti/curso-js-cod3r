import React, { Component } from 'react';
import axios from 'axios';

const baseUrl = 'http://localhost:3001/users/';
const initialState = {
    user: {name: '', email: ''},
    list: []
};

export default class UserCrud extends Component {
    state = { ...initialState };

    componentDidMount () {
        axios(baseUrl).then(res => {
            this.setState({ list: res.data});
        });
    }

    save() {
        const user = this.state.user;
        if (user.name === "" || user.email === "") {
            alert('Não é possível registrar um usuário em branco');
            return;
        }

        let method = 'post';
        let url = baseUrl;
        if (user.id) {
            method = 'put';
            url += user.id;
        }
        
        axios[method] (url, user)
        .then(res => {
            const list = this.getUpdatedList(res.data);
            this.setState({user: initialState.user, list});
        });
    }

    getUpdatedList(user) {
        const list = this.state.list.filter(u => u.id !== user.id);
        list.unshift(user);
        return list;
    }

    updateField(e) {
        const user = { ...this.state.user };
        user[e.target.name] = e.target.value;
        this.setState({user});
    }

    remove (user) {
        axios.delete(`${baseUrl}/${user.id}`)
        .then( () => {
            const list = this.state.list.filter(u => u !== user);
            this.setState({ list });
        });
    }

    renderRows () {
        return this.state.list.map(user => {
            return (
                <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                        <button
                            className="btn btn-success"
                            onClick={() => this.setState({ user })}
                        >
                            <i className="fa fa-pencil"></i>
                        </button>
                        <button 
                            className="btn btn-danger ml-2"
                            onClick={() => this.remove(user)}
                        >
                            <i className="fa fa-trash"></i>
                        </button>
                    </td>
                </tr>
            )
        })
    }

    render() {
        return (
            <main className="main container-fluid">
                <div className="p-3 mt-3">
                    <div className='display-4'>
                        <i className="fa fa-users"/>
                         Cadastro de Usuário
                    </div>
                    <hr/>
                    <p className="mb-0">
                        Cadastro de usuários: Incluir, Listar, Alterar e Excluir!
                    </p>

                    <div className="form">
                        <div className="row">
                            <div className="col-12 col-md-6 form-group">
                                <label >Name </label>
                                <input 
                                    type="text"
                                    className="form-control"
                                    name="name"
                                    value={this.state.user.name}
                                    onChange={e => this.updateField(e)}
                                    placeholder="Digite o nome ...."
                                />
                            </div>

                            <div className="col-12 col-md-6 form-group">
                                <label > Email </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="email"
                                    value={this.state.user.email}
                                    onChange={e => this.updateField(e)}
                                    placeholder="Digite o email ...."
                                />
                            </div>
                        </div>

                        <hr/>

                        <div className="row">
                            <div className="col-12 d-flex justify-content-end">
                                <button 
                                    className="btn btn-dark"
                                    onClick={e => this.save()}
                                >
                                    Salvar
                                </button>

                                <button 
                                    className="btn btn-secondary ml-2"
                                    onClick={() => this.setState({user: initialState.user})}
                                >
                                    Cancelar
                                </button>
                            </div>
                        </div>
                    </div>
                    
                    <table className="mt-4 table-dark table-striped">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>NOME</th>
                                <th>EMAIL</th>
                                <th>AÇÕES</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderRows()}
                        </tbody>
                    </table>
                </div>
            </main>
        )
    }
}