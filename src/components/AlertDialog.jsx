import React from 'react';
import style from '../index.css';

const AlertDialog = () => {
    return (    
        <div className={style.dialog_wrap}>
            <div className={style.dialog}>
                <div className={style.dialog_header}>
                    Keynote
                </div>
                <div className={style.dialog_body}>
                    9:30AM - 9:50AM, JC 1<br/>
                    Join us to learn about product and platform innovation at Google.
                </div>
            </div>
        </div>
    )
}

export default AlertDialog;