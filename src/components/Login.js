import React from 'react';
// import axios from "axios";
import {Redirect,Link} from 'react-router-dom';


export default class Login extends React.Component {
    constructor() {
      super();
      this.state = {
        fields: {},
        errors: {},
        login:false,
        arr:JSON.parse(localStorage.getItem("userData")) || [],
        onlineUser:""
      }
      this.handleChange = this.handleChange.bind(this);
      this.submitLoginForm = this.submitLoginForm.bind(this);

    };

    handleChange(e) {
      let fields = this.state.fields;
      fields[e.target.name] = e.target.value;
      this.setState({
        fields
      });
    }


      submitLoginForm(e) {
        //console.log(this.validateForm());
        e.preventDefault();
        if (this.validateForm()) {
            //console.log(this.state.arr);
            this.state.arr.map((val,index)=>{       
              if(val.email.includes(this.state.fields.email)===true && val.password.includes(this.state.fields.password)===true)
                 //return(<Redirect to ='/Login' />)               
                {
                  console.log(val.username)
                  localStorage.setItem("token",val.token)
                  localStorage.setItem("onlineUser",val.username)
                  this.setState({
                    login:true,
                    onlineUser:val.username,
                
                
                  
                  })
                }       
           })
        
        }
        this.setState({
          fields:{}
        })
      
        }
    

    validateForm() {
      let fields = this.state.fields;
      let errors = {};
      let formIsValid = true;

      if (!fields["email"]) {
        formIsValid = false;
        errors["email"] = "*Please enter your email-ID.";
      }

      if (typeof fields["email"] !== "undefined") {
        //regular expression for email validation
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (!pattern.test(fields["email"])) {
          formIsValid = false;
          errors["email"] = "*Please enter valid email-ID.";
        }
      }

      if (!fields["password"]) {
        formIsValid = false;
        errors["password"] = "*Please enter your password.";
      }

      this.setState({
        errors: errors
      });
      return formIsValid;
    }



  render() {
    
       
    console.log(this.state.onlineUser,this.state.login)
      if(this.state.login){
          return <Redirect to="/dashboard"/>
      }

    return (
          <div>
            <h2 className="fontstyle" style={{textAlign:"center",marginTop:"50px"}}>Login !!!</h2>
              <div id="register">
                  <div><i className="fa fa-user icon"></i></div>
                  <form  onSubmit= {this.submitLoginForm} >
                  <label>Email ID:</label>
                  <input type="text" name="email" placeholder="Enter Email" value={this.state.fields.email} onChange={this.handleChange}  />
                  <div className="errorMsg">{this.state.errors.email}</div>
                  <label>Password</label>
                  <input type="password" name="password" placeholder="Enter password" value={this.state.fields.password} onChange={this.handleChange} />
                  <div className="errorMsg">{this.state.errors.password}</div>
                  <input type="submit" className="button"  value="Login"/>
                  </form>
                  <div className="createAccount">
                  <small>Not Register yet? <Link to="/Registration">Register</Link></small>
                  
                </div>
          </div>
        </div>

      );
  }
}