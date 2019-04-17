import React, { Component } from 'react'

import './styles.scss'

class Character extends Component {    
    render(){
        const { key, character } = this.props
        return (
            <div className="item" key={character.id}>
                <div className="checkDetails">
                    <input type="checkbox" />More details
                </div>
                <span>{character.name}</span>
                
                <img
                    src={character.image}
                    alt={character.name}
                />
            </div>
        )
    }
}

Character.props = {
    character: {}
}

export default Character