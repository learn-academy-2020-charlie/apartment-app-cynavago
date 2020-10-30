import React, { Component } from 'react'
import {
    Jumbotron,
    Container,
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem
} from 'reactstrap';
import { NavLink } from 'react-router-dom'
import image from '../../../assets/images/roof-logo-1.png'

class Header extends Component{
    constructor(props){
        super(props)
        this.state ={
            collapsed: true
        }
    }
    toggleNavbar = () => {
        this.state.collapsed === true ?
        this.setState({ collapsed: false }) :
        this.setState({ collapsed: true }) 
    }
    render(){
        return(
            <React.Fragment>
            <Navbar className="nav-bg">
                <NavbarBrand href="/" className="logo">
                    <img src={image} alt="Smart Rental logo"></img>
                </NavbarBrand>
                <NavbarToggler onClick={ this.toggleNavbar } className="hamburger"/>
                    <Collapse isOpen={ !this.state.collapsed } navbar>
                    <Nav navbar>
                        <NavItem>
                            <NavLink to="/">Home</NavLink>
                        </NavItem>
                            <NavItem>
                            <NavLink to="/index">All Apartments</NavLink>
                        </NavItem>
                        { this.props.logged_in &&
                        <>
                        <NavItem>
                            <a href="/myapts">My Apartments</a>
                            </NavItem>
                            <NavItem>
                            <a href="/new">Add a New Apartment</a>
                        </NavItem>
                        <NavItem>
                            <a href={ this.props.sign_out_route }>Sign Out</a>
                            </NavItem>
                            </>
                            }
                            { !this.props.logged_in &&
                            <NavItem>
                            <a href={ this.props.sign_in_route }>Sign In</a>
                        </NavItem>
                        }
                    </Nav>
                </Collapse>
            </Navbar>
            </React.Fragment>
        )
    }
}
export default Header 
     
