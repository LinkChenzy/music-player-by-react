import React from 'react'
import Progress from '../components/Progress/progress.js'

let duration = null;
export default class Player extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			progress: "-"
		};
	}
	componentDidMount() {
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
			<div className="player-page">
	                <h1 className="caption">我的私人音乐坊 &gt;</h1>
	                <div className="mt20 row">
	                	<div className="controll-wrapper">
	                		<h2 className="music-title">歌曲名</h2>
	                		<h3 className="music-artist mt10">歌手</h3>
	                		<div className="row mt20">
	                			<div className="left-time -col-auto">-2s</div>
	                			<div className="volume-container">
	                				<i className="icon-volume rt" style={{top: 5, left: -5}}></i>
	                				<div className="volume-wrapper">
						                
	                				</div>
	                			</div>
	                		</div>
	                		<div style={{height: 10, lineHeight: '10px'}}>
				                <Progress
									progress={this.state.progress}
									onProgressChange={this.changeProgressHandler}
				                >
				                </Progress>
	                		</div>
	                		<div className="mt35 row">
	                			<div>
		                			<i className="icon prev" onClick={this.prev}></i>
		                			<i className={`icon ml20 ${this.state.isPlay ? 'pause' : 'play'}`} onClick={this.play}></i>
		                			<i className="icon next ml20" onClick={this.next}></i>
	                			</div>
	                			<div className="-col-auto">
	                				<i className='icon repeat' onClick={this.changeRepeat}></i>
	                			</div>
	                		</div>
	                	</div>
	                	<div className="-col-auto cover">
	                		<img src='' alt=''/>
	                	</div>
	                </div>
	            </div>
		)
	}
}