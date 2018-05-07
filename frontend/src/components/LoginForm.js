import React from 'react'

export default class LoginForm extends React.Component {

    render() {
        return (
            <form method="POST">
                <div className="form-group">
                    <label for="usuario">Usuário</label>
                    <input 
                        id="usuario" 
                        type="text" 
                        className="form-control" 
                        name="usuario" 
                        required autofocus/>
                </div>
                <div className="form-group">
                    <label for="senha">Senha</label>
                    <input id="senha" 
                        type="password" 
                        className="form-control" 
                        name="email" 
                        required autofocus/>
                </div>
                <div className="form-group no-margin">
                    <button type="submit" className="btn btn-primary btn-block">
                        Login
                    </button>
                </div>                                                                
            </form>            
        )
    }
}