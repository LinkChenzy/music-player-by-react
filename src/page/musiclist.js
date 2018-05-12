import React from 'react'
import MusicListItem from '../components/nusiclistitem/musiclistitem.js'

export default class MusicList extends React.Component {
	render(){
		let listEle = null;
		listEle = this.props.musicList.map((item)=>{
			return <MusicListItem 
						musicItem={item} 
						key={item.id}
						focus={item === this.props.currentMusicItem}
					>
					{item.title}
					</MusicListItem>
		});
		return(
			<ul>
				{ listEle }
			</ul>
		);
	}
}