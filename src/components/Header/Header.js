import React, { Component } from 'react'
import { connect } from 'react-redux'

import './styles.scss'

class Header extends Component{

    render(){     
        const {subtitle} = this.props   
        return(
            <header>
                <h1>{this.props.title}</h1>
                <h2>{subtitle}</h2>
            </header>
        )
    }
}

Header.defaultProps = {
    title: 'Rick and morty - Characters'
}

const mapStateToProps = ({ subtitle }) => ({
    subtitle
})

export default connect(
    mapStateToProps
)(Header)

