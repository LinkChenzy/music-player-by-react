import React from 'react'
import Progress from '../components/Progress/progress.js'
import './player.less'
import {
	Link
} from 'react-router-dom'
import Pubsub from 'pubsub-js'

let duration = null;
export default class Player extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			progress: 0,
			volume: 0,
			isPlay: true,
			leftTime:''
		};
		this.playMusic = this.playMusic.bind(this);
		this.changeProgressHandle = this.changeProgressHandle.bind(this);
	}
	// 时间格式化
	formatTime(time){
		time = Math.floor(time);
		let minutes = Math.floor(time / 60);
		let seconds = Math.floor(time % 60);
		seconds = seconds<10 ? `0${seconds}` : seconds;
		return `${minutes}:${seconds}`;
	}
	componentDidMount() {
		$('#player').bind($.jPlayer.event.timeupdate, (e) => {
			duration = e.jPlayer.status.duration;
			this.setState({
				//progress:Math.round(e.jPlayer.status.currentTime)//jPlayer获取的当前的时间
				volume: e.jPlayer.options.volume * 100,
				progress: e.jPlayer.status.currentPercentAbsolute,
				leftTime: this.formatTime(duration * (1 - e.jPlayer.status.currentPercentAbsolute / 100))
			});

		});
	}
	componentWillUnmount() {
		$('#player').unbind($.jPlayer.event.timeupdate);
	}
	changeProgressHandle(progress) {
		$('#player').jPlayer(this.state.isPlay ? 'play' : 'pause', duration * progress);
	}
	changeVolumeHandle(progress) {
		$('#player').jPlayer('volume', progress);
	}

	playMusic() {
		if (this.state.isPlay) {
			$('#player').jPlayer('pause');
		} else {
			$('#player').jPlayer('play');
		}
		this.setState({
			isPlay: !this.state.isPlay
		})

	}
	playPrev() {
		Pubsub.publish('PLAY_PREV');
	}
	playNext() {
		Pubsub.publish('PLAY_NEXT');
	}
	changeRepeat(){
		Pubsub.publish('CHANGE_CYCLE_MODEL');
	}
	render() {
		return (
			<div className="player-page">
                <h1 className="caption"><Link to="/list">我的私人音乐坊 &gt;</Link></h1>
                <div className="mt20 row">
                	<div className="controll-wrapper">
                		<h2 className="music-title">{this.props.currentMusicItem.title}</h2>
                		<h3 className="music-artist mt10">{this.props.currentMusicItem.artist}</h3>
                		<div className="row mt20">
                			<div className="left-time -col-auto">{this.state.leftTime}</div>
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
	                			<i className="icon prev" onClick={this.playPrev}></i>
	                			
	                			<i className={`icon ml20 ${this.state.isPlay ? 'pause':'play'}`} onClick={this.playMusic}></i>
	                			<i className="icon next ml20" onClick={this.playNext}></i>
                			</div>
                			<div className="-col-auto">
                				<i className={`icon repeat-${this.props.repeatType}`} onClick={this.changeRepeat}></i>
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