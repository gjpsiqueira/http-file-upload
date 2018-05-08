import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { doLogin } from '../actions/authActions'

class LoginForm extends React.Component {

    constructor(props) {
        super(props)
        this.state = {usuario: '', password: '', submitted: false}

    }

    handleField(e, field) {
        this.setState({ [field]: e.target.value } )

    }

    renderStatus() {
        if(this.props.failed == true) {
            return (
                <div className="alert alert-danger" role="alert">
                     Não foi encontrado nenhum usuário associado. Por favor, tente novamente.
                </div>
            )
        }
    }
    render() {
        return (
            <div>
                {this.renderStatus()}
                <div className="form-group">
                    <label htmlFor="usuario">Usuário</label>
                    <input 
                        id="usuario" 
                        type="text" 
                        className="form-control" 
                        name="usuario" 
                        required autoFocus
                        value={this.state.usuario}
                        onChange={e => this.handleField(e,'usuario')}/>
                </div>
                <div className="form-group">
                    <label htmlFor="senha">Senha</label>
                    <input id="senha" 
                        type="password" 
                        className="form-control" 
                        name="email" 
                        required autoFocus
                        value={this.state.password}
                        onChange={e => this.handleField(e,'password')}/>
                </div>
                <div className="form-group no-margin">
                    <button type="submit" 
                        className="btn btn-primary btn-block" 
                        onClick={() => this.props.doLogin(this.state.usuario,this.state.password)}>
                        Entrar 
                    </button>
                </div>                                                                
            </div>   
        )
    }
}

const mapStateToProps = state => ({
    userData: state.auth.userData,
    failed: state.auth.failed
})
const mapDispatchToProps = dispatch => bindActionCreators({doLogin},dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)