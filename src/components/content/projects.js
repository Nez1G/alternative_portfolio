import React, { Component } from 'react';
import { Grid, Cell, Card, CardTitle, CardText, CardActions, Button } from 'react-mdl';

class Projects extends Component {
    render() {
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="demo-grid-1">
                    <Cell col={2}></Cell>
                    <Cell col={8}>
                        <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
                            <CardTitle expand style={{color: '#fff', background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC'}}>Condominiums</CardTitle>
                            <CardText>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Aenan convallis.
                            </CardText>
                            <CardActions border>
                                <Button colored>Ver código fonte</Button>
                            </CardActions>
                        </Card>
                        
                    </Cell>
                    <Cell col={2}></Cell>
                </Grid>
            </div>
        );
    }
}

export default Projects;