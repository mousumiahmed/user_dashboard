import React from 'react';
import { connect } from 'react-redux'
import { fetchPosts } from '../actions/Upcomminglaunchaction.js';
import propTypes from 'prop-types';
import image from './upcomming.jpg';


 class Upcomminglaunches extends React.Component{
    constructor(props){   
        super(props)
            this.state={
            }
       
     }

    componentDidMount(){
      this.props.fetchPosts()
    }
 
    render(){
        //console.log(this.props.upcomminglaunch)
       if (this.props.upcomminglaunch.length) {
           return(<div>
                { this.props.upcomminglaunch.map((val,index)=>{
                 // console.log(val.mission_name)
                 return(
                    <div class="col-xs-6 col-sm-3 hover-blur">
                      <a href="#">
                        <img src={image} alt=""/>
                            <h2><span class="text-white">{val.mission_name}</span></h2>
                        </a>
                        <h4 class="text-center"><mark>{val.launch_date_utc}</mark></h4>
                    </div>
                    )         
                 })}

           </div>)
        }          
       else{           
        return(
            <div style={{textAlign:"center",marginTop:"20px"}}> 
                Page loaging...           
            </div>
        )
       }    
    }
}

Upcomminglaunches.propTypes = {
    fetchPosts:propTypes.func.isRequired,
    posts:propTypes.object.isRequired
}

const mapStateToProps = state =>  {
    return{
        loading: state.upcomminglaunch.loading,
        upcomminglaunch: state.upcomminglaunch.upcomminglaunch,
        hasErrors: state.upcomminglaunch.hasErrors,
    }
}
    
export default connect(mapStateToProps,{fetchPosts})(Upcomminglaunches)