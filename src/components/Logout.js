import React from 'react';
import {Link} from 'react-router-dom';


export default class Logout extends React.Component{
    constructor(props){
        localStorage.removeItem("token")
        localStorage.removeItem("onlineUser")
        super(props)
            this.state={}
        
    }
    render(){
        return(
            <div className="fontstyle" style={{textAlign:"center",marginTop:"20px"}}>
                <p>You have been logged out !!!!</p>
                <Link to="/" >Click here to Login Again</Link>
            </div>
        )
    }
}