import React from 'react';
import { connect } from 'react-redux'
import { fetchPosts } from '../actions/Nextlaunchaction.js';
import propTypes from 'prop-types';


 class Nextlaunches extends React.Component{
    constructor(props){   
        super(props)
            this.state={
            }     
    }

    componentDidMount(){
      this.props.fetchPosts()

    }
 
    render(){
       // console.log(this.props.nextlaunch.flight_number,this.props.nextlaunch.mission_name)         
        return(
            <div className="imgcontainer fontstyle">
                <img src="https://live.staticflickr.com/65535/50009748327_93e52a451f_o.jpg" alt="Notebook" style={{width:"100%"}}></img>
                <div class="content" style={{textAlign:"center",paddingTop:"10%"}}>
                    <p>FLIGHT NUMBER  : {this.props.nextlaunch.flight_number}</p>
                    <p>MISSION NAME  :{this.props.nextlaunch.mission_name}</p>
                    <p>LAUNCH TIME {}</p>
                    <p><mark>LAUNCH DATE  :{this.props.nextlaunch.launch_date_utc}</mark></p>
                </div>
            </div>
        )    
    }
}

Nextlaunches.propTypes = {
    fetchPosts:propTypes.func.isRequired,
    posts:propTypes.object.isRequired
}

const mapStateToProps = state =>  {
    return{
        loading: state.nextlaunch.loading,
        nextlaunch: state.nextlaunch.nextlaunch,
        hasErrors: state.nextlaunch.hasErrors,
    }
}
    
export default connect(mapStateToProps,{fetchPosts})(Nextlaunches)