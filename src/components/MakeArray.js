import React, { Component } from 'react'
import Fintechtocat from '../octocats/Fintechtocat(pic1).png'
import Brennatocat from '../octocats/Brennatocat(pic2).png'
import Bannekat from '../octocats/bannekat(pic3).png'
import FoundingFatherV2 from './octocats/foundingfather_v2(pic4).png'
import Stormtrooper from '../octocats/stormtroopocat(pic5).png'
import Heisencat from '../octocats/heisencat(pic6).png'

const images = [
  { name: 'Fintechtocat', image: '../octocats/Fintechtocat(pic1).png' },
  { name: 'Brennatocat', image: '../octocats/Brennatocat(pic2).png' },
  { name: 'Bannekat', image: '../octocats/bannekat(pic3).png' },
  {
    name: 'FoundingFatherV2',
    image: '../octocats/foundingfather_v2(pic4).png'
  },
  { name: 'Stormtroopercat', image: '../octocats/stormtroopocat(pic5).png' },
  { name: 'Heisencat', image: '../octocats/heisencat(pic6).png' }
]

class CreateArray extends Component {
  render() {
    return (
      <main>
        <h1>Fintechtocat</h1> {this.props.image}
      </main>
    )
  }
}

export default CreateArray
