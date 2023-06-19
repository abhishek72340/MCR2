import React from 'react'
import './Navbar.css';
import { NavLink } from 'react-router-dom';
import { background } from '@chakra-ui/react';
export default function Navbar() {

    return (
        <div id='nav'>
            <NavLink to='/' ><div className='link' >
                Home
            </div></NavLink>
            <NavLink to='archieve' ><div className='link'>
                Archieve
            </div></NavLink>
            <NavLink to='trash' > <div className='link'>
                Trash
            </div></NavLink>
        </div>
    )
}
