import React from 'react'
import './progress.less'

export default class Progress extends React.Component {
	render() {
		return (
			<div className="componets-progress row">
				<div className='progress'>{this.props.progress}s</div>
			</div>
		);
	}
}