import React from 'react';
import style from '../index.css';

const Content = (props) => {
    return (
        <div className={style.content}>
            {props.children}
        </div>
    )
}

export default Content;