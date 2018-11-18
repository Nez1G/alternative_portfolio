import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent, Link } from 'react-mdl';

class Contact extends Component {
    render() {
        return(
            <div className="contact-body" style={{width: '100%', margin: 'auto'}}>
                <h1>Get in touch with me</h1>
                <Grid className="contact-grid">
                    <Cell col={6}>
                    <p>And I am a 27 year old Front-end developer from Warsaw. I've always been
                             fascinated with development of websites and appliactions, and so I've decided to 
                             change that interest into a career. Despite aquiring quite a lot of knowledge in 
                             a relatively short time I'm not resting on laurels and I'm constantly expanding my
                             skill set, so I can write better code and create more complicated projects. I'm a 
                             huge fan of BEM methodology, semantics and flat specificity, also in web design I 
                             prefer simplicity and minimalism over fireworks and unnecesary animations.</p>
                    </Cell>
                    <Cell col={6}>
                    <List>
                        <ListItem>
                            <Link>
                                <ListItemContent icon={<i className="fa fa-envelope" aria-hidden="true"/>}>a-filipe@hotmail.fr</ListItemContent>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <ListItemContent icon={<i className="devicon-github-plain" aria-hidden="true"/>}>O meu perfil do GitHub</ListItemContent>
                        </ListItem>
                        <ListItem>
                            <ListItemContent icon={<i className="fa fa-linkedin-square" aria-hidden="true"/>}>O meu perfil do LinkedIN</ListItemContent>
                        </ListItem>
                        <ListItem>
                            <ListItemContent icon={<i className="fa fa-instagram" aria-hidden="true"/>}>O meu perfil do Istagram</ListItemContent>
                        </ListItem>
                    </List>
                        <ul className="socials">
                            {/* EMail */}
                            <li className="social-links">
                                <a href="mailto:a-filipe@hotmail.fr" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-envelope" aria-hidden="true" />
                                    <p class="mail">a-filipe@hotmail.fr</p>
                                </a>
                            </li>
                            {/* GitHub */}
                            <li className="social-links">
                                <a href="https://github.com/Nez1G" rel="noopener noreferrer" target="_blank">
                                    <i className="devicon-github-plain" aria-hidden="true" />
                                    <p class="github">O meu perfil do GitHub</p>
                                </a>
                            </li>
                            {/* LinkedIN */}
                            <li className="social-links">
                                <a href="https://www.linkedin.com/in/andr%C3%A9-borges-88590411a/" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                                    <p class="github">O meu perfil do LinkedIN</p>
                                </a>
                            </li>
                            {/* Instagram */}
                            <li className="social-links">
                                <a href="https://www.instagram.com/super_canoas" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-instagram" aria-hidden="true" />
                                    <p class="github">O meu perfil do Istagram</p>
                                </a>
                            </li>
                        </ul>
                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default Contact;