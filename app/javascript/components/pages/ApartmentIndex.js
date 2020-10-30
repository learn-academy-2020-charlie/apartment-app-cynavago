import React, { Component } from 'react'
import { 
  Button, 
  Card,
  CardDeck, 
  CardTitle, 
  Col, 
  Row 
} from 'reactstrap'
import { NavLink } from 'react-router-dom'

class ApartmentIndex extends Component{
  render(){
    return(
      <React.Fragment>
      <h2 className="sub-headline">All Apartments</h2>
      <CardDeck>
        <Row id="cards">
            { this.props.apartments.map((apartment, index) => {
              return (
                <Col lg="4" md="6" xs="12" key={ index }>
                  <Card className="index-card">
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
      <br></br>
      </React.Fragment>
    )
  }
}
export default ApartmentIndex
