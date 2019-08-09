import React from 'react'
import Header from './Header'
import Image from './Image'
import './App.css'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      maxNum: undefined,
      month: undefined,
      id: undefined,
      year: undefined,
      transcript: undefined,
      alt: undefined,
      img: undefined,
      title: undefined,
      day: undefined,
      transcriptBool: false
    }

    this.handleFormChange = this.handleFormChange.bind(this)
    this.handleTranscriptButton = this.handleTranscriptButton.bind(this)

    this.child = React.createRef()
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
      this.child.current.handleButtonFix()
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

  handleTranscriptButton() {
    this.setState(state => {
        return { transcriptBool: !state.transcriptBool }
    })
  }
  
  render() {
    return (
      <div id='appContainer'>
        <Header ref={this.child} maxNum={this.state.maxNum} handleFormChange={this.handleFormChange} handleTranscriptButton={this.handleTranscriptButton} id={this.state.id} day={this.state.day} month={this.state.month} year={this.state.year} transcript={this.state.transcript} alt={this.state.alt} title={this.state.title} />
        {this.state.transcriptBool ? <p id='transcriptText'>{this.state.transcript ? this.state.transcript : 'Transcript unavailable for this comic'}</p> : <Image img={this.state.img} />}
        <p id='footer'>by Dawid Mucha | source code: soon™</p>
      </div>
    )
  }
}

export default App
