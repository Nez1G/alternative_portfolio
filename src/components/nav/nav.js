import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Header, Navigation, Drawer, Switch } from 'react-mdl';
import '../../../src/App.css';

class Nav extends Component {
    render() {
        return(
            <div className="nav">
                <div className="header">
                <Header className="header-color" title={<Link style={{textDecoration: 'none', color: '#73808D'}} to="/">ab<span className="blink">_</span></Link>}>
                    <Navigation style={{color: '#73808D'}}>
                        <Link to="/">Home</Link>
                        <Link to="/aboutme">About</Link>
                        <Link to="/projects">Projects</Link>
                        <Link to="/contact">Contact</Link>
                        <div>
                            <i className="fa fa-sun" aria-hidden="true"/>
                            <Switch id="switch2"></Switch>
                            <i className="fa fa-moon" aria-hidden="true"/>
                        </div>
                    </Navigation>
                </Header>
                </div>
                <div className="drawer">
                <Drawer title={<Link style={{textDecoration: 'none', color: '#73808D'}} to="/">ab<span className="blink">_</span></Link>}>
                    <Navigation>
                        <Link to="/">Home</Link>
                        <Link to="/aboutme">About</Link>
                        <Link to="/projects">Projects</Link>
                        <Link to="/contact">Contact</Link>
                        <Switch id="switch2"></Switch>
                    </Navigation>
                </Drawer>
                </div>
            </div>
        );
    }
}

export default Nav;