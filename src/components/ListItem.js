import React,  { Component } from 'react'

class ListItem extends Component {
    render() {
        return (
            <li className="bag-item">
                <div className="item-name">{this.props.name}</div>
                <div className="item-money">{this.props.bag}</div>
            </li>
        )
    }
}

export default ListItem