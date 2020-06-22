import React from 'react';
import {Redirect,Link} from 'react-router-dom';

export default class Registratiin extends React.Component {
    constructor() {
      super();
      this.state = {
        fields: {"token":"hjhkjnkjlkj"},
        errors: {},
        login:false,
        arr:JSON.parse(localStorage.getItem("userData")) || []
      }

      this.handleChange = this.handleChange.bind(this);
      this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);

    };

    handleChange(e) {
      let fields = this.state.fields;
      fields[e.target.name] = e.target.value;
      this.setState({
        fields
      });
    }

    submituserRegistrationForm(e) {
      //console.log(this.validateForm());
      e.preventDefault();
      if (this.validateForm()) {
          //console.log(this.state);
          this.setState({fields:this.state.fields});
          const arr=[...this.state.arr, this.state.fields];
          const json=JSON.stringify(arr);
          localStorage.setItem("userData",json);
          this.setState({
            fields: {},
            errors: {}
          })
        }   
      }

    

    validateForm() {
      let fields = this.state.fields;
      let errors = {};
      let formIsValid = true;

      if (!fields["username"]) {
        formIsValid = false;
        errors["username"] = "*Please enter your username.";
      }

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

      if(this.state.login){
          return <Redirect to="/dashboard"/>
      }

    return (
          <div>
            <h2 className="fontstyle" style={{textAlign:"center",marginTop:"50px"}}> Register !!!</h2>
          <div id="register">
              <div><i className="fa fa-user icon"></i></div>
              <form  onSubmit= {this.submituserRegistrationForm} >
              <label>Username</label>
              <input type="text" name="username" placeholder="enter your username" value={this.state.fields.username} onChange={this.handleChange} />
              <div className="errorMsg">{this.state.errors.username}</div>
              <select name="usertype" value={this.state.fields.usertype} onChange={this.handleChange}>
                           <option>Select UserType</option>
                           <option value="Scientists">Scientists</option>
                           <option value="Student">Student</option>
                       </select>
                
  
              <label>Email ID:</label>
              <input type="text" name="email" placeholder="Enter Email" value={this.state.fields.email} onChange={this.handleChange}  />
              <div className="errorMsg">{this.state.errors.email}</div>
              <label>Password</label>
              <input type="password" name="password" placeholder="Enter Password" value={this.state.fields.password} onChange={this.handleChange} />
              <div className="errorMsg">{this.state.errors.password}</div>
              <input type="submit" className="button"  value="Register"/>
              </form>
              <div className="createAccount">
                  <small>Already have Account? <Link to="/">Login</Link></small>
                  
                </div>
          </div>
        </div>

      );
  }
}