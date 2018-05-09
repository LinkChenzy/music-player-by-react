import React from 'react'
import Header from './components/Header/header.js'
import Player from './page/player.js'
import MUSIC_LIST from './config/musiclist.js'

console.log(MUSIC_LIST);
export default class Root extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			currentMusicItem:MUSIC_LIST[1]
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
		return (
			<div>
    			<Header />
    			<Player currentMusicItem={currentMusicItem}></Player>
    		</div>
		)
	}
}