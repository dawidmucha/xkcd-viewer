import React from 'react'
import './Header.css'

class Header extends React.Component {
	constructor(props) {
		super(props)
		
		this.state = {
			transcriptBool: false,
			id: undefined,
			date: undefined,
			title: undefined,
			alt: undefined,
			transcript: undefined
		}

		this.setToFirst = this.setToFirst.bind(this)
		this.setToPrevious = this.setToPrevious.bind(this)
		this.setToNext = this.setToNext.bind(this)
		this.setToLast = this.setToLast.bind(this)
		this.setToRandom = this.setToRandom.bind(this)
		this.toggleTranscript = this.toggleTranscript.bind(this)
		this.setFromRange = this.setFromRange.bind(this)
		this.onFormChange = this.onFormChange.bind(this)
	}

	setToFirst() {
		new Promise((res) => {
			res(this.setState({ id: 1 }))
		}).then(val => {
			console.log(this.state.id)
			this.onFormChange()
		})
	}

	setToPrevious(e) {
		new Promise((res) => {
			res(this.setState(state => {
				if(state.id > 1) {
					return { id: state.id - 1 }
				}
			}))
		}).then(() => {
			this.onFormChange()
		})
	}

	setToNext() {
		new Promise((res) => {
			res(this.setState((state, props) => {
				if(state.id < props.maxNum) {
					return { id: state.id + 1 }
				}
			}))
		}).then(() => {
			this.onFormChange()
		})
	}

	setToLast() {
		new Promise((res) => {
			res(this.setState((state, props) => { 
				return { id: props.maxNum }
			}))
		}).then(() => {
			this.onFormChange()
		})
	}
	
	setToRandom() {
		new Promise((res) => {
			res(this.setState({ id: Math.ceil(Math.random() * this.props.maxNum)}))
		}).then(() => {
			this.onFormChange()
		})
	}

	setFromRange(e) {
		new Promise((res) => {
			res(this.setState({ id: parseInt(e.target.value) }))
		}).then(() => {
			this.onFormChange()
		})
	}

	toggleTranscript() {
		this.setState(state => {
			return { transcriptBool: !state.transcriptBool }
		})
		this.onFormChange()
	}

	onFormChange() {
		this.props.handleFormChange(this.state.id)
	}

	render() {
		return (
			<div id='headerContainer'>
				<form onChange={(e) => e.preventDefault()} onClick={(e) => e.preventDefault()} id='form'>
					<button onClick={this.setToFirst}>|&lt;</button>
					<button onClick={this.setToPrevious}>&lt;</button>
					<input type='range' min={1} max={this.props.maxNum} value={this.state.id} onChange={this.setFromRange} id='range' />
					<button onClick={this.setToNext}>&gt;</button>
					<button onClick={this.setToLast}>&gt;|</button>
					<button onClick={this.toggleTranscript} id='transcript'>transcript</button>
					<p>#{this.props.id}</p>
					<p>{this.props.day}-{this.props.month}-{this.props.year}</p>
					<button id='random' onClick={this.setToRandom}>random</button>
					<p id='title'>{this.props.title}</p>
					<p id='alt'>{this.props.alt}</p>
				</form>
			</div>
		)
	}
}

export default Header