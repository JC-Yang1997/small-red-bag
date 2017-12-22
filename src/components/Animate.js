import React,  { Component } from 'react'

class Animate extends Component {
    handleAnim() {
        var mask1 = document.querySelector('.animate')
        var mask2 = document.querySelector('.mask2')
        
        mask1.classList.add('hide')
        mask2.classList.add('change')
    }
    render() {
        return (
            <div className="animate">
                <div className="mask1"></div>
                <div className="mask2"></div>
                <div className="open" onClick={this.handleAnim.bind(this)}>拆</div>
            </div>
        )
    }
}

export default Animate