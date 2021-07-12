import React from 'react'
import {Link} from 'react-router-dom';
import '../index.css';

export const Header = () => {
    return (
        <>
            <ul className="itemsHeader">
                <Link to="/">
                    <li className="nav-links">Home</li>
                </Link>
                <Link to="./Favoris">
                    <li className="nav-links">Favoris</li>
                </Link>
            </ul>
        </>
    )
}


