import React,  { Component } from 'react'
import { Link } from 'react-router-dom'
import BagList from './BagList'


class Complete extends Component {
    render() {
        return (
            <div>
                收红包
                <BagList />
                <Link to='/'>返回</Link>
            </div>
        )
    }
}

export default Complete