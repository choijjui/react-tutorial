import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/chapter13/containers/App';
import {createStore} from 'redux';
import reducers from './components/chapter13/reducers';
import {Provider} from 'react-redux';

const store = createStore(reducers);
ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
