import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';

import { addToDetails, removeToDetails, goToDetails } from '../../../actions'

import './styles.scss'

class Character extends Component {  
   
    render(){
        const { character } = this.props
        return (
            <div className="item" key={character.id}>                
                <div className="checkDetails">
                    <input 
                        type="checkbox" 
                        value={character.id}
                        onChange={(e) => {
                            e.target.checked ? this.props.addToDetails(e.target.value) : 
                            this.props.removeToDetails(e.target.value)
                        }} 
                    /><span>More</span>
                </div>                
                <img onClick={() => this.props.addToDetails(character.id.toString()) &&
                                    (this.context.history.navigateTo='/details') &&
                                    this.props.goToDetails(this.context.history)}
                    src={character.image}
                    alt={character.name}
                />
                <div className="name">{character.name}</div>
            </div>
        )
    }
}

// Recibe history property from parent component
Character.contextTypes = {
    history: PropTypes.object
}

const mapStateToProps = ({isLoading, characters, history }) => ({
    isLoading,
    characters,
    history
})

const mapDispatchToProps = dispatch => ({
    addToDetails: (id) => dispatch(addToDetails(id)),    
    removeToDetails: (id) => dispatch(removeToDetails(id)),
    goToDetails: (history) => dispatch(goToDetails(history))
})

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(Character))
