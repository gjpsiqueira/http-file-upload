import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { doLogin } from '../actions/authActions'

class LoginForm extends React.Component {

    render() {
        return (
            
            <div>
                {this.props.userData}
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
                    <button type="submit" 
                        className="btn btn-primary btn-block" 
                        onClick={() => this.props.doLogin('gustavo','123456')}>
                        Entrar 
                    </button>
                </div>                                                                
            </div>   
        )
    }
}

const mapStateToProps = state => ({userData: state.auth.userData})
const mapDispatchToProps = dispatch => bindActionCreators({doLogin},dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)