import React from 'react';
import { NavLink } from 'react-router';

const NavBar = () => {
    return (
        <div>
            <h1 className="title bg-amber-200 text-center font-bold text-4xl p-4">BD Store</h1>
            <div className='flex justify-between border border-amber-950 p-2'>
                <NavLink className='bg-amber-400 p-1 rounded hover:bg-amber-700' to="/products">Products</NavLink>
                <NavLink className='bg-amber-400 p-1 rounded hover:bg-amber-700' to="/count">Count</NavLink>
                <NavLink className='bg-amber-400 p-1 rounded hover:bg-amber-700' to="/about">About</NavLink>
            </div>
        </div>
    );
};

export default NavBar;