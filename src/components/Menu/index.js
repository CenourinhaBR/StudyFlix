import React from 'react';
import Logo from '../../assets/Img/Logo.png'
import ButtonLink from './components/ButtonLink'

import Button from '../Button'

import './style.css'

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
            <img src={Logo} alt="Logo da DevFlix" className="Logo" />
            </a>

            <Button as="a" className="ButtonLink" href="/">
                Novo video 
            </Button>
        </nav>
    )
}

export default Menu;