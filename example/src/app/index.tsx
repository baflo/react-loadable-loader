import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Application from './app';

document.addEventListener('DOMContentLoaded', () => {
    const appRoot = document.getElementById('app');

    if (appRoot) {
        ReactDOM.render(<Application />, appRoot);
    }
}); 
