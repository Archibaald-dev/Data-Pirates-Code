import React, {Component, lazy, Suspense} from "react";
import ReactDOM from 'react-dom';
import './index.css';
import Navbar from './navbar.js'



const LazySquaredMenu = lazy(() => import(/*webpackChunkName: 'squaredMenu'*/'./features/squaredMenu'));


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

