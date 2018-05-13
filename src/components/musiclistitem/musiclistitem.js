import React from 'react'
import './musiclistitem.less'
import Pubsub from 'pubsub-js'

export default class MusicListItem extends React.Component {
	playMusic(musicItem) {
		Pubsub.publish('PLAY_MUSIC', musicItem);
	}
	deleteMusic(musicItem, e) {
		e.stopPropagation();
		Pubsub.publish('DELETE_MUSIC', musicItem);
	}
	render() {
		let musicItem = this.props.musicItem;
		return (
			<li onClick={this.playMusic.bind(this,musicItem)} className={`components-listitem row ${this.props.focus?'focus':''}`}>
				<p>{musicItem.title}-{musicItem.artist}</p>
				<p onClick={this.deleteMusic.bind(this,musicItem)} className='-col-auto delete'></p>
			</li>
		)
	}
}