import React, { Component } from 'react';

import CharactersGrid from './components/CharactersGrid'

import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CharactersGrid></CharactersGrid>
      </div>
    );
  }
}

export default App;
