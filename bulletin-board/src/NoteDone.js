import React from 'react'
import './App.css'



var NoteDone = React.createClass({


	render() {
		return (<div className='board'>
			{this.state.notes.map(this.eachNote)}
			<button onClick={() => this.add('New Note')}>+</button>
			</div>)
	}



})


export default NoteDone