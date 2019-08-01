import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Nav from './Nav';
import Home from '../routes/Home';
import Faq from '../routes/Faq';
import Schedule from '../routes/Schedule';
import style from '../index.css';

const App = () => {
    return (
        <Router>
            <Nav/>
            <div className={style.container}>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/faq' component={Faq}/>
                    <Route path='/schedule' component={Schedule}/>
                    {/* 
                    <Route path='/speakers' component={Speakers}/>
                    <Route path='/map' component={Map}/> */}
                </Switch>
            </div>
        </Router>
    )
}

export default App;