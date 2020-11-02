import React, { Component } from 'react'
import { Nav, NavItem, Container, Row, Col } from 'reactstrap'
import { NavLink } from 'react-router-dom'

class Footer extends Component{
  render(){
    return(
      <React.Fragment>
         <div style={{ backgroundColor: "#35374B", paddingTop: "2%"}}>
          <Container>
            <Row className="footer-center">
              <Col md="4"className="mb-4">
                <h6 className="footer-title">
                  Who we are
                </h6>
                <hr className="footer-bar" style={{ width: "60px" }} />
                <p className="footer-body">
                Start your apartment hunting journey with Roof. Find apartments nearby and access unique homes, experiences, and places around the world.
                </p>
              </Col>
              <Col md="4" className="mb-4">
                <h6 className="footer-title">
                  Links
                </h6>
                <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
                <p><a className="footer-body" href="/">Home</a></p>
                <p><a className="footer-body" href="/index">All Apartments</a></p>
                { this.props.logged_in &&
                    <p><a className="footer-body" href="/myapts">My Apartments</a></p>
                }
                { this.props.logged_in &&
                    <p><a className="footer-body" href="/new">Add an Apartment</a></p>
                }
                { this.props.logged_in &&
                  <p><a className="footer-body" href={ this.props.sign_out_route }>Sign Out</a></p>
                }
                { !this.props.logged_in &&
                  <p><a className="footer-body" href={ this.props.sign_in_route }>Sign In</a></p>
               }
              </Col>
              <Col md="4" className="mb-4">
                <h6 className="footer-title">
                  Contact
                </h6>
                <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
                <p className="footer-body">
                   New York, NY 10012, US
                </p>
                <p className="footer-body">
                  info@roof.com
                </p>
                <p className="footer-body">
                  + 01 234 567 88
                </p>
              </Col>
            </Row>
          </Container>
          <div>
          <Container>
            <Row>
              &copy; {new Date().getFullYear()} Copyright
            </Row>
          </Container>
          </div>
        </div>
      </React.Fragment>
    )
  }
}
export default Footer

