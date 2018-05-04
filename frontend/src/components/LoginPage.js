import React from 'react'

class LoginPage extends React.Component {

    render() {
        return (
            <div className="container h-100">
                <div className="row justify-content-md-center h-100">
                    <div className="card fat">
                        <div className="card-body">
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
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default LoginPage