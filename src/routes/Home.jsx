import React from 'react';
import style from '../index.css';
import Header from '../components/Header';
import Content from '../components/Content';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div className={style.home}>
            <Header>
                <h2>Home</h2>
                <br/>
                <h4>16 June 2019 · Sunway University, Bandar Sunway</h4>
            </Header>
            <Content>
                <div className={style.img_area}>
                    <img alt="thumbnail" id="cover" crossorigin="anonymous" data-src="https://res.cloudinary.com/limhenry/image/upload/v1536157604/devfestkl18_pwa/misc/cover.jpg" src="https://res.cloudinary.com/limhenry/image/upload/v1536157604/devfestkl18_pwa/misc/cover.jpg"/>
                </div>
            </Content>
            <Footer/>
        </div>
    )
}

export default Home;