import React from 'react';
import Login from "./components/Login.js";
import Dashboard from "./components/Dashboard.js";
import Logout from "./components/Logout.js";
import Registration from "./components/Registration.js";
import './App.css';
import {Route,Link,Switch} from 'react-router-dom'




export default class App extends React.Component{
  constructor(props){
    super(props)
    this.state={

    }
  }
  render(){
    return(
      <div>
        <Link to="/"/>       
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/Registration" component={Registration}/>
          <Route path="/dashboard" component={Dashboard}/>
          <Route path="/logout" component={Logout}/> 
        </Switch>
      </div>
    )
  }
}


