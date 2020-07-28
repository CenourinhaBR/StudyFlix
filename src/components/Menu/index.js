import React from 'react';
import Logo from '../../assets/Img/Logo.png'
import { Link } from 'react-router-dom'

import Button from '../Button'

import './style.css'

function Menu() {
    return (
        <nav className="Menu">
            <Link to="/">
            <img src={Logo} alt="Logo da DevFlix" className="Logo" />
            </Link>

            <Button as={Link}className="ButtonLink" to="/registrar/novovideo">
                Novo video 
            </Button>
        </nav>
    )
}

export default Menu;