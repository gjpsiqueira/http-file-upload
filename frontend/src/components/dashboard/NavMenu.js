import React from 'react'
import { doLogout } from '../../actions/authActions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class NavMenu extends React.Component {

    render() {
        return (
            <div className="nav-scroller bg-white box-shadow">
            <nav className="nav nav-underline">
              <a className="nav-link active" href="#">Lista de arquivos</a>
              <a className="nav-link" href="" onClick={() => this.props.doLogout()}>Sair</a>
            </nav>
          </div>            
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({doLogout},dispatch)
export default connect(null,mapDispatchToProps)(NavMenu)