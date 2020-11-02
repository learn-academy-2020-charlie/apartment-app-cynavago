import React from "react"
import NavBar from './components/NavBar'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import ApartmentIndex from './pages/ApartmentIndex'
import ApartmentShow from './pages/ApartmentShow'
import ApartmentNew from './pages/ApartmentNew'
import MyApartments from './pages/MyApartments'
import ApartmentEdit from './pages/ApartmentEdit'
import NotFound from './pages/NotFound'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      apartments: []
    }
  }

  // Info gets retrieved, fetch from JSON and set it to state
  componentDidMount(){
    fetch("/apartments")
    .then(response => {
      // check for a successful response
      if(response.status === 200) {
        // convert response to json and return promise
        return response.json()
      }
    })
    .then(apartmentArray => {
      // sets state with the data from backend into our empty array
      this.setState({ apartments: apartmentArray })
    })
    .catch(errors => {
      console.log("index errors:", errors)
    })
  }

  // Create new apartment method
  createApartment = (apartment) => {
    console.log(apartment)
    return fetch("/apartments", {
      // converting an object to string
      body: JSON.stringify(apartment),
      // specify info being sent and info returning should be in JSON
      headers: {
        "Content-Type": "application/json"
      },
      // HTTP verb "POST" so the correct endpoint is invoked on server
      method: "POST"
    })
    .then(response => {
      // reload if the response is good
      console.log("response status:", response.status);
      if(response.status === 200){
        this.componentDidMount()
      }
      return response
    })
    .catch(errors => {
      console.log("create errors:", errors);
    })
  }

  // Edit an apartment method
  editApt = (editApt, id) => {
    console.log("editApt:", editApt, "id:", id);
    // restful routes
    return fetch(`/apartments/${id}`, {
      // converting an object to string
      body: JSON.stringify(editApt),
      // specify info being sent and info returning should be in JSON
      headers: { "Content-Type": "application/json" },
      // HTTP verb "PATCH" so the correct endpoint is invoked on server
      method: "PATCH"
    })
    .then(response => {
      // reload if the response is good, 204 vs 200
      if(response.status === 204){
        this.componentDidMount()
      }else {
        alert("update unsuccesful") 
      }
      console.log("response:", response.status);
      return response
    })
    .catch(errors => {
      console.log("edit errors", errors);
    })
  }

  // Delete an apartment method
  deleteApt = (id) => {
    return fetch (`/apartments/${id}`, {
      headers: {"Content-Type": "application/json"},
      method: "DELETE"
    })
    .then(response => {
      console.log("delete response:", response.status);
      if(response.status === 204) {
        this.componentDidMount()
      }else {
        alert("update unsuccesful") 
      }
      return response
    })
    .catch(errors => {
      console.log("delete errors:", errors)
    })
  }

  render () {
    const {
      logged_in,
      sign_in_route,
      sign_out_route,
      current_user
    } = this.props
  
    console.log("current_user:", current_user);
    return (
      <Router>
        <NavBar
          logged_in={ this.props.logged_in }
          sign_in_route={ this.props.sign_in_route }
          sign_up_route={ this.props.sign_up_route }
          sign_out_route={ this.props.sign_out_route }
        />
        <Switch>
          <Route
            exact path="/"
            render={ (props) =>
              <Home
                logged_in={ logged_in }
                sign_in_route={ sign_in_route }
                sign_out_route={ sign_out_route }
              />
            }
          />
          <Route
            path="/index"
            render={ (props) =>
              <ApartmentIndex
                logged_in={ logged_in }
                sign_in_route={ sign_in_route }
                sign_out_route={ sign_out_route }
                apartments={ this.state.apartments }
                />
            }
          />
          <Route
            path={"/show/:id"}
            render={ (props) => {
              let id = props.match.params.id
              let apartment = this.state.apartments.find(apartment => apartment.id === parseInt(id))
              return (
                <ApartmentShow 
                  apartment={ apartment } 
                  deleteApt = { this.deleteApt }
                  logged_in={ logged_in }
                  current_user= { current_user }
                />
              )
            }}
          />

          <Route 
              path="/new"
              render={ (props) => 
                <ApartmentNew 
                  createApartment={ this.createApartment }
                  current_user={ current_user }
                /> 
              }
          />
          { logged_in &&
            <Route
              path="/myapts"
              render={ (props) => {
                let user = current_user.id
                let apartments = this.state.apartments.filter(apt => apt.user_id === user)
                console.log(user, apartments);
                return (
                  <MyApartments banana={ apartments } />
                )
              }}
            />
          }
          { logged_in &&
            <Route 
              path={"/edit/:id"}
              render={ (props) => {
                let id = props.match.params.id
                let apartment = this.state.apartments.find(apartment => apartment.id === parseInt(id))
                console.log("this is the apartment:", apartment);
                return (
                  <ApartmentEdit
                    apartment={ apartment }
                    editApt={ this.editApt}
                  />
                )
              }}
            />
          }
        <Route component= { NotFound }/>
        </Switch>
        <Footer
          logged_in={ this.props.logged_in }
          sign_in_route={ this.props.sign_in_route }
          sign_up_route={ this.props.sign_up_route }
          sign_out_route={ this.props.sign_out_route }
        />
      </Router>
    );
  }
}

export default App

