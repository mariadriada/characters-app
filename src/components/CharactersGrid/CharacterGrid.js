import React, { Component } from 'react'
import { connect } from 'react-redux'

import { loadCharacters } from '../../actions'
import Character from './Character'

import './styles.scss'

class CharacterGrid extends Component {   

    componentDidMount() {
        this.props.loadCharacters()
    }

    render(){
        const { characters } = this.props;
        return(
            <div className="contentChatacters">
                <div className="grid">
                    {characters.map(character => (
                       <Character character={character} key={character.id}/>
                    ))}
                </div>
            </div>
        )
    }  
}

const mapStateToProps = ({isLoading, characters, error }) => ({
    isLoading,
    characters,
    error,
})

const mapDispatchToProps = dispatch => ({
    loadCharacters: () => dispatch(loadCharacters()) 
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CharacterGrid)
