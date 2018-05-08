import React from 'react'

export default class NavMenu extends React.Component {

    render() {
        return (
            <div className="nav-scroller bg-white box-shadow">
            <nav className="nav nav-underline">
              <a className="nav-link active" href="#">Lista de arquivos</a>
              <a className="nav-link" href="#">Sair</a>
            </nav>
          </div>            
        )
    }
}