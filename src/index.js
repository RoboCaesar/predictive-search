import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';

const template = (
    <div>
        <h1>Enter your query below</h1>
        <form>
            <input type='text'></input>
        </form>
    </div>
);

ReactDOM.render(template, document.getElementById('root'));
