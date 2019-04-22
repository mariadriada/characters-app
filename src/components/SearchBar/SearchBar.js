import React, { Component } from 'react';
import { connect } from 'react-redux'

import { activeSearchCharacters, inactiveSearchCharacters } from '../../actions'

import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

import './styles.scss'

class SearchBar extends Component{
  
  onChange(e){
    // Active searchin when there are 3 or more letters writed
    if (e.target.value.length >=3)
      this.props.activeSearchCharacters(e.target.value)
    else
      // Unactive the searching
      this.props.inactiveSearchCharacters()
  }

  render(){
      return (
        <Paper className="root" elevation={1}>
          <IconButton className="iconButton" aria-label="Search">
            <SearchIcon/>
          </IconButton>
          <InputBase id="inputSearch" className="input-container" placeholder="Search courses and providers"
          onKeyUp={(e)=> this.onChange(e)}/>      
        </Paper>
      )
    }   
}

const mapDispatchToProps = dispatch => ({
  activeSearchCharacters: (text) => dispatch(activeSearchCharacters(text)),
  inactiveSearchCharacters: () => dispatch(inactiveSearchCharacters())
})

export default connect(
  null,
  mapDispatchToProps
)(SearchBar)