import React from 'react'

class Header extends React.Component {
	constructor() {
		super()
		
		this.state = {
			transcriptBool: false,
			id: 'id',
			date: 'date',
			title: 'title',
			alt: 'alt',
			transcript: 'transcript'
		}
	}

	render() {
		return (
			<div>
				<button>|&lt;</button>
				<button>&lt;</button>
				<input type='range' />
				<button>&gt;</button>
				<button>&gt;|</button>
				<button>transcript</button>
				<p>{this.state.id}</p>
				<p>{this.state.date}</p>
				<button>random</button>
				<p>{this.state.title}</p>
				<p>{this.state.alt}</p>
			</div>
		)
	}
}

export default Header