import React, { Component } from 'react'
import NavBar from './components/NavBar'
// import GeneratePhotos from './components/GeneratePhotos'
import MakePartTwo from './components/MakePartTwo'

class App extends Component {
  render() {
    return (
      <main>
        <NavBar />
        <MakePartTwo />
      </main>
    )
  }
}

export default App
