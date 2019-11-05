import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// importing redux utility 
import { Provider } from 'react-redux'
import configureStore from './store'

// creating store 
const store = configureStore();

ReactDOM.render(
	<Provider store={store}> 
	  <App />
	</Provider>,
	document.getElementById('root')
);

