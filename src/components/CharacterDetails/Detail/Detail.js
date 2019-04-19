import React, { Component } from 'react'

import './styles.scss'

class Detail extends Component{
    render(){
        const { detail, key } = this.props
        return(
            <div className="detail-container" key={detail.id}>
                <div className="detail-img">
                    <img src={detail.image} alt={detail.type} />                            
                </div>
                <div className="detail-text">
                    <div className="detail-line">
                        <span>Name: </span><span>{detail.name}</span>
                    </div>
                    <div className="detail-line">
                        <span>Gender: </span><span>{detail.gender}</span>
                    </div>
                    <div className="detail-line">
                        <span>Species: </span><span>{detail.species}</span>
                    </div>
                    <div className="detail-line">
                        <span>Type: </span><span>{detail.type}</span>
                    </div>                            
                </div>
            </div>
        )
    }
}

Detail.props = {
    detail: {},
    key: 0
}

export default Detail