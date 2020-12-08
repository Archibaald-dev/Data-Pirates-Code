import React, {Component, lazy, Suspense} from "react";
import ReactDOM from 'react-dom';
import './index.css';


const LazySquaredMenu = lazy(() => import(/*webpackChunkName: 'squaredMenu'*/'./features/squaredMenu'));


class App extends Component{
    render() {
        return(
            <div>

            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));
