import React, { Component } from 'react';
import { Provider } from 'react-redux'

import CharactersGrid from './components/CharactersGrid/'

import configureStore from './store'
const store = configureStore()

class App extends Component {
  render() {
    return (
      <Provider store = {store}>                  
          <CharactersGrid/>              
      </Provider>
    );
  }
}

export default App;
