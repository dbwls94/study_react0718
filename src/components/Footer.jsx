import React from 'react';
import style from '../index.css';

const Footer = () => {
    return (
        <div className={style.footer}>
            <div className={style.footer_logo}>
                <img crossorigin="anonymous" alt="GDG Kuala Lumpur Logo" data-src="https://res.cloudinary.com/shangyilim/image/upload/v1554985776/new-gdgkl.svg" src="https://res.cloudinary.com/shangyilim/image/upload/v1554985776/new-gdgkl.svg"/>
            </div>
            <div className={style.footer_link}>
                    <a href="https://events.gdgkl.org/ioxkl19/">I/O Extended KL 2019</a>
                    <a href="#">Schedule</a>
                    <a href="#">Speakers</a>
                    <a href="#">FAQ</a>
                    <a href="#">Community Guidelines</a>
            </div>
        </div>
    )
}

export default Footer;