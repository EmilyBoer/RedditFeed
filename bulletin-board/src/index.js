import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import Board from './Board.js';

ReactDOM.render(
	<Board count ={50} />, 
	document.getElementById('react-container')
	);

