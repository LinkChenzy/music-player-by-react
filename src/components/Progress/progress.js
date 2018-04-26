import React from 'react'
import './progress.less'

export default class Progress extends React.Component {
	constructor(props) {
		super(props);
		this.onChangeProgress = this.onChangeProgress.bind(this);
	}
	onChangeProgress(e) {
		let progressBar = this.refs.progressBar;
		let progress = (e.clientX - progressBar.getBoundingClientRect().left) / progressBar.clientWidth;
		this.props.onProgressChange && this.props.onProgressChange(progress);
	}
	render() {
		return (
			<div className="components-progress" 
				onClick={this.onChangeProgress} ref='progressBar'
			>
				<div className='progress' style={{width:`${this.props.progress}%`}}>
				{this.props.progress}s</div>
			</div>
		);
	}
}