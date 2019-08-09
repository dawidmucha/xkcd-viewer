import React from 'react'
import './Image.css'

class Image extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			img: undefined,
			alt: 'yee haw'
		}
	}

	render() {
		return (
			<div id='imageContainer'>
				<img id='image' src={this.props.img} alt={this.state.alt} />
			</div>
		)
	}
}

export default Image