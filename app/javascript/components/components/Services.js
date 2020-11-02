import React, { Component } from 'react'
import {
    Card,
    CardDeck,
    CardImg,
    CardBody,
    CardTitle,
    CardText,
    Container,
    CardSubtitle,
    Col,
    Row
} from 'reactstrap';
// import search from '../../../assets/images/search.png'
import { NavLink } from 'react-router-dom'
// import '../../assets/stylesheets/header.scss'

class Services extends Component{
    render(){
        return(
            <React.Fragment>
            <Container fluid>
                <h2 className="sub-headline">Services</h2>
                <CardDeck>
                    <Row>
                        <Col md="4" xs="12">
                            <Card className="services-card">
                                <CardTitle className="card-num">01</CardTitle>
                                <CardBody>
                                <CardSubtitle className="card-subtitle">Search apartments</CardSubtitle>
                                <CardText>
                                    Search hundreds of apartment listings and find the home you're looking for.
                                </CardText>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col md="4" xs="12">
                            <Card className="services-card">
                                <CardTitle className="card-num">02</CardTitle>
                                <CardBody>
                                <CardSubtitle className="card-subtitle">Create listings</CardSubtitle>
                                <CardText>
                                    Create and submit your own apartment listing to our site. Share your information with other users and allow them to contact you.
                                </CardText>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col md="4" xs="12">
                            <Card className="services-card"> 
                                <CardTitle className="card-num">03</CardTitle>
                                <CardBody>
                                <CardSubtitle className="card-subtitle">Contact landlords</CardSubtitle>
                                <CardText>
                                    Access the apartment listing of your liking and obtain the landlord's contact information.
                                </CardText>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </CardDeck>
            </Container>
            </React.Fragment>
        )
    }
}

export default Services



