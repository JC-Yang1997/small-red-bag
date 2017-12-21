import React,  { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import ListItem from '../components/ListItem'


class BagList extends Component {

    static propTypes = {
        bags: PropTypes.array
    }

    render() {
        return (
            <ul>
                {this.props.bags.map((bag, i) => 
                    <ListItem name={`第${i+1}个`}
                              isMax={bag.isMax === true ? true : false}
                              bag={`获得${bag.bag}元`}
                              rest={`剩余${bag.rest}元`}
                              key={i} />
                )}
            </ul>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        bags: state.bags
    }
}

BagList = connect(mapStateToProps)(BagList)
export default BagList