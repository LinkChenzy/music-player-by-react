import React from 'react'
import Header from './components/Header/header.js'
import Progress from './components/Progress/progress.js'

let duration = null;
export default class Root extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			progress: "-"
		};
	}
	componentDidMount() {
		$("#player").jPlayer({
			ready: function() {
				$(this).jPlayer('setMedia', {
					mp3: 'http://oj4t8z2d5.bkt.clouddn.com/%E9%AD%94%E9%AC%BC%E4%B8%AD%E7%9A%84%E5%A4%A9%E4%BD%BF.mp3'
				}).jPlayer('play');
			},
			supplied: 'mp3',
			wmode: 'window'
		});
		$('#player').bind($.jPlayer.event.timeupdate, (e) => {
			duration = e.jPlayer.status.duration;
			this.setState({
				//progress:Math.round(e.jPlayer.status.currentTime)//jPlayer获取的当前的时间
				progress: e.jPlayer.status.currentPercentAbsolute
			});
		});

	}
	componentWillUnmount() {
		$('#player').unbind($.jPlayer.event.timeupdate);
	}
	changeProgressHandle(progress) {
		$('#player').jPlayer('play', duration * progress);
	}
	render() {
		return (
			<div>
    			<Header />
    			<Progress 
    				progress={this.state.progress}
    				onProgressChange = {this.changeProgressHandle}
    			></Progress>
    		</div>
		)
	}
}