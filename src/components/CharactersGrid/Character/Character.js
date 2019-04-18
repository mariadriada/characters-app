import React, { Component } from 'react'
import { connect } from 'react-redux'

import { addToDetails } from '../../../actions'

import './styles.scss'

class Character extends Component {    
    render(){
        const { character, addToDetails } = this.props
        return (
            <div className="item" key={character.id}>
                <div className="checkDetails">
                    <input type="checkbox" onClick={() => addToDetails(character.id)} />More details
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
    character: {},
    key:0
}

const mapDispatchToProps = dispatch => ({
    addToDetails: (id) => dispatch(addToDetails(id)),    
})

export default connect(
    null,
    mapDispatchToProps
)(Character)
