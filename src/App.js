import React, { Component } from 'react';
import {DefaultContainer} from './components/layout'


import './App.css';
import Metronome from './metronome/containers/Metronome'

class App extends Component {
  render() {
    return (
      <div className="App">
        <DefaultContainer>
          <div className='components-layout v-flex-content center main-container'>
            <Metronome/>
          </div>
        </DefaultContainer>
      </div>
    );
  }
}

export default App;
