import React from 'react'

export default class Card extends React.Component {

    render() {
        return (
            <div className="card fat border-0">
                <div className="card-body ">
                    {this.props.children}
                </div>
            </div>
        )
    }
}