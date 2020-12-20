import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './components/Auth/Login';

class App extends Component<any, any> {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/login" exact component={Login}/>
                </Switch>
            </BrowserRouter>
        )
    }
}

export default App;