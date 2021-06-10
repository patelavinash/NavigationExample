import React from 'react';
import {NavLink} from 'react-router-dom'

const Menu = () =>
{
    return(
        <>
            <NavLink className="display-4" to="/">Home</NavLink>
            <NavLink className="display-4" to="/about">About Us</NavLink>
            <NavLink className="display-4" to="/contact">Contact Us</NavLink>
        </>   
            
    );
};

export default Menu;