import React from 'react'
import Header from './Header'
import Image from './Image'

class App extends React.Component {
  componentDidMount() {
    fetch('https://cors-anywhere.herokuapp.com/https://xkcd.com/info.0.json').then(result => {
      return result.json()
    }).then(data => {
      console.log(data)
    }).catch(e => {
      console.log(e)
      return e
    })
  }
  
  render() {
    return (
      <div>
        <Header />
        <Image />
        <p>by Dawid Mucha | source code: soon™</p>
      </div>
    )
  }
}

export default App
