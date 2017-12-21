import React,  { Component } from 'react'
import { Link } from 'react-router-dom'
import BagList from './BagList'


class Complete extends Component {
    render() {
        return (
            <div className="wrapper-input white">
                <BagList />
                <div className="send-bag">
                    <Link to='/'>返回</Link>
                </div>
            </div>
        )
    }
}

export default Complete