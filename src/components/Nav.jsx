import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../utils/Utils';

const Nav = () => {
    return (
        <div>
            <ul>
                {Object.entries(categories).map((item) => (
                    <li key={item[0]}>
                        <Link to={item[0]}>{item[1]}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Nav;
