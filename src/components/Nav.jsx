import React from 'react';
import {Link} from 'react-router-dom';
import style from '../index.css';

const Nav = () => {
    return (
        <nav className={style.navbar}>
            <Link to='/' className={style.navitem}>Home</Link>
            <Link to='/faq' className={style.navitem}>FAQ</Link>
            <Link to='/schedule' className={style.navitem}>Schedule</Link>
            <Link to='/speakers' className={style.navitem}>Speakers</Link>
            <Link to='/map' className={style.navitem}>Map</Link>
        </nav>
    )
}

export default Nav;