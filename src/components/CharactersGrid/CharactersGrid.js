import React, { Component } from 'react'
import { connect } from 'react-redux'

import { loadCharacters } from '../../actions'
import Character from './Character'
import CharacterDetails from '../CharacterDetails'
import './styles.scss'

class CharactersGrid extends Component {   

    componentDidMount() {
        console.log('CharactersGrid')
        this.props.loadCharacters()
    }

    render(){
        const { characters, error, isLoading, filterCharactersDetails } = this.props;
        return(
            <div className="contentChatacters">
                <section className="grid">
                    {characters.map(character => (
                       <Character character={character} key={character.id}/>
                    ))}
                </section>
                { isLoading && <div className="loading">...loading...</div> }
                { error && <div className="error">{JSON.stringify(error)}</div> } 

                <section>
                    <CharacterDetails />
                </section>

                <button onClick={() => console.log('click')}> 
                    details
                </button>
                          
            </div>
        )
    }  
}

const mapStateToProps = ({isLoading, characters, error }) => ({
    isLoading,
    characters,
    error
})

const mapDispatchToProps = dispatch => ({
    loadCharacters: () => dispatch(loadCharacters())  
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CharactersGrid)
