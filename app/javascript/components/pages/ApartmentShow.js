// Apartments have: a street designation, a city, state, a manager's name, manager's contact email, monthly rental price, bedrooms, bathrooms, and whether they allow pets
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
import { Redirect } from 'react-router-dom';

class ApartmentShow extends Component{
  constructor(props){
    super(props)
      this.state = {
      success: false
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.deleteApt(this.props.apartment.id);
    this.setState({ success: true })
    console.log("Apartment deleted")
  }

  render(){
    const {
      logged_in,
      sign_in_route,
      sign_out_route,
      current_user, 
      apartment
    } = this.props
    return(
      <React.Fragment>
      <h2 className="sub-headline">Apartment Listing</h2>
      <CardDeck>
        <Row id="cards">
                <Col lg="12" md="12" xs="12">
                  <Card className="show-card">
                    <CardTitle>
                      <h5 className="show-title">Street Address:</h5>
                      <p className="show-body">
                        { apartment.street }
                        <br />
                        { apartment.city }, { apartment.state }
                      </p>
                      <br />
                      <h5 className="show-title">Manager Contact Info: </h5>
                      <p className="show-body">{ apartment.manager }<br />{ apartment.email }</p>
                      <br />
                      <h5 className="show-title">${ apartment.price }/month</h5>
                      <br />
                      <h5 className="show-title">{ apartment.bedrooms } bedrooms/ { apartment.bathrooms } bathrooms </h5>
                      <br />
                      <h5 className="show-title">Pets Allowed:  </h5>
                      <p className="show-body"> { apartment.pets }</p>
                      <br />
                      { logged_in && current_user.id === apartment.user_id &&
                        <>
                          <NavLink to = {`/edit/${this.props.apartment.id}`}>
                          <Button color="primary" className="btn-primary">Edit Listing</Button>
                          </NavLink>
                          <br />
                          <br />
                          <Button color="primary" className="btn-primary" onClick = {this.handleSubmit}>
                            Delete Listing
                          </Button>
                        </>
                      }
                      <br />
                      <br />
                      <NavLink to={"/index"}>
                        <Button color="secondary">
                          Back to All Apartments
                        </Button>
                    </NavLink>
                  </CardTitle>
                  </Card>
                </Col>
        </Row>
      </CardDeck>
      <br />
      { this.state.success && <Redirect to="/index"/> }
      </React.Fragment>
    )}
}
export default ApartmentShow
