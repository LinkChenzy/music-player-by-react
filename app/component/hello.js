import React from 'react'
import './hello.less'

let Hello = React.creatClass({
	render:function() {
		return (
			<div>
				<div className='hello-component'>
					Hello world
				</div>
			</div>
			
		)
	}
});

export default Hello;