import React from 'react'
import Header from './Header'
import Image from './Image'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      maxNum: 0,
      month: undefined,
      id: undefined,
      year: undefined,
      transcript: undefined,
      alt: undefined,
      img: undefined,
      title: undefined,
      day: undefined
    }

    this.handleFormChange = this.handleFormChange.bind(this)
  }

  componentDidMount() {
    fetch('https://cors-anywhere.herokuapp.com/https://xkcd.com/info.0.json').then(result => {
      return result.json()
    }).then(data => {
      this.setState({
        maxNum: data.num,
        id: data.num 
      })
      this.handleFormChange(this.state.id)
    }).catch(e => {
      console.log(e)
      return e
    })
  }

  handleFormChange(id) {
    this.setState({ id })
    
    fetch(`https://cors-anywhere.herokuapp.com/https://xkcd.com/${this.state.id || this.state.maxNum}/info.0.json`).then(result => {
      return result.json()
    }).then(data => {
      this.setState({
        month: data.month,
        img: data.img,
        year: data.year,
        transcript: data.transcript,
        alt: data.alt,
        title: data.title,
        day: data.day
      })
    })
  }
  
  render() {
    return (
      <div>
        <Header maxNum={this.state.maxNum} handleFormChange={this.handleFormChange} id={this.state.id} day={this.state.day} month={this.state.month} year={this.state.year} transcript={this.state.transcript} alt={this.state.alt} title={this.state.title} />
        <Image img={this.state.img} />
        <p>by Dawid Mucha | source code: soon™</p>
      </div>
    )
  }
}

export default App
