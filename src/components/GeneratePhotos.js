import React, { Component } from 'react'
import Fintechtocat from '../octocats/Fintechtocat(pic1).png'
import Brennatocat from '../octocats/Brennatocat(pic2).png'
import Bannekat from '../octocats/bannekat(pic3).png'
import FoundingFatherV2 from '../octocats/foundingfather_v2(pic4).png'
import Stormtrooper from '../octocats/stormtroopocat(pic5).png'
import Heisencat from '../octocats/heisencat(pic6).png'

class GeneratePhotos extends Component {
  render() {
    return (
      <main className="margin">
        <ul>
          <li>
            <img src={Fintechtocat} />
          </li>
          <li>
            <img src={Brennatocat} />
          </li>
          <li>
            {' '}
            <img src={Bannekat} />{' '}
          </li>
        </ul>
        <ul>
          <li>
            {' '}
            <img src={FoundingFatherV2} />{' '}
          </li>
          <li>
            {' '}
            <img src={Stormtrooper} />
          </li>
          <li>
            {' '}
            <img src={Heisencat} />
          </li>
        </ul>
      </main>
    )
  }
}

export default GeneratePhotos
