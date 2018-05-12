import React from 'react'
import './musiclistitem.less'

export default class MusicListItem extends React.Component {
	render(){
		let musicItem = this.props.musicItem;
		return (
			<li className={`components-listitem row ${this.props.focus?'focus':''}`}>
				<p>{musicItem.title}-{musicItem.artist}</p>
				<p className='-col-auto delete'></p>
			</li>
		)
	}
}