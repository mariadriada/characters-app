import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types';

import { loadCharacters, goToDetails, cleatIdsDetails, setSubtitle } from '../../actions'
import Character from './Character'
import SearchBar from '../SearchBar'

import Button from '@material-ui/core/Button';
import './styles.scss'

class CharactersGrid extends Component {  

    // Load characters in case not are loaded
    componentDidMount() {   
        // Clear subtitle property of Header
        this.props.setSubtitle('')
        // Clear ids of details  when load character grid    
        this.props.cleatIdsDetails()
        if(!this.props.characters.length) this.props.loadCharacters()
    }
    
    // Pass history to Character component {child}
    getChildContext() {
        return {
          history: this.props.history
        }
    }

    render(){
        const { characters, error, isLoading, filterState, charactersFilter, goToDetails } = this.props
        const dataCharacters = filterState ? charactersFilter : characters
        return(
            <div> 
                <div className="contentChatacters"> 
                    <div className="search-container"><SearchBar/></div>           
                    <section className="grid">
                        {dataCharacters.map(character => (
                        <Character character={character} key={character.id}/>
                        ))}
                    </section>

                    { isLoading && <div className="loading">
                            <h1>Rick and Morty - Characters</h1><br/>
                            <h2>...Loading...</h2>                    
                    </div> } 
                    
                    { error && <div className="error">{JSON.stringify(error)}</div> }     


                    <Button id="btn-go-details" variant="contained" color="primary" 
                        onClick={(e) => (this.props.history.navigateTo='/details') && 
                                        goToDetails(this.props.history) }> 
                        Show details
                    </Button>               
                </div>
            </div>
        )
    }  
}

// Define properties to pass to child
CharactersGrid.childContextTypes = {
    history: PropTypes.object
}

const mapStateToProps = ({isLoading, characters, error, filterState, charactersFilter }) => ({
    isLoading,
    characters,
    error,
    filterState,
    charactersFilter
})

const mapDispatchToProps = dispatch => ({
    loadCharacters: () => dispatch(loadCharacters()) , 
    goToDetails: (history) => dispatch(goToDetails(history)),
    cleatIdsDetails: () => dispatch(cleatIdsDetails()),
    setSubtitle: (subtitle) => dispatch(setSubtitle(subtitle)) 
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CharactersGrid)
