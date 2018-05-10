import React from 'react'
import Progress from '../components/Progress/progress.js'
import './player.less'

let duration = null;
export default class Player extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			progress: 0,
			volume: 0,
		};
	}
	componentDidMount() {
		$('#player').bind($.jPlayer.event.timeupdate, (e) => {
			duration = e.jPlayer.status.duration;
			this.setState({
				//progress:Math.round(e.jPlayer.status.currentTime)//jPlayer获取的当前的时间
				volume: e.jPlayer.options.volume * 100,
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
	changeVolumeHandle(progress) {
		$('#player').jPlayer('volume', progress);
	}
	render() {
		return (

			<div className="player-page">
                <h1 className="caption">我的私人音乐坊 &gt;</h1>
                <div className="mt20 row">
                	<div className="controll-wrapper">
                		<h2 className="music-title">{this.props.currentMusicItem.title}</h2>
                		<h3 className="music-artist mt10">{this.props.currentMusicItem.artist}</h3>
                		<div className="row mt20">
                			<div className="left-time -col-auto">-2:00</div>
                			<div className="volume-container">
                				<i className="icon-volume rt" style={{top: 5, left: -5}}></i>
                				<div className="volume-wrapper">
					                <Progress progress={this.state.volume} onProgressChange={this.changeVolumeHandle}>
					                </Progress>
                				</div>
                			</div>
                		</div>
                		<div style={{height: 10, lineHeight: '10px'}}>
			                <Progress  progress={this.state.progress} onProgressChange={this.changeProgressHandle}>
			                </Progress>
                		</div>
                		<div className="mt35 row">
                			<div>
	                			<i className="icon prev"></i>
	                			<i className="icon ml20 play"></i>
	                			<i className="icon next ml20"></i>
                			</div>
                			<div className="-col-auto">
                				<i className='icon repeat-cycle'></i>
                			</div>
                		</div>
                	</div>
                	<div className="-col-auto cover">
                		<img src={this.props.currentMusicItem.cover} alt={this.props.currentMusicItem.title}/>
                	</div>
                </div>
            </div>
		)
	}
}