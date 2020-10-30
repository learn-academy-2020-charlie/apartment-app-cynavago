import React, { Component } from 'react'
import {
  Button,
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
import { NavLink } from 'react-router-dom'

class MyApartments extends Component{
  render(){
    return(
      <React.Fragment>
      <h2 className="sub-headline">My Apartments</h2>
      <Container className="myapts-container">
        <CardDeck>
          <Row id="cards">
              { this.props.banana.map((apartment, index) => {
                return (
                  <Col md="6" xs="12" key={ index }>
                    <Card className="myapts-card">
                      <CardTitle>
                        <h5>{ apartment.street }</h5>
                        <h5>{ apartment.city }, { apartment.state }</h5>
                        <hr className="index-bar" style={{ width: "60px" }} />
                        <h5>${ apartment.price }/month</h5>
                        <br></br>
                        <p>
                          <NavLink to={`/show/${apartment.id}`}>
                            <Button color="primary" className="btn-primary">
                              More Info
                            </Button>
                          </NavLink>
                        </p>
                      </CardTitle>
                    </Card>
                  </Col>
                )
              })}
          </Row>
        </CardDeck>
      </Container>
      <br></br>
      </React.Fragment>
    )
  }
}
export default MyApartments
