import React from 'react'
import {
	render
} from 'react-dom'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader';
import  Root from './root.js'

import '../static/css/common.css'
import '../static/css/reset.css'


ReactDOM.render(
	<AppContainer>
        <Root />
    </AppContainer>,
	document.getElementById('app')
);

if (module.hot) {
    module.hot.accept('./root', () => {
        const NewRoot = require('./root').default;
        render(
        	<AppContainer>
                <NewRoot />
            </AppContainer>,
            document.getElementById('app')
        );
    });
}