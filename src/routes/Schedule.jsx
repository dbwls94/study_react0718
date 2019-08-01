import React from 'react';
import style from '../index.css';
import Header from '../components/Header';
import Content from '../components/Content';
import Footer from '../components/Footer';
import AlertDialog from '../components/AlertDialog';

const Schedule = () => {
    const handleClick = (e) => {
        const dialog = document.getElementsByClassName('dialog_wrap');
        if(dialog.style.display=='none'){
            dialog.style.display = 'block';
        } else{
            dialog.style.display = 'none';
        }
    }

    return (
        <div className={style.schedule}>
            <Header>
                <h2>Schedule</h2>
                <p>All sessions feature a Q&A session at the end, time permitting.</p>
            </Header>
            <Content>
                <ul className={style.tabs}>
                    <li className={style.tab} active="true"><button type="button">All</button></li>
                    <li className={style.tab}><button type="button">My Schedule</button></li>
                </ul>
                <div className={style.schedule_section_wrap}>
                    <div className={style.schedule_section}>
                        <div className={style.time}>9:00<span>AM</span></div>
                        <div className={style.event_area}>
                            <strong className={style.title}>Keynote Preshow</strong>
                            <div className={style.info}>
                                <span className={style.description}>10 mins / JC 1</span>
                                <button type="button" className={style.btn_pop} onClick={handleClick}>Keynote</button>
                            </div>
                        </div>
                    </div>
                    <div className={style.schedule_section}>
                        <div className={style.time}>9:10<span>AM</span></div>
                        <div className={style.event_area}>
                            <strong className={style.title}>Opening</strong>
                            <div className={style.info}>
                                <span className={style.description}>10 mins / JC 1</span>
                                <button type="button" className={style.btn_pop} onClick={handleClick}>Cloud</button>
                            </div>
                        </div>
                    </div>
                </div>
                <AlertDialog/>
            </Content>
            <Footer/>
        </div>
    )
}

export default Schedule;