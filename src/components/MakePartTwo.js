import React, { Component } from 'react'
import MakePartOne from './MakePartOne'

import Fintechtocat from '../octocats/Fintechtocat(pic1).png'
import Brennatocat from '../octocats/Brennatocat(pic2).png'
import Bannekat from '../octocats/bannekat(pic3).png'
import FoundingFatherV2 from '../octocats/foundingfather_v2(pic4).png'
import Stormtrooper from '../octocats/stormtroopocat(pic5).png'
import Heisencat from '../octocats/heisencat(pic6).png'

const images = [
  { name: 'Fintechtocat', imageUrl: Fintechtocat },
  { name: 'Brennatocat', imageUrl: Brennatocat },
  { name: 'Bannekat', imageUrl: Bannekat },
  { name: 'FoundingFatherV2', imageUrl: FoundingFatherV2 },
  { name: 'Stormtroopercat', imageUrl: Stormtrooper },
  { name: 'Heisencat', imageUrl: Heisencat }
]

class MakePartTwo extends Component {
  render() {
    return (
      <ul>
        {images.map(image => {
          return <MakePartOne name={image.name} imageUrl={image.imageUrl} />
        })}
      </ul>
    )
  }
}

export default MakePartTwo
