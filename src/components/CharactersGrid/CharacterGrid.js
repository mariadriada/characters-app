import React, { Component } from 'react'

import Character from './Character'

import './styles.scss'

const URL = "https://rickandmortyapi.com/api/character"


class CharacterGrid extends Component {
   
    state = {
        characters: []
    }

    async componentDidMount() {
        await fetch(`${URL}`)

        .then(res => res.json())
        .then(images => {
            this.setState({
                characters: images.results
            })
        })
    }

    render(){
        const { characters } = this.state
        return(
            <div className="contentChatacters">
                <div className="grid">
                    {characters.map(character => (
                       <Character character={character} />
                    ))}
                </div>
            </div>
        )
    }
  
}

export default CharacterGrid