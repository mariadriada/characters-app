import React, { Component } from 'react'
import { connect } from 'react-redux'

import Detail from './Detail'
import './styles.scss'

class CharacterDetails extends Component {

    // Filter details of characters selected to review 
    filterDetails(){        
        return this.props.characters.filter(e => this.props.idsDetails.indexOf(e.id.toString())!==-1)
    }

    render() {
        const { characters, idsDetails } = this.props
        const filter = this.filterDetails()
        return (
            <div className="container-details">
                contiene personajes
                { filter.map(detail => (
                    <Detail key={detail.id} detail={detail}/>
                )) }
            </div>
        )
    }
}

const mapStateToProps = ({ characters, idsDetails }) => ({
    characters,
    idsDetails
})

export default connect(
    mapStateToProps,
    null
)(CharacterDetails)
