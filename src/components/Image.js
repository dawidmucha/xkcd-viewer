import React from 'react'

class Image extends React.Component {
	constructor() {
		super()

		this.state = {
			img: 'https://imgs.xkcd.com/comics/unpopular_opinions.png',
			alt: 'yee haw'
		}
	}

	render() {
		return (
			<div>
				<img src={this.state.img} alt={this.state.alt} />
			</div>
		)
	}
}

export default Image