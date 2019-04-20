import React, { Component } from 'react'
import { connect } from 'react-redux'

import { addToDetails, removeToDetails } from '../../../actions'

import './styles.scss'

class Character extends Component {  
    
    //When be click in a checkbox
    pressCheck = (e) =>{
        e.checked ? this.props.addToDetails(e.value) : this.props.removeToDetails(e.value)
    }
    
    render(){
        const { character } = this.props
        return (
            <div className="item" key={character.id}>                
                <div className="checkDetails">
                    <input 
                        type="checkbox" 
                        value={character.id}
                        onChange={(e) => this.pressCheck(e.target)} 
                    /><span>More</span>
                </div>                
                <img onClick={()=>this.props.addToDetails(character.id.toString())}
                    src={character.image}
                    alt={character.name}
                />
                <div class="name">{character.name}</div>
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
    removeToDetails: (id) => dispatch(removeToDetails(id))
})

export default connect(
    null,
    mapDispatchToProps
)(Character)
