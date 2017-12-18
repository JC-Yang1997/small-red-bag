import React,  { Component } from 'react'
import { Link } from 'react-router-dom'
import InputItem from'./InputItem'

class SendPage extends Component {
    render() {
        return (
            <div>
                <InputItem />
                <div>
                    <Link to="/complete">发</Link>
                </div>            
            </div>
        )
    }
}

export default SendPage