import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';

class MainApp extends Component {
    constructor(props) {
        super(props);


    }

    render() {
        return (
            <Fragment>
                <div>Testin</div>
            </Fragment>
        );
    }
}





ReactDOM.render(<MainApp />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
