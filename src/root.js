import React from 'react'
import Header from './components/Header/header.js'
import Player from './page/player.js'
import {
	MUSIC_LIST
} from './config/musiclist.js'
import MusicList from './page/musiclist.js'
import {
	BrowserRouter as Router,
	Link,
	Route,
	Switch
} from 'react-router-dom'


class App extends React.Component {

	render() {
		return (
			<div>
    			<Header />
    			
    		</div>
		)
	}
}
class Root extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			musicList: MUSIC_LIST,
			currentMusicItem: MUSIC_LIST[0]
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

	}
	componentWillUnmount() {

	}

	render() {
		let This = this;

		const MusicLists = () => (
			<MusicList currentMusicItem={This.state.currentMusicItem} musicList={this.state.musicList}/>
		);

		const Players = () => (
			<Player currentMusicItem={This.state.currentMusicItem} repeatType='1' isPlay={This.state.playState} />
		);

		return (
			<Router>
				<section>
					<Header />
					<Route exact path="/" component={Players} />
					<Route path="/list" component={MusicLists} />
				</section>
			</Router>
		);
	}
}

export default Root;