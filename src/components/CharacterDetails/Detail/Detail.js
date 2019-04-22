import React, { Component } from 'react'

import './styles.scss'

class Detail extends Component{

    render(){
        const { detail } = this.props
        return(
            <div className="detail-container" key={detail.id}>
                <div className="detail-img">
                    <img src={detail.image} alt={detail.type} />                            
                </div>
                <div className="detail-text">
                    { detail.id &&
                    <div className="detail-line">
                        <span className="title">Id: </span><span>{detail.id}</span>
                    </div>} 
                   { detail.name &&
                    <div className="detail-line">
                        <span className="title">Name: </span><span>{detail.name}</span>
                    </div>}
                    { detail.gender &&
                    <div className="detail-line">
                        <span className="title">Gender: </span><span>{detail.gender}</span>
                    </div>}
                    { detail.species &&
                    <div className="detail-line">
                        <span className="title">Species: </span><span>{detail.species}</span>
                    </div> }
                    { detail.type &&
                    <div className="detail-line">
                        <span className="title">Type: </span><span>{detail.type}</span>
                    </div> } 
                    { detail.origin.name &&
                    <div className="detail-line">
                        <span className="title">Origin: </span><span>{detail.origin.name}</span>
                    </div> } 
                    { detail.location.name &&
                    <div className="detail-line">
                        <span className="title">Location: </span><span>{detail.location.name}</span>
                    </div> }   
                    <div className="detail-line">
                        <span className="title">URL: </span><span><a href={`/details/${detail.id}`}>Go to</a></span>
                    </div>                        
                </div>
            </div>
        )
    }
}

export default Detail