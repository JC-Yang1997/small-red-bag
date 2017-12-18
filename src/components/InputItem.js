import React,  { Component } from 'react'

class InputItem extends Component {
    constructor() {
        super()
        this.state = {
            people: 1,
            money: 0.1
        }
    }
    
    render() {
        return (
            <div className="input-feild">
                <div className="input-people">
                    <label>请输入人数</label><input type="number"/>
                </div>
                <div className="input-money">
                    <label>请输入金额</label><input type="number"/>
                </div>                 
            </div>
        )
    }
}

export default InputItem