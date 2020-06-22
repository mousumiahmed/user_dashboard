import React from 'react';
import { connect } from 'react-redux'
import { fetchPosts } from '../actions/Pastlaunchaction.js';
import propTypes from 'prop-types';


 class Pastlaunches extends React.Component{
    constructor(props){   
        super(props)
            this.state={
            }       
    }

    componentDidMount(){
      this.props.fetchPosts()
    }
 
    render(){
        console.log(this.props.pastlaunch)     
       if (this.props.pastlaunch.length) {
           return(<div>
                { this.props.pastlaunch.map((val,index)=>{  
                return(
                    <div class="col-xs-6 col-sm-3 hover-blur mt-5">
                    <a href="#" title="">
                    <img src={val.links.mission_patch} alt=""/>
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
       }}
    }

Pastlaunches.propTypes = {
    fetchPosts:propTypes.func.isRequired,
    posts:propTypes.object.isRequired
}

const mapStateToProps = state =>  {
    return{
        loading: state.pastlaunch.loading,
        pastlaunch: state.pastlaunch.pastlaunch,
        hasErrors: state.pastlaunch.hasErrors,
    }
}
    
export default connect(mapStateToProps,{fetchPosts})(Pastlaunches)