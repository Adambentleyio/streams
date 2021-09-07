import React from 'react'
import { Link } from 'react-router-dom'
import GoogleAuth from './GoogleAuth'

const Header = () => {
    return (
        <div className="ui secondary pointing menu">
            <div className="Left menu">
                <Link to="">Streeem</Link>
            </div>
            <div className="right menu">
                <Link to="">All Streams</Link>
                <GoogleAuth />
            </div>
        </div>
    )
}

export default Header
