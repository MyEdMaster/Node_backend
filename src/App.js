import React, {Component} from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import {BrowserRouter, HashRouter} from 'react-router-dom';

import 'react-animated-router/animate.css';
import {HomePage} from "./page/HomePage";
import {ProblemList} from "./CRUD_module/problem_list"
import {ProblemDetail} from "./CRUD_module/problem_detail";


export class App extends Component {
    render() {
        return (
            <Route>
                <Switch>
                    <Route
                        path="/home"
                        component={routeProps => <HomePage {...routeProps} />}
                    />
                    <Route
                        path="/problem_list"
                        component={routeProps => <ProblemList {...routeProps} />}
                    />
                    <Route
                        path="/problem/:id"
                        component={routeProps => <ProblemDetail {...routeProps} />}
                    />
                    <Redirect to="/home"/>
                </Switch>
            </Route>

        );
    }
}
