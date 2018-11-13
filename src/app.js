import React from 'react';
import ReactDOM from 'react-dom';

import './styles/styles.scss';

const jsx = (
    <div>xX_HELLO WORLD FROM REACT_Xx_69_420</div>
);

const appRoot = document.getElementById('app');
document.getElementById('no-webpack').style.display = 'none'; // hide the webpack error if webpack is running
ReactDOM.render(jsx,appRoot);
