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
import Pubsub from 'pubsub-js'


class Root extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			musicList: MUSIC_LIST,
			currentMusicItem: MUSIC_LIST[0]
		};
	}
	playMusic(musicItem) {
		$("#player").jPlayer('setMedia', {
			mp3: musicItem.file
		}).jPlayer('play');
		this.setState({
			currentMusicItem: musicItem
		});
	}
	componentDidMount() {
		$("#player").jPlayer({
			supplied: 'mp3',
			wmode: 'window'
		});
		this.playMusic(this.state.currentMusicItem);
		// 删除音乐列表
		Pubsub.subscribe('DELETE_MUSIC', (message, musicItem) => {
			this.setState({
				// 过滤音乐列表
				musicList: this.state.musicList.filter(item => {
					return item !== musicItem;
				})
			});
		});

		// 点击音乐播放
		Pubsub.subscribe('PLAY_MUSIC', (message, musicItem) => {

		});

	}
	componentWillUnmount() {
		Pubsub.unsubscribe('DELETE_MUSIC');
		Pubsub.unsubscribe('PLAY_MUSIC');
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