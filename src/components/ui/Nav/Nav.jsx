import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { categories } from '../../../utils/Utils';
import classes from './nav.module.css';
import smileySvg from '../../../img/smiley_logo.svg';

const Nav = () => {
    const { pathname } = useLocation();
    console.log(pathname);
    return (
        <div className={classes['nav-wrapper']}>
            <ul className={classes['nav-ul']}>
                {Object.entries(categories).map((item) => {
                    console.log(item[0], pathname);
                    return (
                        <li key={item[0]}>
                            <Link
                                to={item[0]}
                                className={
                                    pathname === item[0] ? classes.active : null
                                }
                            >
                                {item[1]}
                            </Link>
                        </li>
                    );
                })}
            </ul>

            <div className={classes['nav-logo']}>
                <Link to='/random'>
                    <h1>
                        NO MORE{' '}
                        <span className={classes['nav-logo-yellow']}>
                            BORED
                        </span>
                    </h1>
                </Link>
                <img src={smileySvg} alt='' />
            </div>
        </div>
    );
};

export default Nav;
