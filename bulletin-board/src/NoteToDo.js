import React from 'react'
import './App.css'
import Note from './Note.js'


var NoteToDo = React.createClass({


	render() {
		return (<div className='board'>
			{this.state.notes.map(this.eachNote)}
			<button onClick={() => this.add('New Note')}>+</button>
			</div>)
	}



})


export default NoteToDo