import React, { Component } from 'react'
import { connect } from 'react-redux'

import { loadCharacterDetails, setSubtitle } from '../../actions'
import Detail from './Detail'

import './styles.scss'

class CharacterDetails extends Component {

    componentDidMount() {   
        // Set subtitle property of Header
        this.props.setSubtitle('Details of characters selected')  

        // If Request is from URL directly, get data from API
        let params = this.props.match.params 
        let ids   
        if (params.id) {
            ids = params.id.split(',')
            this.props.loadCharacterDetails(ids)
        }
    }
   
    // Filter details of characters selected to review 
    filterDetails(){ 
        return this.props.characters.filter(e => this.props.idsDetails.indexOf(e.id.toString())!==-1)
    }

    render() {
        const { charactersDetails } = this.props
        const filter = charactersDetails.length ? charactersDetails : this.filterDetails()
        
        return (
            <div>  
                <section className="container-details"> 
                    { filter.map(detail => (
                        <Detail key={detail.id} detail={detail}/>
                    )) }
                </section>
            </div>
        )
    }
}

const mapStateToProps = ({ characters, idsDetails, charactersDetails }) => ({
    characters,
    idsDetails,
    charactersDetails
})

const mapDispatchToProps = dispatch => ({
    setSubtitle: (subtitle) => dispatch(setSubtitle(subtitle)),
    loadCharacterDetails: (id) =>  dispatch(loadCharacterDetails(id))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CharacterDetails)
