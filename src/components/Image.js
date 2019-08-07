import React from 'react'

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
			<div>
				<img src={this.props.img} alt={this.state.alt} />
				<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
				hi
			</div>
		)
	}
}

export default Image