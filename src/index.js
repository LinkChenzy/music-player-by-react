import React from 'react'
import {
	render
} from 'react-dom'
import ReactDOM from 'react-dom'
// import {
// 	element
// } from './root.js'

const element = <h1>Hello, world</h1>;

ReactDOM.render(
	element,
	document.getElementById('app')
);