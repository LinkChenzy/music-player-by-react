import React from 'react'
import './header.less'
// import {Logo} from '../../../static/images/logo.png'
var Logo = './static/images/logo.png';


export default class Header extends React.Component{
	render() {
		console.log(Logo);
		return (
			<div className="componets-header row">
				<img src={Logo} width="40" className='-col-auto' />
				<h1 className='option'>MUSIC BY REACT</h1>
			</div>
		);
	}
}
