import React,  { Component } from 'react'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import SendPage from './components/SendPage'
import Complete from './components/Complete'

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Switch>
                        <Route exact path="/" component={SendPage} />
                        <Route path="/complete" component={Complete} />  
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default App