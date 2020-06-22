import React from 'react'
import {Link,Redirect} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Alllaunches from "./All_launches.js";
import Latestlaunches from "./Latest_launches.js";
import Pastlaunches from "./Past_launches.js";
import Upcommimg from "./Upcomming_launches.js";
import Nextlaunch from './Next_Launches.js';
import '../App.css';
import logo from '../logo.gif';


export default class dashboard extends React.Component{
    constructor(props){
        super(props)
        const token=localStorage.getItem("token")
        
        let loggin=true;
        if(token==null){
            loggin=false
        }
        
        this.state={
            arr:[],
            onlineUser:localStorage.getItem("onlineUser"),
            loggin
            
        }
    }

    render(){

        if(this.state.loggin===false){
            return <Redirect to="/" />
        }

        return(
            <div > 
                <img className="logostyle" src={logo} alt=""></img>                
                <div class="container">
                    <h1 className="heading">ROCKET LAUNCH RECORDS </h1>
                    <div  ><span className="logoutbuttonstyle"><Link to="/logout">Logout</Link></span></div>
                    <p><span className="onlineuser">Welcome  {this.state.onlineUser}</span></p>
                </div>
                <div id="exTab1" style={{marginLeft:"10%",marginRight:"10%"}}>	
                    <ul  class="nav nav-pills">
			                <li class="active">
                                <a  href="#1a" data-toggle="tab">Alllaunches</a>
                            </li>
                            <li>
                                <a href="#2a" data-toggle="tab">Past Launches</a>
                            </li>
                            <li>
                                <a href="#3a" data-toggle="tab">Latest Launches</a>
                            </li>
                            <li>
                                <a href="#4a" data-toggle="tab">Upcomming Launches</a>
                            </li>                          
                            <li>
                                <a href="#5a" data-toggle="tab">Next Launch</a>
                            </li>                          
                        </ul>

                            <div class="tab-content clearfix">
                                <div class="tab-pane active" id="1a">
                                 <Alllaunches/>
                                </div>
                                <div class="tab-pane" id="2a">
                                    <Pastlaunches/>
                                </div>
                                <div class="tab-pane" id="3a">
                                        <Latestlaunches/>
                                </div>
                                <div class="tab-pane" id="4a">
                                    <Upcommimg/>
                                </div>
                                <div class="tab-pane" id="5a">
                                <Nextlaunch/>
                                </div>
                            </div>         
                     </div>
            </div>
        )
    }

}