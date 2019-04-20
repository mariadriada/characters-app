import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'

import CharactersGrid from './components/CharactersGrid/'
import CharacterDetails from './components/CharacterDetails'

import configureStore from './store'
const store = configureStore()

class App extends Component {  
  render() {
    return (   
      <Provider store={store}>  
        <BrowserRouter>
          <Fragment>                        
            <Switch>                    
              <Route exact path='/' component={CharactersGrid}></Route>
              <Route exact path='/details' component={CharacterDetails}></Route>
            </Switch>
          </Fragment>
        </BrowserRouter>
      </Provider> 
    );
  }
}

export default App;