import React from 'react'
import './header.less'

export default class Header extends React.Component {
	render() {
		return (
			<div className="componets-header row">
				<img src='./images/logo.png' width="40" height="40" className='-col-auto' />
				<h1 className='option'>MUSIC BY REACT</h1>
			</div>
		);
	}
}