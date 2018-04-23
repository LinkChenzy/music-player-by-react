import React from 'react'
import {
	render
} from 'react-dom'
import ReactDOM from 'react-dom'
import  Root from './root.js'

ReactDOM.render(
        <Root />,
	document.getElementById('app')
);

if (module.hot) {
    module.hot.accept('./root', () => {
        const NewRoot = require('./root').default;
        render(
                <NewRoot />,
            document.getElementById('app')
        );
    });
}