import React,  { Component } from 'react'
import { Link } from 'react-router-dom'
import Info from './Info'

class InputItem extends Component {

    constructor() {
        super()
        this.state = {
            people: '',
            money: '',
            text1: '',
            text2: '',
        }
    }

    handlePeopleNumber(e) {
        var v = e.target.value
        if (Number(v) < 1) {
            this.setState({
                people: v,
                text1: '人数不得小于1'
            })
            return false
        } else if (/\./.test(v + '')) {
            this.setState({
                people: v,
                text1: '人数必须为整数'
            })
            return false
        } else {
            this.setState({
                people: v,
                text1: '',
            })
        }
    }

    handleMoneyNumber(e) {
        var v = e.target.value
        if (Number(v) < 0.01) {
            this.setState({
                money: v,
                text2: '钱数不得小于0.01'
            })
            return false
        } else {
            this.setState({
                money: v,
                text2: '',
            })
        }
    }

    handleSubmit(e) {
        if ((!this.state.text1) 
        && (!this.state.text2) 
        && (this.state.people)
        && (this.state.money)
        && (this.props.onSubmit)) {
            const { people, money } = this.state
            this.props.onSubmit({ people, money })
        } else {
            e.preventDefault()
        }
        this.setState({
            people: '',
            money: '',
        })
    }

    render() {
 
        return (
            <div className="wrapper-input">
                <div className="input-feild">
                    <div className="input-people-field">
                        <div className="input-people">
                            <label>请输入人数</label>
                            <input type="number" 
                            value={this.state.people}
                            onChange={this.handlePeopleNumber.bind(this)}
                            autoFocus/>
                        </div>
                        <Info text={this.state.text1}/>
                    </div>
                    <div className="input-money-field">
                        <div className="input-money">
                            <label>请输入金额</label>
                            <input type="number" 
                            value={this.state.money}
                            onChange={this.handleMoneyNumber.bind(this)} />
                        </div>
                        <Info text={this.state.text2}/>
                    </div>
                </div> 
                <div>
                    <Link to="/complete" onClick={this.handleSubmit.bind(this)}>发</Link>
                </div>          
            </div>
        )
    }
}


export default InputItem