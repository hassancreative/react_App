import React , { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import Hellow from './components/Hellow'
 
import Clock from './components/Clock'

class MainApp extends Component{
    constructor(props){
        super(props);

        
    }

    render(){ 
        return(
            <React.Fragment>
             <Clock />
            </React.Fragment>
        );
    }
}





ReactDOM.render(<MainApp />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
