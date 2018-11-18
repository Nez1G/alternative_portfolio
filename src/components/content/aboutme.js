import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class About extends Component {
    constructor(props) {
        super(props);
        this.handleHover = this.handleHover.bind(this);
        this.state = {
            isColored : false
        };
    }
    handleHover(){
        this.setState({isColored : !this.state.isColored});
    }
    getAge(){
        return new Date().getMonth > 9 ? (new Date().getFullYear() - 1997) : (new Date().getFullYear() - 1997 - 1);
    }
    render() {
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="demo-grid-1">
                    <Cell col={2}></Cell>
                    <Cell col={8}>
                        <h1>O meu nome é André Borges</h1>
                        <p>
                            E sou um Full Stack Developer. Tenho {this.getAge()} anos mas, foi de pequeno
                            que nasceu o meu amor pela tecnologia, ... Não sou ... agnóstico, na minha opinião ..., gosto de 
                            exprimentar novas tecnologias. 
                        </p>
                        <p>And I am a 27 year old Front-end developer from Warsaw. I've always been
                             fascinated with development of websites and appliactions, and so I've decided to 
                             change that interest into a career. Despite aquiring quite a lot of knowledge in 
                             a relatively short time I'm not resting on laurels and I'm constantly expanding my
                             skill set, so I can write better code and create more complicated projects. I'm a 
                             huge fan of BEM methodology, semantics and flat specificity, also in web design I 
                             prefer simplicity and minimalism over fireworks and unnecesary animations.</p>
                        <br/>
                        <h2>Algumas das ferramentas que gosto de usar:</h2>

                        <ul className="skills">
                            <li class="skills__skill">
                                <i className={this.state.isColored ? "devicon-html5-plain colored" : "devicon-html5-plain"}
                                onMouseEnter={this.handleHover} onMouseLeave={this.handleHover} aria-hidden="true" />
                                <p class="skills__text">HTML5</p>
                            </li>
                            <li class="skills__skill">
                                <i className={this.state.isColored ? "devicon-java-plain colored" : "devicon-java-plain"}
                                onMouseEnter={this.handleHover} onMouseLeave={this.handleHover} aria-hidden="true" />
                                <p class="skills__text">Java</p>
                            </li>
                            <li class="skills__skill">
                                <i className={this.state.isColored ? "devicon-csharp-plain colored" : "devicon-csharp-plain"}
                                onMouseEnter={this.handleHover} onMouseLeave={this.handleHover} aria-hidden="true" />
                                <p class="skills__text">C#</p>
                            </li>
                            <li class="skills__skill">
                                <i className={this.state.isColored ? "devicon-javascript-plain colored" : "devicon-javascript-plain"}
                                onMouseEnter={this.handleHover} onMouseLeave={this.handleHover} aria-hidden="true" />
                                <p class="skills__text">JavaScript</p>
                            </li>
                        </ul>
                    </Cell>
                    <Cell col={2}></Cell>
                </Grid>
            </div>
        );
    }
}

export default About;

