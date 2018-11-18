import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {
    render() {
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="demo-grid-1">
                    <Cell col={4}></Cell>
                    <Cell col={4}>
                        <img className="myAvatar" src={require('../../img/andre.jpg')} alt="My avatar"/>
                        <h1>André Borges</h1>
                        <h2>Full Stack Developer</h2>
                    </Cell>
                    <Cell col={4}></Cell>
                </Grid>
            </div>
        );
    }
}

export default Landing;