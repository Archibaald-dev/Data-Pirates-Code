import React, {Component, lazy, Suspense} from "react";
import ReactDOM from 'react-dom';
import './index.css';

import Navbar from './navbar.js'
import {BrowserRouter, Route, Switch, Redirect, Link, NavLink} from 'react-router-dom';




const LazyHome = lazy(()=> import(/*webpackChunkName: 'homePage'*/ './features/homePage'))
const LazySquaredMenu = lazy(() => import(/*webpackChunkName: 'squaredMenu'*/'./features/squaredMenu'));
const LazyContactPage = lazy(() => import(/*webpackChunkName: 'contact'*/'./features/contact'));
const LazyMicrophone = lazy(() => import(/*webpackChunkName: 'microphones'*/'./features/categories/components/microphones/Microphones'));
const LazyWebcam = lazy(() => import(/*webpackChunkName: 'webcams'*/'./features/categories/components/webcams/Webcams'));
const LazyScreen = lazy(() => import(/*webpackChunkName: 'screens'*/'./features/categories/components/screens/Screens'));
const LazySupport = lazy(() => import(/*webpackChunkName: 'supports'*/'./features/categories/components/supports/Supports'));
const LazyKeyMouse = lazy(() => import(/*webpackChunkName: 'keymouse'*/'./features/categories/components/keymouse/KeyMouse'));
const LazyPrinter = lazy(() => import(/*webpackChunkName: 'printers'*/'./features/categories/components/printers/Printers'));
const LazyStationery = lazy(() => import(/*webpackChunkName: 'stationeries'*/'./features/categories/components/stationeries/Stationeries'));
const LazyLaptop = lazy(() => import(/*webpackChunkName: 'laptops'*/'./features/categories/components/laptops/Laptops'));
const LazyBlog = lazy(() => import(/*webpackChunkName: 'blog'*/'./features/categories/components/blog/Blog'));
const LazyArticle = lazy(()=> import(/*webpackChunkName: 'article'*/ './features/articles'))









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
                            <Route path="/contact" component = { LazyContactPage } />
                            <Route path="/laptop" component = { LazyLaptop } />
                            <Route path="/keymouse" component = { LazyKeyMouse} />
                            <Route path="/microphones" component = { LazyMicrophone } />
                            <Route path="/screens" component = { LazyScreen } />
                            <Route path="/webcams" component = { LazyWebcam } />
                            <Route path="/stationeries" component = { LazyStationery } />
                            <Route path="/printers" component = { LazyPrinter } />
                            <Route path="/supports" component = { LazySupport} />
                            <Route path="/blog" component = { LazyBlog} />
                            <Route path="/article" component={LazyArticle}/>


                            <Redirect to="/home"/>
                        </Switch>
                    </BrowserRouter>
                </Suspense>

            </>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));




