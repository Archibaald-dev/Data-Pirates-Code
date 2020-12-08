import React, {Component, lazy, Suspense} from "react";
import ReactDOM from 'react-dom';
import './index.css';

import Navbar from './navbar.js'
import {BrowserRouter, Route, Switch, Redirect, Link, NavLink} from 'react-router-dom';




const LazyHome = lazy(()=> import(/*webpackChunkName: 'homePage'*/ './features/homePage'))
const LazySquaredMenu = lazy(() => import(/*webpackChunkName: 'squaredMenu'*/'./features/squaredMenu'));
const LazyCategories = lazy(() => import(/*webpackChunkName: 'categories'*/'./features/categories'));
const LazyContactPage = lazy(() => import(/*webpackChunkName: 'contact'*/'./features/contact'));








class App extends Component{
    render() {
        return(
            <>

                <Suspense fallback={<h1>Loading...</h1>}>
                    <BrowserRouter>
                        <Navbar/>
                        <Switch>

                            <Route path="/home" component = { LazyHome } />
                            <Route path="/menu" component = { LazySquaredMenu } />
                            <Route path="/categories" component = { LazyCategories } />
                            <Route path="/contact" component = { LazyContactPage } />



                            <Redirect to="/home"/>
                        </Switch>
                    </BrowserRouter>
                </Suspense>

            </>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));




