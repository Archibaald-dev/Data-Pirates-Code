import React, {Component, lazy, Suspense} from "react";
import ReactDOM from 'react-dom';
import './index.css';

import Navbar from './navbar.js'
import {BrowserRouter, Route, Switch, Redirect, Link, NavLink} from 'react-router-dom';




const LazySquaredMenu = lazy(() => import(/*webpackChunkName: 'squaredMenu'*/'./features/squaredMenu'));







class App extends Component{
    render() {
        return(
            <>

                <Suspense fallback={<h1>Loading...</h1>}>
                    <BrowserRouter>
                        <Navbar/>
                        <Switch>

                            <Route path="/menu" component = { LazySquaredMenu } render={props => ( {...props} )}/>
                            <Redirect to="/menu"/>
                        </Switch>
                    </BrowserRouter>
                </Suspense>

            </>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));




