import React, { Component } from 'react';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import {
    Form,
    FormGroup,
    Input,
    Label,
    Button,
    Container
  } from 'reactstrap';
  import { Redirect } from 'react-router-dom';

class ApartmentEdit extends Component{
    constructor(props){
        super(props)
        this.state = {
            form: {
                street: this.props.apartment.street,
                city: this.props.apartment.city,
                state: this.props.apartment.state,
                manager: this.props.apartment.manager,
                email: this.props.apartment.email,
                price: this.props.apartment.price,
                bedrooms: this.props.apartment.bedrooms,
                bathrooms: this.props.apartment.bathrooms,
                pets: this.props.apartment.pets
            },
            success: false
        }
    }

    handleChange = (e) => {
        // destructuring form out of state
        let { form } = this.state
        form[e.target.name] = e.target.value
        // setting state to the updated form
        this.setState({ form: form })
      }

    handleSubmit = (e) => {
        // keeps react from refreshing the page unnecessarily
        e.preventDefault()
        this.props.editApt(this.state.form, this.props.apartment.id)
        this.setState({ success: true })
    }

    render(){
        return(
            <React.Fragment>
                <h2 className="sub-headline">Edit Listing</h2>
                <Container>
                    <Form className="edit-form">
                        <FormGroup>
                            <Label>Street</Label>
                            <Input
                            type="text"
                            name="street"
                            onChange={ this.handleChange }
                            value={ this.state.form.street }
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label>City</Label>
                            <Input
                            type="text"
                            name="city"
                            onChange={ this.handleChange }
                            value={ this.state.form.city }
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label>State</Label>
                            <Input
                            type="text"
                            name="state"
                            onChange={ this.handleChange }
                            value={ this.state.form.state }
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label>Manager</Label>
                            <Input
                            type="text"
                            name="manager"
                            onChange={ this.handleChange }
                            value={ this.state.form.manager }
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label>Email</Label>
                            <Input
                            type="text"
                            name="email"
                            onChange={ this.handleChange }
                            value={ this.state.form.email }
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label>Price</Label>
                            <Input
                            type="text"
                            name="price"
                            onChange={ this.handleChange }
                            value={ this.state.form.price }
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label>Bedrooms</Label>
                            <Input
                            type="number"
                            name="bedrooms"
                            onChange={ this.handleChange }
                            value={ this.state.form.bedrooms}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label>Bathrooms</Label>
                            <Input
                            type="number"
                            name="bathrooms"
                            onChange={ this.handleChange }
                            value={ this.state.form.bathrooms }
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label>Pets</Label>
                            <Input
                            type="text"
                            name="pets"
                            onChange={ this.handleChange }
                            value={ this.state.form.pets }
                            />
                        </FormGroup>
                        <br />
                        <Button
                            name="submit"
                            color="secondary"
                            onClick={ this.handleSubmit }
                        >
                            Submit Edit
                        </Button>
                    </Form>
                </Container>
                <br />
                { this.state.success && <Redirect to={ `/show/${this.props.apartment.id}` }/> }
            </React.Fragment>
        )
    }
}
export default ApartmentEdit
