import React from 'react';
import { NavLink } from 'react-router';

const NavBar = () => {
    return (
        <div>
            <h1 className="title">BD Store</h1>
            <NavLink to="/products">Products</NavLink>
            <NavLink to="/count">Count</NavLink>
            <NavLink to="/about">About</NavLink>
        </div>
    );
};

export default NavBar;