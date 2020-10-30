import React, { Component } from 'react'
import {
    Jumbotron,
    Container,
    Button,
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem
} from 'reactstrap';
import { NavLink } from 'react-router-dom'
// import '../../assets/stylesheets/header.scss'

class Header extends Component{
    render(){
        return(
            <React.Fragment>

                <Jumbotron fluid className="hero">
                    <Container fluid>
                        <h1 className="headline">Find your <br/>next home.</h1>
                        <p className="body-text">Browse hundreds of apartments in your area.</p>
                        <NavLink to = {`/index`} className="hero-btn">
                            <Button className="hero-btn">Get started</Button>
                        </NavLink>
                    </Container>
                </Jumbotron>

            </React.Fragment>
        )
    }
}

export default Header 
