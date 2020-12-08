import React, {Component, lazy, Suspense} from "react";
import ReactDOM from 'react-dom';
import './index.css';
import Navbar from './navbar.js'



const LazySquaredMenu = lazy(() => import(/*webpackChunkName: 'squaredMenu'*/'./features/squaredMenu'));
const LazyCategories = lazy(() => import(/*webpackChunkName: 'categories'*/'./features/categories'));
const LazyContactPage = lazy(() => import(/*webpackChunkName: 'contact'*/'./features/contact'));


class App extends Component{
    render() {
        return(
            <>
            <Navbar/>
            <div>

            </div>
                </>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));

ReactDOM.render( <Navbar/>,
document.getElementById('root')
);

