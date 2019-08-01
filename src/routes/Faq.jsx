import React from 'react';
import style from '../index.css';
import Header from '../components/Header';
import Content from '../components/Content';
import Footer from '../components/Footer';

const Faq = () => {
    return (
        <div className={style.faq}>
            <Header>
                <h2>FAQ</h2>
            </Header>
            <Content>
                <div className={style.faq_item}>
                    <div className={style.aq_title}>General</div>
                    <div className={style.faq_content}>
                        <p><b>Session Schedule</b></p>
                        <p>The schedule can be found <a href="#">here</a>.</p>
                        <br/>
                        <p><b>Community Guidelines</b></p>
                        <p>Our community guidelines can be found <a href="#">here</a>. Be nice to each other, and be respectful and constructive.</p>
                        <br/>
                        <p><b>Date and location</b></p>
                        <p>I/O Extended 2019 Kuala Lumpur will take place on the 16th June 2019 at Sunway University, Bandar Sunway.</p>
                        <br/>
                        <p><b>Stay Informed</b></p>
                        <p>To stay up to date on the latest information on sessions, speakers, and activities, be sure to visit the I/O Extended 2019 Kuala Lumpur website, and follow us on <a href="https://www.facebook.com/GDGKualaLumpur/" target="_blank" rel="noopener noreferrer">Facebook Page</a>. You can also follow and join the social conversation about I/O Extended 2019 Kuala Lumpur via official hashtags <b>#ioxkl19</b>. In addition, we'll be emailing important information to all registered attendees, along with check-in instructions prior to the conference.</p>
                        <br/>
                        <p><b>Content Formats</b></p>
                        <p>During the conference, attendees will be able to attend sessions and hands-on workshops, chat with experts and attendees.</p>
                        <br/>
                        <p><b>Language</b></p>
                        <p>All presentations at I/O Extended 2019 Kuala Lumpur will be in English.</p>
                    </div>
                </div>
            </Content>
            <Footer/>
        </div>
    )
}

export default Faq;