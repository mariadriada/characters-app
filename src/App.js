import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'

import CharactersGrid from './components/CharactersGrid/'
import CharacterDetails from './components/CharacterDetails'
import Header from './components/Header'
import configureStore from './store'

import './App.scss'

const store = configureStore()

class App extends Component {  
  render() {
    return (   
      <Provider store={store}>  
        <BrowserRouter>
          <Fragment>  
            <Header/>               
            <Switch>                    
              <Route exact path='/' component={CharactersGrid}></Route>
              <Route exact path='/details' component={CharacterDetails}></Route>
              <Route exact path='/details/:id' component={CharacterDetails}></Route>
            </Switch>
          </Fragment>
        </BrowserRouter>
      </Provider> 
    );
  }
}

export default App;